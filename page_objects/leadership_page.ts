import { ElementHandle, Page } from "@playwright/test";

export class LeadershipPage {
    private page: Page

    private selectors = {
        leadershipTile: '.leadership-tile'
    }

    constructor(page: Page) {
        this.page = page
    }

    async leadershipTiles() {
        return this.page.locator(this.selectors.leadershipTile)
    }

    async printLeaders() {
        const leaderTile = await this.leadershipTiles()

        const tileList = await leaderTile.elementHandles()
        console.log(`Leaders: ${tileList.length}`)
        
        for(let i=0; i<tileList.length; i++) {
            const nameTitle = await this.extractLeaderText(tileList[i])
            console.log(nameTitle[0],'-', nameTitle[1])
        }
    }

    async extractLeaderText(tile: ElementHandle): Promise<string[]>{
        var leader = []
        leader[0] = await (await tile.waitForSelector('h6')).innerText()
        leader[1] = await this.sanitizeTitle(await (await tile.waitForSelector('p')).innerText())
        return leader
    }
    async sanitizeTitle(title: string): Promise<string> {
        return title.split('\n')[0]
    }
}