import { BasePage } from "./BasePage";
import { expect } from '@playwright/test';
//import { FirstPage } from 
export class LoginPage  extends BasePage{
  constructor(page){
    super(page);
    this.page = page;
    this.mailField = page.locator("//input[@placeholder='Enter Username or E-mail']");
    this.passwordField = page.locator("//input[@placeholder='Enter Password']");
    this.sumbitBtn = page.locator("//button[@class='button-module__button___4j-PY button-module__button-success___rsQCA button-module__button-block___XFS6F button-module__modern-version___XuSBq']");
  }

 async login(mail = 'goddessesgame@gmail.com', password = '123456'){
    await this.mailField.fill(mail);
    await this.passwordField.fill(password);
    await this.sumbitBtn.click();
    await expect(this.page).toHaveURL('https://www.uadreams.com/profile/#login');
  }
}