exports.demo_opencart_login = class demo_opencart_login{
    constructor(page){
        this.page = page;
    }
    async initialize(){
        await this.page.goto('https://demo.opencart.com/index.php?route=account/login&language=en-gb');
        const button = await this.page.locator('.list-group-item');
        const count_1 = await button.count();
        for (let i = 0; i < count_1; i++) {
            const text_1 = await button.nth(i).textContent();
            if (await text_1.includes('Register')) {
                await button.nth(i).click();
                break;
            }
        }
    }
    async text_field(){
        await this.page.locator('#input-firstname').fill('muhammad');
        await this.page.locator('#input-lastname').fill('sufian');
        await this.page.locator('#input-email').fill('muhammad.sufian@mailinator.com');
        await this.page.locator('#input-password').fill('Mailinator@123');
        await this.page.locator('#input-newsletter-yes').click();
        await this.page.locator('#form-register > div > div > div > input').click();
        await this.page.locator('#form-register > div > div > button').press();
    }
}