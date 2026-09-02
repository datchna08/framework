exports.CheckBox = 
class CheckBox{
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page){
        this.page = page
        this.checkboxHeading  = page.getByRole('heading',{name:'Check Box'})
        this.expandButton = page.locator('.rc-tree-switcher.rc-tree-switcher_close')
        this.selectCheckBox = page.locator('.rc-tree-checkbox')
        this.checkboxoption = page.locator('.rc-tree-treenode')
        this.radioHeading = page.getByRole('heading',{name:"Radio Button"})
        this.clickYes = page.locator('#yesRadio')
        this.verification = page.locator('.text-success')
        this.clickImpertive = page.locator('#impressiveRadio')
        this.noButton = page.locator('#noRadio')
    }
    async checkboxNavigation(){
        await this.page.goto('https://demoqa.com/checkbox')
    }
    async clickExpand(){
        await this.expandButton.click()
    }
    async clickCheckbox(){
        const count = await this.selectCheckBox.count()
        for(let i=0;i<count;i++){
            await this.selectCheckBox.nth(i).check()
        }
    }
    async radioButtonNavigation(){
        await this.page.goto('https://demoqa.com/radio-button')
    }
    async selectYes(){
        await this.clickYes.click()
    }
    async selectImpertive(){
        await this.clickImpertive.click()
    }

}