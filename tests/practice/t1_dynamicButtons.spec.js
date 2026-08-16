const { test, expect } = require('@playwright/test')
test('Click Validation', async ({ page }) => {
    await page.goto('https://demoqa.com/buttons')
    // // Click the Click Me button.
    // const clickMeBtn = page.getByRole('button',{name:'Click Me'}).last()
    // await clickMeBtn.click()
    // await expect(page.locator('#dynamicClickMessage')).toContainText('You have done a dynamic click')
    // // Double-click the Double Click Me button.
    // const doubleClickBtn = page.getByRole('button',{name:'Double Click Me'})
    // await doubleClickBtn.dblclick()
    // await expect(page.locator('#doubleClickMessage')).toContainText('You have done a double click')
    // // Right-click the Right Click Me button.
    // const rightClickBtn = page.getByRole('button',{name:'Right Click Me'})
    // await rightClickBtn.click({button:'right'})
    // await expect(page.locator('#rightClickMessage')).toContainText('You have done a right click')
    // // Click the button whose ID is dynamically generated.
    // await clickMeBtn.click()

// Create an array/collection containing the 4 button locators.
const buttons = [
    {locators: page.getByRole('button',{name:'Click Me'}).last(),action: "click",message: '#dynamicClickMessage'},
    {locators: page.getByRole('button',{name:'Double Click Me'}),action: "dbclick",message: '#doubleClickMessage'},
    {locators:page.getByRole('button',{name:'Right Click Me'}),action: "right",message: '#rightClickMessage'},
    {locators:page.getByRole('button', { name: 'Click Me' }).last(),action: "dynamic",message: '#dynamicClickMessage'}
]

// Use a for loop to click each button.
const actualMessage = []
for(let button of buttons){
    if(button.action === "click"){
        await button.locators.click()
    }
    if(button.action === "dbclick"){
        await button.locators.dblclick()
    }
    if(button.action === "right"){
        await button.locators.click({button:'right'})
    }
    if(button.action === "dynamic"){
        await button.locators.click()
    }
    // After each click, extract the resulting message text.
let message = await page.locator(button.message).textContent()
// Store each extracted message in an array.
actualMessage.push(message.trim())
}
// At the end, assert that your extracted-message array matches the expected-message array.
console.log(actualMessage)
const expectedMessages = [
        'You have done a dynamic click',
        'You have done a double click',
        'You have done a right click',
        'You have done a dynamic click'
    ]
    expect(actualMessage).toEqual(expectedMessages)
})