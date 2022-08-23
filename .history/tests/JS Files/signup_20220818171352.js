exports.Signups = class signup{
    constructor(page){
        this.page = page;
    }
    async initialize(){
        await this.page.goto('https://www.opencart.com');
    }
    async text_field(){
        await this.page.locator('#navbar-collapse-header div >> text=Register').click();
        
        await this.page.locator('text=Register for OpenCart account Username First Name Last Name E-Mail Country Afgha').click();
        await this.page.locator('[placeholder="Username"]').click();
        await this.page.locator('[placeholder="Username"]').fill('hello_world_1');
        await this.page.locator('[placeholder="Username"]').press('Tab');
        await this.page.locator('[placeholder="First Name"]').fill('Hello');
        await this.page.locator('[placeholder="First Name"]').press('Tab');
        await this.page.locator('[placeholder="Last Name"]').fill('World');
        await this.page.locator('[placeholder="E-Mail"]').click();
        await this.page.locator('[placeholder="E-Mail"]').fill('helloworld@yopmail.com');
        
        await this.page.locator('select[name="country_id"]').selectOption('162');


        await this.page.locator('select[name="country_id"]').press('ArrowDown');
        await this.page.locator('select[name="country_id"]').press('Enter');
        await this.page.locator('select[name="country_id"]').press('Tab');
        await this.page.locator('input[name="password"]').fill('helloworld@');
        await this.page.locator('.list-inline > li').first().click();
        await this.page.locator('button:has-text("Register")').first().click();
        await expect(page).toHaveURL('https://www.opencart.com/index.php?route=account/register&register_token=87f4af5a9d1ffa66632f93ed3d');


    }
}