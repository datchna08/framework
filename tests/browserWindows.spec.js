const { test, expect } = require('@playwright/test')
const { BrowserWindowsPage } = require('../pages/BrowserWindowsPage')
test('Verify new browser tab opens successfully', async ({ page }) => {
    const browserWindowsPage = new BrowserWindowsPage(page)
    await browserWindowsPage.pageNavigation()
    await expect(browserWindowsPage.pageHeading).toBeVisible()
    const [newPage] = await Promise.all([
        page.waitForEvent('popup'),
        browserWindowsPage.openNewtab()
    ])
    await expect(newPage).toHaveURL('https://demoqa.com/sample')
    await expect(newPage.getByRole('heading', { name: 'This is a sample page' })).toBeVisible()
    // await expect(browserWindowsPage.page).toBeVisible()

    await newPage.close()
    await expect(browserWindowsPage.pageHeading).toBeVisible()

})