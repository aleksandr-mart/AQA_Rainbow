export class MainPage {
  constructor(page) {
    this.page = page;
    this.menuGroups = page.locator('.el-sub-menu__title');
    this.menuItems = page.locator('.el-menu-item')
  }
  async clickMenuGroup(group) {
    await this.menuGroups.filter({ hasText: group }).click();
  }
  async clickMenuItem(item) {
    await this.menuItems.filter({ hasText: item }).click();
  }
}
