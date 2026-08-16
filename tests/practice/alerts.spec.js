const{test,expect} = require('@playwright/test')
test('alerts',async({page})=>{ 
// Open the URL.
await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
// Verify the heading JavaScript Alerts is visible.
await expect(page.getByRole('heading',{name:'JavaScript Alerts'})).toBeVisible()
// Click Click for JS Alert.
page.once('dialog',async dialog=>{
    console.log('Alert message:', dialog.message())
    await dialog.accept()
})
await page.getByRole('button',{name:'Click for JS Alert'}).click()
// Handle the alert by accepting it.
// Verify the result message is:
const result = page.locator('#result')
// You successfully clicked an alert
await expect(result).toContainText('You successfully clicked an alert')
// Click Click for JS Confirm.
// Handle the confirmation dialog by choosing Cancel.
page.once('dialog',async dialog=>{
    console.log('Alert message:', dialog.message())
    await dialog.dismiss()
})
await page.getByRole('button',{name:'Click for JS Confirm'}).click()
// Verify the result message is:
// You clicked: Cancel
await expect(result).toContainText('You clicked: Cancel')
// Click Click for JS Confirm again.
page.once('dialog',async dialog=>{
    console.log('Alert message:', dialog.message())
    await dialog.accept()
})
await page.getByRole('button',{name:'Click for JS Confirm'}).click()
// Handle the confirmation dialog by choosing OK/Accept.
// Verify the result message is:
// You clicked: Ok
await expect(result).toContainText('You clicked: Ok')
// Click Click for JS Prompt.
// Enter:
// QA Automation
page.once('dialog',async dialog=>{
    console.log('Alert message:', dialog.message())
    await dialog.accept("QA Automation")
})
await page.getByRole('button',{name:'Click for JS Prompt'}).click()
// into the prompt.
// 14. Accept the prompt.
// 15. Verify the result message contains:

// QA Automation
await expect(result).toContainText('QA Automation')
})