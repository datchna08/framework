const {test,expect} = require('@playwright/test')
test("dropdown",async({page})=>{
    const firstName = 'Vijay'
    const lastName = "CM"
    const state = "NCR"
    const city = "Delhi"
    const email = `${firstName}.${lastName}@test.com`
    await page.goto('https://demoqa.com/automation-practice-form')
    await expect(page.getByRole('heading',{name:'Practice Form'})).toBeVisible()
    await page.getByPlaceholder('First Name').fill(firstName)
    await page.getByPlaceholder('Last Name').fill(lastName)
    await page.getByPlaceholder('name@example.com').fill(email)
    await page.locator('#state').click()
    await page.locator('[id^="react-select-3-option"]').filter({hasText:state}).click()
    await expect(page.locator('#state')).toContainText(state)
    await page.locator('#city').click()
    await page.locator('[id^="react-select-4-option"]').filter({hasText:city}).click()
    await expect(page.locator('#city')).toContainText(city)
    await expect(page.getByPlaceholder('First Name')).toHaveValue(firstName)
    await expect(page.getByPlaceholder('Last Name')).toHaveValue(lastName)
    await expect(page.getByPlaceholder('name@example.com')).toHaveValue(email)
})