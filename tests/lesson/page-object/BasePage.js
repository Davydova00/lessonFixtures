import { Header } from "./components/Header";
import { FirstPage} from "../SingletonBasePage";

export class BasePage{

  constructor(page){
    this.page = page;
    this.header = new Header (page);
  }
  async visit(url){
   await this.page.goto(url);
      const firstPage = await FirstPage.getPage();
      console.log(firstPage);
  }
 
}