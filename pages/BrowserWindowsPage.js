exports.BrowserWindowsPage = 
class BrowserWindowsPage{
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page){
        this.page= page;
        this.pageHeading = page.getByRole('heading',{name:'Browser Windows'})
        this.newTabButton = page.locator('#tabButton')
    }
    async pageNavigation(){
        await this.page.goto('https://demoqa.com/browser-windows')
    }
    async openNewtab(){
        await this.newTabButton.click()
    }
}