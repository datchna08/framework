exports.AlertsPage = 
class AlertsPage{
    /**
     * @param {import("@playwright/test").Page} page
     */
    constructor(page){
        this.page = page;
        this.pageHeading = page.getByRole('heading',{name:'Alerts'})
        this.alertButton = page.locator('#alertButton')
        this.confirmButton = page.locator('#confirmButton')
        this.confirmResult = page.locator('#confirmResult')
        this.promptButton = page.locator('#promtButton')
        this.promptResult = page.locator('#promptResult')

    }
    async navigateToAlerts(){
        await this.page.goto('https://demoqa.com/alerts')
    }
    async clickAlertButton(){
        await this.alertButton.click()
    }
    async clickConfirmButton(){
        await this.confirmButton.click()
    }
    async clickPromptButton(){
        await this.promptButton.click()
    }
}