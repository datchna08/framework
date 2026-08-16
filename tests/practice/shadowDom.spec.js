const{test,expect} = require('@playwright/test')
test('alerts',async({page})=>{ 
// Open the URL.
await page.goto('https://the-internet.herokuapp.com/shadowdom')
// Verify the page heading Shadow DOM is visible.
await expect(page.getByRole('heading',{name:'Simple template'})).toBeVisible()
// Locate the text displayed inside the Shadow DOM:
const shadowRoot = page.locator('#my-paragraph')
const root = shadowRoot.locator('[slot="my-text"]')
// Let's have some different text
// Verify that the text is visible.
await expect(root).toBeVisible()
// Locate the input field inside the Shadow DOM.
// Enter:
// QA Automation
// Verify the input contains:
// QA Automation
// Add appropriate assertions proving that you successfully interacted with elements inside the Shadow DOM.
 })