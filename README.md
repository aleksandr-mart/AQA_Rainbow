## Инструкция   

1. Склонируйте репозиторий:
   ```
   git clone https://github.com/aleksandr-mart/AQA_Rainbow.git
   ```

2. Проверьте наличие Node.js:
   ```
   node -v
   npm -v
   ```
   Если не установлен — скачайте и установить с сайта https://nodejs.org/

3. Перейдите в папку с автотестами:
   ```
   cd QA_Avito_Spring/Task_2
   ```

4. Установите зависимости:
   ```
   npm install
   ```

5. Установите браузеры Playwright:
   ```
   npx playwright install
   ```

6. Запустите тесты:
   ```
   npx playwright test
   ```

7. Для просмотра отчёта:
   ```
   npx playwright show-report
   ```