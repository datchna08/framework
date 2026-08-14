exports.LoginPage =
    class LoginPage {
        /**
         * @param {import('@playwright/test').Page} page
         */
        constructor(page) {
            this.page = page
            this.pageTitle = page.locator('.login_logo')
            this.usernameTextbox = page.getByPlaceholder('Username')
            this.passwordTextbox = page.getByPlaceholder('Password')
            this.loginButton = page.locator('#login-button')
            this.loginValidation = page.locator('span[data-test="title"]')
        }
        async navigate() {
            await this.page.goto('https://www.saucedemo.com/')
        }
        async login() {
            await this.usernameTextbox.fill('standard_user')
            await this.passwordTextbox.fill('secret_sauce')
            await this.loginButton.click()
        }
    }