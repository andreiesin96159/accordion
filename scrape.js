const puppeteer = require('puppeteer');



// let title;
// let price;

let scrape = async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto ('https://master-uvp-desktop.gusadev.com/');

    await page.waitFor(1000);


    await page.click($$("[class='button__btn___3YESD button__easternBlue___1zBm0 topBanner__buttonBrowse___2QvHl']")[0]);
    await page.waitFor(1000);


    // const result = await page.evaluate(() => {
    //
    //      title = document.querySelector('h1').innerText;
    //      price = document.querySelector('.price_color').innerText;
    //
    //     return {
    //         title,
    //         price
    //     }
    // });




    browser.close();
    return result;

};

scrape().then((value) => {
    console.log(value); // Получилось!
});
