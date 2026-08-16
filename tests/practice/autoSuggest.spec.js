const{test,expect} = require('@playwright/test')
test('KeyBoard Action',async({page})=>{ 
// Open the Wikipedia homepage.
await page.goto('https://www.wikipedia.org/')
// Verify the main search input is visible.
const mainSearch = page.locator('#searchInput')
await expect(mainSearch).toBeVisible()
// Enter:
// Playwright
await mainSearch.fill('Playwright')
// Wait for the search suggestions to appear.
await page.waitForSelector('.suggestions-dropdown',{state:'visible'})
// Verify that suggestions are displayed.
await expect(page.locator('.suggestions-dropdown')).toBeVisible()
// Select the suggestion containing:
// Playwright
const suggestion = page.locator('.suggestion-text')
await suggestion.filter({hasText:"Playwright"}).first().click()
// Verify that the resulting page is related to Playwright.
await expect(page).toHaveURL('https://en.wikipedia.org/wiki/Playwright')
// Verify the search/result page has loaded successfully.
await expect(page.locator('#firstHeading')).toContainText('Playwright')
 })