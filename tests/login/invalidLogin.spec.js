const {test,expect} = require('@playwright/test')
const{LoginPage} = require('../../pages/LoginPage.js')
const loginData = require('../../test-data/loginData.json')
const{username,password,expectedError} = loginData.invalidUsername
const{username:user,password:pass,expectedError:error} = loginData.invalidPassword
test.describe("invalid data",async()=>{
test('invalid username',async({page})=>{
    const loginPage = new LoginPage(page)
    await loginPage.navigate()
    await loginPage.login(username,password)
    await expect(loginPage.errorMessage).toContainText(expectedError)
})
test('invalid password',async({page})=>{
    const loginPage = new LoginPage(page)
    await loginPage.navigate()
    await loginPage.login(user,pass)
    await expect(loginPage.errorMessage).toContainText(error)
})

})