const { test, expect } = require('@playwright/test')
test('Date Picker', async ({ page }) => { 
    const date = "10/15/2026"
    const time = "October 20, 2026 12:00 PM"
    await page.goto('https://demoqa.com/date-picker')
// Locate the Select Date input.
const dateValue = page.locator('#datePickerMonthYearInput')
await dateValue.click()
// Click the input to open the calendar.
// Using the calendar UI, navigate to:
// October 2026
// Select:
// October 15, 2026

while(true){
const currentYear = await page.locator('.react-datepicker__year-select').inputValue()
const currentMonth = await page.locator('.react-datepicker__month-select').inputValue()
console.log(currentMonth)
if(currentYear === "2026" && currentMonth === "9"){
    break;
}
await page.locator('.react-datepicker__navigation--next').click()

}
 await page
        .locator('.react-datepicker__day:not(.react-datepicker__day--outside-month)')
        .filter({ hasText: '15' })
        .click()
await expect(dateValue).toHaveValue(date)})
// Verify the input contains:
// 10/15/2026
test("selectOption",async({page})=>{
        await page.goto('https://demoqa.com/date-picker')
// Locate the Select Date input.
const dateValue = page.locator('#datePickerMonthYearInput')
await dateValue.click()
 const year = page.locator('.react-datepicker__year-select')
const month = page.locator('.react-datepicker__month-select')
await year.selectOption('2026')
await month.selectOption('11')
 await page
        .locator('.react-datepicker__day:not(.react-datepicker__day--outside-month)')
        .filter({ hasText: '25' })
        .click()
await expect(dateValue).toHaveValue('12/25/2026')
})
