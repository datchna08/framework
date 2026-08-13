exports.LoginPage = 
class LoginPage{
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page){
        this.page = page;
        this.usernameTextbox = page.locator('#username')
        this.passwordTextbox = page.locator('#password')
        this.loginButton = page.getByRole('button',{name:'Submit'})
        this.loginValidation = page.getByRole('heading',{name:'Logged In Successfully'})
        this.errorMessage = page.locator('#error')
        
    }
    async navigate(){
        await this.page.goto('https://practicetestautomation.com/practice-test-login/',{waitUntil: 'domcontentloaded'})
    }
    async login(username,password){
        await this.usernameTextbox.fill(username)
        await this.passwordTextbox.fill(password)
        await this.loginButton.click()
    }
}