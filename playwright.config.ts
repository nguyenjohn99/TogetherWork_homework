import { PlaywrightTestConfig } from '@playwright/test';
const config: PlaywrightTestConfig = {
    reporter: [ ['html', { open: 'always' }] ],
    use: {
        headless: false,
        viewport: { width: 1600, height: 1200 },
        ignoreHTTPSErrors: true,
        video: 'on',
        screenshot: 'on',
    },
};
export default config;