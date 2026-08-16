const{test,expect} = require('@playwright/test')
test('Dynamic Wait',async({page})=>{ 
// Open the URL.
await page.goto('https://the-internet.herokuapp.com/dynamic_controls')
// Verify the heading Dynamic Controls is visible.
await expect(page.getByRole('heading',{name:'Dynamic Controls'})).toBeVisible()
// Locate the checkbox labeled:
const checkBox = page.locator('#checkbox')
// It's gone!
const message = page.locator('#message')
// Verify the checkbox is initially visible.
await expect(checkBox).toBeVisible()
// Click Remove.
await page.getByRole('button',{name:'Remove'}).click()
// Wait for the checkbox to be removed from the DOM.
await page.waitForSelector('#checkbox', {
    state: 'detached'
})
// Verify that the checkbox is no longer visible.
await expect(checkBox).toBeHidden()
// Verify that the page displays:
// It's gone!
await expect(message).toContainText("It's gone!")
// Click Add.
await page.getByRole('button',{name:'Add'}).click()
// Wait for the checkbox to appear again.
await page.waitForSelector('#checkbox',{state:"visible"})
// Verify that the checkbox is visible.
await expect(checkBox).toBeVisible()
// Verify that the checkbox is unchecked.
await expect(checkBox).not.toBeChecked()
// Click the checkbox.
await checkBox.check()
// Verify that the checkbox is now checked.
await expect(checkBox).toBeChecked()
// Add appropriate assertions to prove the complete state transition.
})