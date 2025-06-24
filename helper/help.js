export async function getUrlUser(page) {
    await page.locator('#app').getByText('D', { exact: true }).click();
    return await page.locator('a:has-text("dumbledore@sct.team")').getAttribute('href')
}