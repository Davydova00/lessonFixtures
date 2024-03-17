import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";
import { FirstPage} from "../SingletonBasePage";

export class HomePage extends BasePage{
  constructor(page){
    super(page)
    this.ladiesBtn = page.locator('//*[@id="root"]/div/header/div/nav/ul/li[1]/a');
    this.myLadies = page.locator('//*[@id="nav-block"]/ul/li[5]/a');
    this.ladiesHeader = page.locator('//*[@class="favorites-module__favorite-info___KZRC1"]');

  }
  async checkMyLadies() {
    await this.ladiesBtn.click();
    await this.myLadies.click();
   await FirstPage.closePage();
 //   await expect(this.ladiesHeader).toContainText('Ladies profiles marked as Favorite and Sweetheart.');
  }
}