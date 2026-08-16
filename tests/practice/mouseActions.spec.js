const{test,expect} = require('@playwright/test')
test('Hover',async({page})=>{ 
    
// Open the URL.
await page.goto('https://the-internet.herokuapp.com/hovers')
// Verify the heading Hovers is visible.
await expect(page.getByRole('heading',{name:'Hovers'})).toBeVisible()
// Identify the first user/profile image.
const firstUser = page.getByAltText('User Avatar').first()
// Hover over the first profile image.
await firstUser.hover()
// Verify that the profile information becomes visible.
await expect(page.getByRole('heading',{name:'name: user1'})).toBeVisible()
// Verify the displayed profile name is:
// id="p7x4q1"
// name: user1
await expect(page.getByRole('heading',{name:'name: user1'})).toContainText('user1')
// Move the mouse away from the first profile.
await page.locator('body').hover()
// Verify that the profile information is no longer visible.
await expect(page.getByRole('heading',{name:'name: user1'})).toBeHidden()
// Hover over the second profile image.
const secondUser = page.getByAltText('User Avatar').nth(1)
await secondUser.hover()
// Verify the displayed profile name is:
// id="k2m8v5"
// name: user2
await expect(page.getByRole('heading',{name:'name: user2'})).toContainText('user2')
})