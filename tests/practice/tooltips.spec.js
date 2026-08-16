const{test,expect} = require('@playwright/test')
test('Tool Tips',async({page})=>{ 
// Open the URL.
await page.goto('https://demoqa.com/tool-tips')
// Verify the heading Tool Tips is visible.
await expect(page.getByRole('heading',{name:'Tool Tips'})).toBeVisible()
// Locate the Hover me to see button.
const toolTip = page.locator('#toolTipButton')
// Hover over the button.
await toolTip.hover()
// Verify that the tooltip appears.
await expect(page.locator('.tooltip-inner')).toBeVisible()
// Verify the tooltip text is:
// Thanks for the tip
await expect(page.locator('.tooltip-inner')).toContainText('You hovered over the Button')
// Move the mouse away from the button.
await page.locator('#buttonToolTopContainer').hover()
// Verify that the tooltip disappears.
await expect(page.locator('.tooltip-inner')).toBeHidden()
// Locate the Hover me to see text input.
const textField = page.locator('#toolTipTextField')
// Hover over the input.
await textField.hover()
// Verify that the tooltip appears.
await expect(page.locator('.tooltip-inner')).toBeVisible()
// Verify the tooltip text is:
// You hovered over the text field
await expect(page.locator('.tooltip-inner')).toContainText('You hovered over the text field')
// Move the mouse away.
await page.locator('#buttonToolTopContainer').hover()
// Verify that the tooltip disappears.
await expect(page.locator('.tooltip-inner')).toBeHidden()
})