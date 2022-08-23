const {test, expect} = require('@playwright/test');

// JS Files
const{Logins} = require('./JS Files/login');
const{Signups} = require('./JS Files/signup');

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
        // await signup_1.text_field();
    });
})