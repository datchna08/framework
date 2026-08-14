const{test,expect} = require('@playwright/test')
const {ProductsPage} = require('../../pages/E-COMMERCE/ProductsPage.js')
const {LoginPage} = require('../../pages/E-COMMERCE/LoginPage.js')
test('ProductValidation',async({page})=>{
    const loginPage = new LoginPage(page)
    const productsPage = new ProductsPage(page)
    await loginPage.navigate()
    await expect(loginPage.pageTitle).toHaveText('Swag Labs')
    await loginPage.login()
    await expect(loginPage.loginValidation).toHaveText('Products')
    // Validate product collection
    await expect(productsPage.products).toHaveCount(6)

    // Validate product names
    await expect(productsPage.productNames).toHaveCount(6)

    const productNames = await productsPage.getProductNames()

    for (const productName of productNames) {
        expect(productName.trim()).not.toBe('')
    }

    // Validate product prices
    await expect(productsPage.productPrices).toHaveCount(6)

    const productPrices = await productsPage.getProductPrices()

    for (const productPrice of productPrices) {
        expect(productPrice.trim()).not.toBe('')
    }

    // Validate product list is visible
    await expect(productsPage.products.first()).toBeVisible()
})