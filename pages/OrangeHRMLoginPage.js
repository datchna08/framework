//@ts-check
exports.OrangeHRMLoginPage =
    class OrangeHRMLoginPage {
        /**
         * @param {import('@playwright/test').Page} page
         */
        constructor(page) {
            this.page = page
            this.loginTitle = page.getByText('Login')
            this.usernameInput = page.getByPlaceholder('Username')
            this.passwordInput = page.getByPlaceholder('Password')
            this.loginButton = page.getByRole('button', { name: 'Login' })
        }
        async pageNavigation() {
            await this.page.goto('https://opensource-demo.orangehrmlive.com/')
        }
        async pageHeading() {
            return this.loginTitle.first()
        }
        async login(username, password) {
            await this.usernameInput.fill(username)
            await this.passwordInput.fill(password)
            await this.loginButton.click()
        }
    }