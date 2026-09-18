exports.PracticeFormPage = 
class PracticeFormPage{
   /**
    * @param {import('@playwright/test').Page} page
    */
   constructor(page){
        this.page = page;
        this.pageHeading = page.getByRole('heading',{name:'Practice Form'})
        this.firstnameInput = page.getByPlaceholder('First Name')
        this.lastnameInput = page.getByPlaceholder('Last Name')
        this.emailInput = page.getByPlaceholder('name@example.com')
        this.selectGender = page.locator("[value='Male']")
        this.mobilenumberInput = page.getByPlaceholder('Mobile Number')
        this.submitButton = page.getByRole('button',{name:'Submit'})
        this.verify = page.locator('[id^= "example-modal"]')
        this.tableVerify = page.locator('.modal-body tbody tr')
}
async navigation(){
    await this.page.goto('https://demoqa.com/automation-practice-form')
}
async enterFirstName(firstname){
    await this.firstnameInput.fill(firstname)
}
async enterlastName(lastname){
    await this.lastnameInput.fill(lastname)
}
async enterEmail(mail){
    await this.emailInput.fill(mail)
}
async gender(){
    await this.selectGender.click()
}
async enterMobileNumber(mobilenumber){
    await this.mobilenumberInput.fill(mobilenumber)
}
async submit(){
    await this.submitButton.click()
}
}