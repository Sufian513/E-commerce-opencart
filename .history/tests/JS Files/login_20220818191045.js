exports.Logins = class login{
    constructor(page){
        this.page = page;
    }
    async initialize(){
        await this.page.goto('https://www.opencart.com');
    }
    async text_field(){
        await this.page.locator('#navbar-collapse-header div >> text=Login').click();
        //await expect(this.page).toHaveURL('https://www.opencart.com/index.php?route=account/login');
        await this.page.locator('h3:has-text("Login")').click();
        await this.page.locator('[placeholder="Email"]').fill('helloworld@yopmail.com');
        await this.page.locator('[placeholder="Password"]').fill('helloworld@');
        await this.page.locator('button:has-text("Login")').first().click();
        //await expect(this.age).toHaveURL('https://www.opencart.com/index.php?route=account/security&member_token=0e305f81829fc25c2f9d785c6df68d86');
        await this.page.locator('[placeholder="PIN"]').click();
        await this.page.locator('[placeholder="PIN"]').fill('0786');
        await this.page.locator('text=Continue').click();
        await expect(this.page).toHaveURL('https://www.opencart.com/index.php?route=account/account&member_token=0e305f81829fc25c2f9d785c6df68d86');
        await this.page.locator('h1:has-text("Account")').click();
    }
}