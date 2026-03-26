const { test, expect } = require('@playwright/test');

test('login',async({page})=>{
  await page.goto('https://demo.testfire.net/login.jsp')
  await page.locator('#uid').fill('test123');
  await page.locator('#passw').fill('123456');
  await page.getByRole('button', { name: 'Login' }).click();
  let text = await page.locator('p span').textContent()
  expect(text).toContain("Login Failed: We're sorry, but this username or password was not found in our system. Please try again")
})