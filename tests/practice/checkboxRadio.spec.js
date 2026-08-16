const {test,expect} = require('@playwright/test')
test("CheckBox & RadioButton",async({page})=>{
    
// Opens the Practice Form.
await page.goto('https://demoqa.com/automation-practice-form')
// Verifies the Practice Form heading is visible.
await expect(page.getByRole('heading',{name:'Practice Form'})).toBeVisible()
// Selects the Male radio button.
const malecheckBox = page.locator('#gender-radio-1')
await malecheckBox.check()
// Verifies that Male is selected.
await expect(malecheckBox).toBeChecked()
// Selects the Sports hobby checkbox.
const sportsCheckbox = page.locator('#hobbies-checkbox-1')
await sportsCheckbox.check()
// Selects the Reading hobby checkbox.
const readingCheckbox = page.locator('#hobbies-checkbox-2')
await readingCheckbox.check()
// Verifies that both Sports and Reading are checked.
await expect(sportsCheckbox).toBeChecked()
await expect(readingCheckbox).toBeChecked()
// Verifies that Female is not selected.
await expect(page.locator('#gender-radio-2')).not.toBeChecked()
// Unchecks Reading.
await readingCheckbox.uncheck()
// Verifies that Reading is no longer checked.
await expect(readingCheckbox).not.toBeChecked()
// Leaves Sports selected.
await expect(sportsCheckbox).toBeChecked()
// Add appropriate assertions to prove the final state.
})