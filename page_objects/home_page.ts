import { Page } from "playwright-core"

export class HomePage {    
    private page: Page
    private url: string = 'https://fonteva.com/'

    private selectors = {
        companyTab : ".dropdown-toggle >> text=Company", //paired selectors
        leadership : "text=Leadership" 
    }

    constructor(page: Page) {
        this.page = page
    }

    async goto() { 
        await this.page.goto(this.url) 
    }

    async companyTab() {
        return this.page.locator(this.selectors.companyTab)
    }

    async navigateToLeadership() {
        const company = await this.companyTab()
        await company.hover()
        const parentLi = company.locator('xpath=..')
        const leaderLink = parentLi.locator(this.selectors.leadership)
        
        //waits for navigation resulting from click action to conclude before proceeding
        await Promise.all([
            this.page.waitForNavigation(),
            leaderLink.click(),
        ])
    }
}