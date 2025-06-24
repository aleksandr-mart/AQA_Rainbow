import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { MainPage } from '../pages/MainPage';
import { Company } from '../pages/Company';
import { getUrlUser } from '../helper/help'
test.describe('компания', () => {

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('dumbledore@sct.team', '12345678qQ1');
    await expect(page).toHaveURL('https://dev2.getinfo.radugi.net');
  });

  test('Доступность страницы Компания после авторизации', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.clickMenuGroup('Учебный центр');
    expect(mainPage.menuItems.filter({ hasText: 'Компания' })).toBeVisible()
    await mainPage.clickMenuItem('Компания');
    await expect(page).toHaveURL(/^https:\/\/dev2\.getinfo\.radugi\.net\/company\//);
  });

  test('Текущий пользователь совпадает с руководителем компании', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.clickMenuGroup('Учебный центр');
    expect(mainPage.menuItems.filter({ hasText: 'Компания' })).toBeVisible()
    await mainPage.clickMenuItem('Компания');
    await expect(page).toHaveURL(/^https:\/\/dev2\.getinfo\.radugi\.net\/company\//);
    const company = new Company(page)
    const headCompanyUrl = await company.headCompany.getAttribute('href')
    const currentUserUrl = await getUrlUser(page)
    expect(headCompanyUrl).toEqual(currentUserUrl)
  });
})