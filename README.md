# TogetherWork_homework
I chose Playwright for my automation solution in the interest of quick turnaround, since it's what I'm presently what I'm working in most often. I trust the syntax should be easy to read for those who are familiar with other E2E testing tools. (I should note that a user who is most familiar with Webdriver may be concerned at the lack of explicit waits in the code; playwright builds intelligent waiting into its locator handling methods, making them less necessary outside of transition states.)




# Preliminary Setup
1. Clone repo
2. Install Node.js 
https://nodejs.org/en/

3. Install Typescript

  ```
  npm install typescript
  ```
  
4. Install Playwright (in cloned repo or globally): https://playwright.dev/docs/intro
  ```
  npm i -D @playwright/test
  npx playwright install
  ```

# Running the test
From the repository root directory, run:

  ```
  npx playwright test
  ```
By default configuration, this will run the test in headed mode and output video and screenshots to folders in the repo on each test run. You can change these configurations as desired by making edits to ``playwright.config.ts`` or by specifying settings as parameters in your CL command. For more details, see https://playwright.dev/docs/test-configuration.

Test results are also configured to output in a full HTML report to the ``playwright-report`` folder. To view the report after a given test run, the Terminal will prompt you to run this command: ``npx playwright show-report``
