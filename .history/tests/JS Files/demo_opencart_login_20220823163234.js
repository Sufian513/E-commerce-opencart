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
            if (await text_1.includes('Login')) {
                await button.nth(i).click();
                break;
            }
        }
    }
    async textfield(){}
}
