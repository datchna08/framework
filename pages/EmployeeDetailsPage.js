//@ts-check
exports.EmployeeDetailsPage =
    class EmployeeDetailsPage {
        /**
         * @param {import('@playwright/test').Page} page
         */
        constructor(page) {
            this.page = page
            this.pimLink = page.getByRole('link', { name: 'PIM' })
            this.tableRow = page.locator('.oxd-table-row')
            this.heading = page.getByRole('heading', { name: 'Personal Details' })
            this.otherID = page.locator('.oxd-input-group').filter({ hasText: 'Other Id' }).locator('.oxd-input.oxd-input--active')
            this.submitButton = page.getByRole('button', { name: 'Save' })
        }
        async clickPim() {
            await this.pimLink.click()
        }
        async selectEmployee() {
            await this.tableRow.filter({ has: this.page.locator('.oxd-table-cell.oxd-padding-cell') }).first().click()
        }
        async fillOtherId(id) {
            await this.otherID.fill(id)
        }
        async clickSaveButton() {
            await this.submitButton.first().click()
        }
    }