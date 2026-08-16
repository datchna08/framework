exports.DatePickerPage = 
class DatePickerPage{
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page){
        this.page = page
        this.checkHeading  = page.getByRole('heading',{name:'Date Picker'})
        this.dateInput = page.locator('#datePickerMonthYearInput')
        this.yearDropdown = page.locator('.react-datepicker__year-select')
        this.monthDropdown = page.locator('.react-datepicker__month-select')
        this.nextMonthButton =
    page.getByRole('button', { name: 'Next Month' })

this.previousMonthButton =
    page.getByRole('button', { name: 'Previous Month' })
        this.calendarDay = page.locator('.react-datepicker__day:not(.react-datepicker__day--outside-month)')
        this.monthYear = page.locator('.react-datepicker__current-month')
        
    }
    async navigate(){
        await this.page.goto('https://demoqa.com/date-picker')
    }
    async selectDate(year,month,date){
        await this.dateInput.click()
        console.log(await this.monthYear.textContent())
        while(true){
        
            const currentYear = await this.yearDropdown.inputValue()
            const currentMonth = await this.monthDropdown.inputValue()
            if(currentMonth === month && currentYear === year){
                break;
            }
            if(Number(currentYear)<Number(year)){
                await this.nextMonthButton.click()
            }
            else{
                await this.previousMonthButton.click()
            }
            
        }
        await this.calendarDay.filter({hasText:date}).click()
        
    }
}