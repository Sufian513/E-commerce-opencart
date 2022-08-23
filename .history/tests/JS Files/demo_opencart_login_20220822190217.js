exports.demo_opencart_login = class demo_opencart_login{
    constructor(page){
        this.page = page;
    }
    async initialize(){
        await this.page.goto('https://demo.opencart.com/index.php?route=account/login&language=en-gb');
    }
    async text_field(){
        await this.page.locator('id='input-password').click();
        // await this.page.locator('h3:has-text("Login")').click();
        // await this.page.locator('[placeholder="Email"]').fill('helloworld@yopmail.com');
        // await this.page.locator('[placeholder="Password"]').fill('helloworld@');
        // await this.page.locator('button:has-text("Login")').first().click();
        // await this.page.locator('[placeholder="PIN"]').click();
        // await this.page.locator('[placeholder="PIN"]').fill('0786');
        // await this.page.locator('text=Continue').click();
        // await this.page.locator('h1:has-text("Account")').click();
    }
}