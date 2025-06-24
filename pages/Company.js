export class Company {
  constructor(page) {
    this.page = page;
    this.headCompany =  page.locator('.description').filter({ has: this.page.locator('text=Руководитель') }).locator('a');
  }
}
