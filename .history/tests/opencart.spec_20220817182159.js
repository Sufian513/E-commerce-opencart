const {test, expect} = require('@playwright/test');

// JS Files
const{Logins} = require('./JS Files/login');
const{Signups} = require('./JS Files/signup');

let page;
test.beforeAll(async )