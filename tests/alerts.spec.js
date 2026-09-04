const {test,expect}  = require('@playwright/test')
const {AlertsPage} = require('../pages/AlertsPage.js')
test('handle alerts',async({page})=>{
    const alertPage = new AlertsPage(page)
    await alertPage.navigateToAlerts()
    await expect(alertPage.pageHeading).toBeVisible()
    // ==========================================
    // simple alert
    let alertMessage = "";
    page.once('dialog',async(dialog) =>{
        alertMessage = dialog.message()
        await expect(alertMessage).toBe('You clicked a button')
        await dialog.accept()
    })
    await alertPage.clickAlertButton()
    // ============================================================
    // Confirmation alert - accept
    let confirmMessage = ""
    page.once('dialog',async (dialog)=>{
        confirmMessage = dialog.message()
        await expect(confirmMessage).toBe('Do you confirm action?')
        await dialog.accept()
    })
    await alertPage.clickConfirmButton()
    await expect(alertPage.confirmResult).toContainText('Ok')
    // ==========================================
    // Confirmation - Dismiss
    // ==========================================
    page.once('dialog',async (dialog)=>{
        await expect(dialog.message()).toBe('Do you confirm action?')
        await dialog.dismiss()
    })
    await alertPage.clickConfirmButton()
    await expect(alertPage.confirmResult).toContainText('Cancel')
    // ==========================================
    // Prompt
    // ==========================================
    const testValue = 'Vijay'
    page.once('dialog',async (dialog)=>{
        await expect(dialog.message()).toBe('Please enter your name')
        await dialog.accept(testValue)
    })
    await alertPage.clickPromptButton()
    await expect(alertPage.promptResult).toContainText(testValue)
})