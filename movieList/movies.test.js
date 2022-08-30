const {Builder, Capabilities, By} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5501/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test('can you cross off movie', async () => {
    await driver.findElement(By.xpath('//input')).sendKeys('Star Wars')
    await driver.findElement(By.xpath('//button')).click()
    await driver.findElement(By.xpath('//span')).click()
})

test('can you delete movie', async () => {
    await driver.findElement(By.xpath('//input')).sendKeys('Star Wars')
    await driver.findElement(By.xpath('//button')).click()
    await driver.findElement(By.xpath('//button[contains(text(), "x")]')).click()
    await driver.sleep(4000)
})

test('tells you movie was added back after crossing it off', async () => {
    await driver.findElement(By.xpath('//input')).sendKeys('Star Wars')
    await driver.findElement(By.xpath('//button')).click()
    await driver.findElement(By.xpath('//span')).click()
    await driver.findElement(By.xpath('//span')).click()
    await driver.findElement(By.xpath('//aside[contains(text(), "Star Wars added back!")]'))
})