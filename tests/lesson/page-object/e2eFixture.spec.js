import { test } from '../fixtures/fixture';
import { Header } from './components/Header';

test.describe.only("e2e Test for hillel ", ()=> {

//   test.beforeEach(async ({loginPage})=>{
//   //  let loginPage = new LoginPage(page);
//     // await loginPage.visit('https://www.uadreams.com/login/#login');
//     // await loginPage.login();
// })

  test("Check my ladies", async ({page, homePage})=> {
 // let homePage = new HomePage(page);
  await homePage.checkMyLadies();
  let hesder = new Header(page);
  await homePage.header.logo.click();
  await page.pause();
});

})