import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

const validUser = {
    email: 'dumbledore@sct.team',
    password: '12345678qQ1',
};

test.describe('Форма авторизации', () => {

    test('Успешный вход', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login(validUser.email, validUser.password);
        await expect(page).toHaveURL('https://dev2.getinfo.radugi.net/');
    });

    test('Наличие ссылки на восстановление пароля', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await expect(loginPage.forgotLink).toBeVisible();
    });

    test('Ошибка при вводе неверного логина или пароля', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('wrong@email.com', 'wrongpass');
        await loginPage.errorMessage.waitFor({ state: 'visible' });
        await expect(loginPage.errorMessage).toHaveText('Bad credentials.');
    });
});
