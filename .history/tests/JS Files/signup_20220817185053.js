exports.Signups = class signup{
    constructor(page){
        this.page = page;
    }
    async initialize(){
        await this.page.goto('https://www.opencart.com');
    }
    async text_field(){
        await page.locator('#navbar-collapse-header div >> text=Register').click();
  await expect(page).toHaveURL('https://www.opencart.com/index.php?route=account/register');
  await page.locator('text=Register for OpenCart account Username First Name Last Name E-Mail Country Afgha').click();
  await page.locator('[placeholder="Username"]').click();
  await page.locator('[placeholder="Username"]').fill('helloworld');
  await page.locator('[placeholder="Username"]').press('Tab');
  await page.locator('[placeholder="First Name"]').fill('hello');
  await page.locator('[placeholder="First Name"]').press('Tab');
  await page.locator('[placeholder="Last Name"]').fill('world');
  await page.locator('[placeholder="E-Mail"]').click();
  await page.locator('[placeholder="E-Mail"]').fill('helloworld@yopmail.com');
  await page.locator('[placeholder="E-Mail"]').press('Tab');
  await page.locator('select[name="country_id"]').press('ArrowDown');
  await page.locator('select[name="country_id"]').press('ArrowDown');
  await page.locator('select[name="country_id"]').press('ArrowDown');
  await page.locator('select[name="country_id"]').press('ArrowDown');
  await page.locator('select[name="country_id"]').press('ArrowDown');
  await page.locator('select[name="country_id"]').press('ArrowDown');
  await page.locator('select[name="country_id"]').press('ArrowDown');
  await page.locator('select[name="country_id"]').press('ArrowDown');
  // Press ArrowDown
  await page.locator('select[name="country_id"]').press('ArrowDown');
  // Press ArrowDown
  await page.locator('select[name="country_id"]').press('ArrowDown');
  // Press ArrowDown
  await page.locator('select[name="country_id"]').press('ArrowDown');
  // Press ArrowDown
  await page.locator('select[name="country_id"]').press('ArrowDown');
  // Press ArrowDown
  await page.locator('select[name="country_id"]').press('ArrowDown');
  // Press ArrowDown
  await page.locator('select[name="country_id"]').press('ArrowDown');
  // Press ArrowDown
  await page.locator('select[name="country_id"]').press('ArrowDown');
  // Press Enter
  await page.locator('select[name="country_id"]').press('Enter');
  // Press Tab
  await page.locator('select[name="country_id"]').press('Tab');
  // Fill input[name="password"]
  await page.locator('input[name="password"]').fill('helloworld@');
  // Click .list-inline > li >> nth=0
  await page.locator('.list-inline > li').first().click();
  // Click button:has-text("Register") >> nth=0
  await page.locator('button:has-text("Register")').first().click();
  await expect(page).toHaveURL('https://www.opencart.com/index.php?route=account/register&register_token=87f4af5a9d1ffa66632f93ed3d');


    }
}