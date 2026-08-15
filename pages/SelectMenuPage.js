exports.SelectMenuPage =
class SelectMenuPage{
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page){
        this.page = page
        this.verifyHeading = page.getByRole('heading',{name:'Select Menu'})
        this.clickSelectValue = page.locator('#withOptGroup')
        this.valueOption = page.locator('[id^="react-select-2-option"]')
        this.clickSelectOne = page.locator('#selectOne')
        this.oneValue = page.locator('[id^="react-select-3-option"]')
        this.clickOldStyle = page.locator('#oldSelectMenu')
    }
    async navigate(){
        await this.page.goto('https://demoqa.com/select-menu')
    }
    async selectValue(option){
        await this.clickSelectValue.click()
        await this.valueOption.filter({hasText:option}).click()
    }
    async selectOld(){
        await this.clickOldStyle.selectOption({value:'2'})
    }
    async selectOne(option){
        await this.clickSelectOne.click()
        await this.oneValue.filter({hasText:option}).click()
    }
}