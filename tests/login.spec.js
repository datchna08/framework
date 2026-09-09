const {test,expect} = require('@playwright/test')
const {LoginPage} = require('../pages/LoginPage.js')
test.describe('Validate login',()=>{
    test.beforeEach(async({page})=>{
        const loginPage = new LoginPage(page)
        await loginPage.pageNavigation()
        await expect(loginPage.pageHeading).toBeVisible()     
    })
test('Valid login',async({page})=>{
    const loginPage1  = new LoginPage(page)
    await loginPage1.login('tomsmith','SuperSecretPassword!')
    let message = await loginPage1.getAuthMessage()
    await expect(message).toContain('You logged into a secure area!')
    await loginPage1.logout()
    await expect(loginPage1.pageHeading).toBeVisible()
})
test('Invalid login',async({page})=>{
    const loginPage2 = new LoginPage(page)
    await loginPage2.login('tomsmith','SuperSecretPassword')
    const message1 = await loginPage2.getAuthMessage()
    await expect(message1).toContain('Your password is invalid!')
})
test.afterEach(async()=>{
    console.log('Test excuted sucessfully')
})
})
