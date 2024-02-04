import { test } from "@playwright/test";
import { LoginPage } from "./page-object/LoginPage";
import { HomePage } from "./page-object/HomePage";


test.describe("e2e Test for hillel ", ()=> {

  test.beforeEach(async ({page})=>{
    let loginPage = new LoginPage(page);
    await loginPage.visit('https://www.uadreams.com/login/#login');
    await loginPage.login();
}),

  test("Check my ladies", async ({page})=> {
  let homePage = new HomePage(page);
  await homePage.checkMyLadies();
})

})