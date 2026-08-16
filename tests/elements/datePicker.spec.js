const{test,expect} = require('@playwright/test')
const{DatePickerPage} = require('../../pages/DatePickerPage.js')
const date = [{
    year:'2027',
    month: '7',
    date: '15'
}]
test('datePicker',async({page})=>{
    const datePickerPage = new DatePickerPage(page)
    await datePickerPage.navigate()
    await expect(datePickerPage.checkHeading).toBeVisible()
    await datePickerPage.selectDate(date.year,date.month,date.date)
})