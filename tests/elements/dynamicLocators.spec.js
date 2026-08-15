const{test,expect} = require('@playwright/test')
const{WebTablesPage} = require('../../pages/WebTablesPage.js')
test('dynamic test',async({page})=>{
    const webtablePage = new WebTablesPage(page)
    await webtablePage.navigate()
    await webtablePage.editButton()
    await expect(webtablePage.form).toBeVisible()
    await expect(webtablePage.firstName).toHaveValue('Alden')
})