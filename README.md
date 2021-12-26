# TogetherWork_homework

Steps to run program:

# Preliminary Setup (if not already done)
1. Install Node.js 
https://nodejs.org/en/

2. Install Typescript

  ```
  npm install typescript
  ```
  
3. Install Playwright: https://playwright.dev/docs/intro
  ```
  npm i -D @playwright/test
  npx playwright install
  ```
  
4. Clone repo

# Running the test
From the repository directory, run:

  ```
  npx playwright test
  ```
By default configuration, this will run the test in headed mode and output video and screenshots on each test run. You can change these configurations as desired by making edits to ``playwright.config.ts`` or by including settings in your CL command. For more details, see https://playwright.dev/docs/test-configuration.

Test results are also configured to output in a full HTML report to the ``playwright-report`` folder. To view the report after a given test run, the Terminal will prompt you to run this command: ``npx playwright show-report``
