export class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.locator('#sdo-login');
    this.passwordInput = page.locator('#sdo-password');
    this.submitButton = page.getByRole('button', { name: 'Войти' });
    this.errorMessage = page.locator('.el-notification__content p');
    this.forgotLink = page.getByRole('button', { name: 'Забыли пароль?' });
  }

  async goto() {
    await this.page.goto('/login'); 
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }

  async clickForgotPassword() {
    await this.forgotLink.click();
  }
}
