exports.LoginPage = 
class LoginPage{
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page){
        this.page = page
        this.pageHeading  = page.getByRole('heading',{name:'Login Page'})
        this.usernameInput = page.locator('#username')
        this.passwordInput = page.locator('#password')
        this.loginButton = page.locator('button[type="submit"]')
        this.authMessage = page.locator('#flash')
    }
    async pageNavigation(){
        await this.page.goto('https://the-internet.herokuapp.com/login')
    }
    async login(username, password){
        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.loginButton.click()
    }
    async getAuthMessage(){
        return await this.authMessage.textContent()
    }
}