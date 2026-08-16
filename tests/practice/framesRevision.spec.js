const{test,expect} = require('@playwright/test')
test('Frames',async({page})=>{ 
// Open the URL.
await page.goto('https://ui.vision/demo/webtest/frames')
// Verify the main page has loaded.
await expect(page).toHaveURL(/frames/)
// Identify the first frame.
const frames = page.frameLocator('[src="frame_1.html"]')
// Enter:
// QA Automation

// into the text field inside the first frame.
const frameText = frames.locator('[name="mytext1"]')
await frameText.fill("QA Automation")
// 5. Verify the entered value.
await expect(frameText).toHaveValue('QA Automation')
// 6. Inside the appropriate frame structure, locate the second/nested frame.
const nestedFrame = frames.frameLocator('[src="frame_2.html"]')
// 7. Interact with the nested frame's text field.
// 8. Enter:

// Playwright
await nestedFrame.locator('[name="mytext2"]').fill('Playwright')
// Verify the entered value.
await expect(nestedFrame.locator('[name="mytext2"]')).toHaveValue('Playwright')
// Return to the main page context.
await page.goto('https://ui.vision/demo/webtest/frames')
// Add appropriate assertions proving that both frame interactions were successful.
})