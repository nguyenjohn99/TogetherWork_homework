import { test } from '@playwright/test'
import { HomePage } from '../page_objects/home_page'
import { LeadershipPage } from '../page_objects/leadership_page'

test('Prints board member list', async ({page}) => {
    await page.setViewportSize( {width: 1600, height: 1200} )
    const homePage = new HomePage(page)

    await homePage.goto()
    await homePage.navigateToLeadership()

    const leadershipPage = new LeadershipPage(page)
    await leadershipPage.printLeaders()
})