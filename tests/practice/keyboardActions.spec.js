const{test,expect} = require('@playwright/test')
test('KeyBoard Action',async({page})=>{
//     Open the URL.
await page.goto('https://the-internet.herokuapp.com/key_presses')
// Verify the heading Key Presses is visible.
await expect(page.getByRole('heading',{name:'Key Presses'})).toBeVisible()
// Locate the text input.
const textInput = await page.locator('#target')
// Click/focus the input.
await textInput.click()
// Type:
// Hello QA
await textInput.pressSequentially('Hello QA')
// Verify that the page displays the key/result information after typing.
const result = page.locator('#result')
await expect(result).toContainText('A')
// Press:
// Enter
await textInput.press('Enter')
// Verify the page displays:
// ENTER
await expect(result).toContainText('ENTER')
// Clear the input using a keyboard action, not fill('').
await textInput.press('Control+A')
await textInput.press('Backspace')
// Verify that the input is empty.
await expect(textInput).toHaveValue('')
// Press:
// Escape
await textInput.press('Escape')
// Verify the page displays:
// ESC
await expect(result).toContainText('ESC')
 })
    