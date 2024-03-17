import { test } from "@playwright/test";
import { LoginPage } from "./LoginPage";
import { HomePage } from "./HomePage";


test.skip("e2e Test for hillel ", ()=> {

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