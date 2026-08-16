const { test, expect } = require('@playwright/test')
test('Menu Button', async ({ page }) => {
    await page.goto('https://demoqa.com/select-menu')

const selectvalueDropdown = page.locator('#withOptGroup')
const selectOneDropdown = page.locator('#selectOne')
const multiSelectDropdown = page.locator('#react-select-4-input')
const values = [
    { names: 'Group 1, option 2' },
    { names: 'Mr.' },
    { names: ['Green', 'Blue'] }
]
const actualValues = []
for (let value of values) {
    if (value.names === "Group 1, option 2") {
        // Select one value from the native dropdown.
        
        await selectvalueDropdown.click()
        await page.locator('[id^="react-select-2-option"]').filter({ hasText: value.names }).click()
        const selectedValue =
                await selectvalueDropdown.textContent()

            actualValues.push(selectedValue.trim())

            expect(selectedValue.trim())
                .toContain(value.names)
    }
    else if (value.names === "Mr.") {
        // Select one value from Select One.       
        await selectOneDropdown.click()
        await page.locator('[id^="react-select-3-option"]').filter({ hasText: value.names }).click()
        const selectedValue =
                await selectOneDropdown.textContent()

            actualValues.push(selectedValue.trim())

            expect(selectedValue.trim())
                .toContain(value.names)
    }
    else if (Array.isArray(value.names)) {
        for (let color of value.names) {
            // Select one or more values from the multi-select dropdown.
            await multiSelectDropdown.click()
            await page.locator('[id^="react-select-4-option"]').filter({ hasText: color }).click()
            const selectedValue = await page.locator('.css-1p3m7a8-multiValue').filter({ hasText: color }).textContent()
            actualValues.push(selectedValue.trim())
            expect (selectedValue.trim()).toContain(color)
        }
    }
}
console.log(actualValues)
})