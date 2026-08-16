const { test, expect } = require('@playwright/test')
test('Web Table', async ({ page }) => { 
    await page.goto('https://the-internet.herokuapp.com/tables')
// Locate the first web table.
const table = await page.locator('#table1')
// Locate the table header columns.
const tableColumns = await table.locator('thead tr th')
// Locate all table body rows.
const tableRows = await table.locator('tbody tr')
// Verify the table has 4 employee records.
await expect(tableRows).toHaveCount(4)
// Verify the table has 6 columns.
await expect(tableColumns).toHaveCount(6)
// Extract the Last Name from every row using a loop.
const actualNames = []
for(let i=0;i<await tableRows.count();i++){
    const lastNames = await tableRows.nth(i).locator('td').nth(0).textContent()
    actualNames.push(lastNames.trim())
}
// Store the extracted Last Names in an array.
console.log(actualNames)
// Verify the complete Last Name list is:
// Smith
// Bach
// Doe
// Conway
const expectedName = [
        'Smith',
        'Bach',
        'Doe',
        'Conway'
    ]
    await expect(actualNames).toEqual(expectedName)
// Find the employee whose Last Name is Smith without using a hardcoded row number.
const smithRow = await tableRows.filter({hasText:'Smith'})
// Extract the complete Smith row.
console.log(await smithRow.textContent())
// Verify Smith's row contains:
// John
// jsmith@gmail.com
expect(smithRow).toContainText("John")
expect(smithRow).toContainText("jsmith@gmail.com")
// Find the employee whose Last Name is Doe.
const doeRow = await tableRows.filter({hasText:'Doe'})
// Verify Doe's row contains:
// Jason
// jdoe@hotmail.com
expect(doeRow).toContainText("Jason")
expect(doeRow).toContainText("jdoe@hotmail.com")
// Print the extracted Last Names.
console.log(await doeRow.textContent())
// Print the Smith row.
// Print the Doe row.
})