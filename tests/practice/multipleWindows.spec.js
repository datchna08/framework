const{test,expect} = require('@playwright/test')
test('mulitplewindow',async({page})=>{
    
// Open the URL.
await page.goto('https://the-internet.herokuapp.com/windows')
// Verify the page heading Opening a new window is visible.
await expect(page.getByRole('heading',{name:'Opening a new window'})).toBeVisible()
// Identify the Click Here link.
const clickLink = page.getByRole('link',{name:'Click Here'})
// Wait for the new page/tab to open.
// Click Click Here.
const [newPage] = await Promise.all([
page.waitForEvent('popup'),
clickLink.click()
])
// Capture the newly opened page.

// Verify the new tab's heading is:
// New Window
await expect(newPage.getByRole('heading',{name:'New Window'})).toBeVisible()
// Verify the new tab URL contains:
// /windows/new
await expect(newPage).toHaveURL(/windows\/new/)
// Switch back to the original page.

// Verify the original page heading is still:
// Opening a new window
await page.goto('https://the-internet.herokuapp.com/windows')
await expect(page.getByRole('heading',{name:'Opening a new window'})).toBeVisible()
})