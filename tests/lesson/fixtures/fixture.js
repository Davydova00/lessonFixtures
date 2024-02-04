import { test as baseText} from "@playwright/test";
import { LoginPage } from "../page-object/LoginPage";
import { HomePage } from "../page-object/HomePage";
import { chromium } from "@playwright/test";

export const test = baseText.extend({ 
  browserContext: async ({}, use) => {
    let browser = await chromium.launch();
    let context = await browser.newContext();
    await use(context);
  },
 page: async ({browserContext}, use) => {
    let page = await browserContext.newPage();
    await use(page);
    console.log(page.isClosed());
  },
  homePage: async ({page}, use) => {
    let loginPage = new LoginPage(page);
    await loginPage.visit('https://www.uadreams.com/login/#login');
    await loginPage.login();
    let homePage = new HomePage(page);
    await use(homePage);

  },
  loginPage: async ({page}, use) => {
    console.log('Before loginPage was created');
    let loginPage = new LoginPage(page);
    await use(loginPage);
    console.log('After loginPage was created');
  },

});