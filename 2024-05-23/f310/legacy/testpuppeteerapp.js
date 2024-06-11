/*const puppeteer  = require('puppeteer');
import puppeteer from 'puppeteer';
import assert from 'assert';
(async () =>{ 
    console.log("as")
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('http://localhost:3000/')
    await page.type('#side','40')//where,what
    await page.type('#alpha','70')
    await page.click('#calcBtn')
    const actual = await page.$eval('#perimeter', elem => elem.value)
    console.log("Result:",actual)
    //await new Promise(resolve => setTimeout(resolve,5000))
    await browser.close()
})()*/