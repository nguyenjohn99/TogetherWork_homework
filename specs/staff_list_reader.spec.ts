import { test } from '@playwright/test'
import { HomePage } from '../page_objects/home_page'
import { LeadershipPage } from '../page_objects/leadership_page'

test('Prints board member list', async ({page}) => {
    const homePage = new HomePage(page)

    await homePage.goto()
    await homePage.navigateToLeadership()

    const leadershipPage = new LeadershipPage(page)
    await leadershipPage.printLeaders()
})