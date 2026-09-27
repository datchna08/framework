exports.PatientPage = 
class PatientPage{
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page){
        this.page = page
        this.loginButton = page.getByText('Login as Admin')
        this.patientButton = page.getByRole('button',{name:'Patients'})
        this.pageHeading  = page.getByRole('heading',{name:'Patients'})
        this.searchInput = page.getByPlaceholder('Search by name or ID…')
        this.patientName = page.locator('[class="text-sm font-medium text-ink"]')
        this.vaildPatient = page.locator('[class="text-sm font-semibold text-ink"]').last()
        this.allergies = page.locator('[class="mt-3 text-xs text-soft"]')
        this.patientDetails = page.locator('[class="mt-1 text-xs text-soft"]')
    }
    async pageNavigation(){
        await this.page.goto('https://www.corewellsystems.com/industries/healthcare/demo')
    }
    async selectLogin(){
        await this.loginButton.click()
    }
    async selectPatientTab(){
        await this.patientButton.click()
    }
    async searchPatient(name){
        await this.searchInput.fill(name)
    }
    async selectPatientName(){
        await this.patientName.click()
    }
}