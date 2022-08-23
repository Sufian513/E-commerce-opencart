const {test, expect} = require('@playwright/test');

// JS Files
const{Logins} = require('./JS Files/login');
const{Signups} = require('./JS Files/signup');
const{demo_opencart_login} = require('./JS Files/demo_opencart_login.js');
let page;
test.beforeAll(async ({browser}) => {
    const context = await browser.newContext();
    page = await context.newPage();
});

test.afterAll(async ({browser}) => {
    await page.close();
});

test.describe('opencart test cases', async () =>{
    test(`@signup register the account `, async ()=>{
        const signup_1 = new Signups(page);
        await page.pause();
        await signup_1.initialize();
        await signup_1.text_field();
    });
    test(`@Logins login the account`, async () =>{
        const login_1 = new Logins(page);
        await page.pause();
        await login_1.initialize();
        await login_1.text_field();
    });
    test(`@demo_opencart_register register the account`, async () =>{
        const login_2 = new demo_opencart_login(page);
        await page.pause();
        await login_2.initialize();
        await login_2.text_field();
    });
    test(`@demo_opencart_Login login the account`, async () =>{

    });

})