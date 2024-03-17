import { Page, chromium } from '@playwright/test';


export class FirstPage {
   static page: Page;
   constructor() {}


  public static async getPage() {
    if (!FirstPage.page) {
      console.log('Create Singleton');
      const browser = await chromium.launch();
      const context = await browser.newContext();
      const page = await context.newPage();
      FirstPage.page = page;
    }

    return FirstPage.page;
  }
  public static async closePage() {
    if (FirstPage.page) {
       await FirstPage.page.close();
    }
  }
}