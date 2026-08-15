exports.WebTablesPage = 
class WebTablesPage{
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page){
        this.page = page
        this.table = page.locator('.-striped')
        this.tableRow = this.table.locator('tbody tr')
        this.editBtn = page.locator('[id^="edit-record"]')
        this.form = page.locator('#registration-form-modal')
        this.firstName = page.getByPlaceholder('First Name')
    }
    async navigate(){
        await this.page.goto('https://demoqa.com/webtables')
    }
    async editButton(){
        const firstname = await this.tableRow.filter({hasText:'Alden'})
        const edit = await firstname.locator('[id^="edit-record"]')
        await edit.click()
    }
}