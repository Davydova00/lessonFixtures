export class Header {
  constructor(page){
    this.logo = page.locator('//*[@id="root"]/div/header/div[1]/a');
    this.credits = page.locator('//*[@class="desktop-module__menu-item___DlLlb desktop-module__icon___G9Ihd desktop-module__active-hover___xr2GC"]');
    this.mailbox = page.locator('//*[@class="desktop-module__menu-item___DlLlb desktop-module__icon___G9Ihd"]');
    this.checkout = page.locator('//*[@class="desktop-module__menu-item___DlLlb desktop-module__icon___G9Ihd desktop-module__active-hover___xr2GC"]');
  }
  async clickProfile(){
    await this.logo.click();
  }
}