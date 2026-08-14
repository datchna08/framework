exports.ProductsPage = 
class ProductsPage{
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page){
        this.page = page
        this.products = page.locator('.inventory_item')
        this.productNames = page.locator('.inventory_item_name')
        this.productPrices = page.locator('.inventory_item_price')
        this.addtocartButton = page.locator(".btn.btn_primary.btn_small.btn_inventory")
    }async getProductCount() {
        return await this.products.count()
    }

    async getProductNames() {
        return await this.productNames.allTextContents()
    }

    async getProductPrices() {
        return await this.productPrices.allTextContents()
    }

    async isProductListDisplayed() {
        return await this.products.first().isVisible()
    }
}