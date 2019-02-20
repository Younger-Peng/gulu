const puppeteer = require('puppeteer');
const p = require('path');
const static = require('node-static')
const file = new static.Server('./dist')
const port = process.env.PORT || 8080

const server = require('http').createServer((req, resp) => {
    req.addListener('end', () => {
        file.serve(req, resp)
    }).resume()
})

!(async () => {
    server.listen(port)
    const browser = await puppeteer.launch({ headless: false })
    const page = await browser.newPage()
    await page.setRequestInterception(true)

    page.on('request', request => {
        if (request.resourceType() === 'image')
            request.abort()
        else
            request.continue()
    })
    page.once('load', async () => {
        const errors = await page.evaluate(() => {
            return window.errors || []
        })
        if (errors === undefined) {
            console.log('没有找到测试用例')
        } else if (errors.length === 0) {
            console.info('没有错误')
        } else {
            console.error('有错误')
            errors.forEach(error => {
                console.log(error.message)
            })
        }
        await browser.close()
    })
    await page.goto(`http://127.0.0.1:${port}`)
})()