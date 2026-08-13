const {test,expect} = require('@playwright/test')
const{LoginPage} = require('../../pages/LoginPage.js')
const loginData = require('../../test-data/loginData.json')
const{username,password} = loginData.validUser
test('ValidLogin',async({page})=>{
    const loginPage = new LoginPage(page)
    await loginPage.navigate()
    await loginPage.login(username,password)
    await expect(loginPage.loginValidation).toBeVisible()
})