import puppeteer from "puppeteer";
import assert from 'assert';

describe('Rombusz kerületszámítás', function(){
    let browser;
    let page;
    before(async function(){
        browser = await puppeteer.launch();
        page = await browser.newPage();
    })
    after(async function(){
        await browser.close();
    })
    it('30 & 35 = 120', async function(){
    await page.goto('http://localhost:3000/')
    await page.type('#side','30')
    await page.type('#alpha','35')
    await page.click('#calcBtn')
    const actual = await page.$eval('#perimeter', elem => elem.value)
    assert.strictEqual(actual,'120')
    })

    it('title check "rombusz"?', async function(){
        await page.goto('http://localhost:3000/')
        const actual = await page.title();
        const expected = 'Rombusz'
        assert.strictEqual(actual, expected)
        })
})