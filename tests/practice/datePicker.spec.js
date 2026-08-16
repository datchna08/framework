const { test, expect } = require('@playwright/test')
test('Date Picker', async ({ page }) => { 
    const date = "10/15/2026"
    const time = "October 20, 2026 12:00 PM"
    await page.goto('https://demoqa.com/date-picker')
//  Verifies the Date Picker heading is visible.
await expect(page.getByRole('heading',{name:'Date Picker'})).toBeVisible()
// Locate the Select Date field.
const dataValue = page.locator('#datePickerMonthYearInput')
// Set the date to:
// 10/15/2026
await dataValue.fill(date)
// Verify that the input contains the selected date.
await expect(dataValue).toHaveValue(date)
// Locate the Date and Time field.
const datetimeValue = page.locator('#dateAndTimePickerInput')
// Open the Date and Time picker.
// Select the date:
// October 20, 2026
// Select the time:
// 12:00 PM
await datetimeValue.fill(time)
// Verify that the Date and Time field contains the selected date/time.
await expect(datetimeValue).toHaveValue(time)
})