exports.Logins = class login{
    constructor(page){
        this.page = page;
    }
    async initialize(){
        await this.page.goto('https://www.opencart.com');
    }
    async text_field(){
        await page.locator('#navbar-collapse-header div >> text=Login').click();
  await expect(this.page).toHaveURL('https://www.opencart.com/index.php?route=account/login');
  
  await page.locator('h3:has-text("Login")').click();
  await page.locator('[placeholder="Email"]').click();
  await page.locator('[placeholder="Email"]').click();
  await page.locator('[placeholder="Email"]').fill('helloworld@yopmail.com');
  await page.locator('[placeholder="Password"]').click();
  await page.locator('[placeholder="Password"]').fill('helloworld@');
  await page.locator('button:has-text("Login")').first().click();
  await expect(page).toHaveURL('https://www.opencart.com/index.php?route=account/security&member_token=0e305f81829fc25c2f9d785c6df68d86');
  await page.locator('[placeholder="PIN"]').click();
  // Fill [placeholder="PIN"]
  await page.locator('[placeholder="PIN"]').fill('0786');
  // Click text=Continue
  await page.locator('text=Continue').click();
  await expect(page).toHaveURL('https://www.opencart.com/index.php?route=account/account&member_token=0e305f81829fc25c2f9d785c6df68d86');
  // Click h1:has-text("Account")
  await page.locator('h1:has-text("Account")').click();
    }
}