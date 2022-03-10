// node HackerrankAutomation.js --url="https://www.hackerrank.com/" --config=config.json

// npm init -y
// npm install minimist
//npm install puppeteer

let minimist = require("minimist");
let fs = require("fs");
let puppeteer = require("puppeteer");
const { runMain } = require("module");

let args = minimist(process.argv);

//console.log(args.url);
//console.log(args.config);

let configJSON = fs.readFileSync(args.config,"utf-8");
//console.log(configJSON);

let configJSO = JSON.parse(configJSON);
// console.log(config.userid);
// console.log(config.password);
// console.log(config.moderators);

async function run(){
    //start the browser
    let browser = await puppeteer.launch({
        headless:false,
        args:[
            '--start-maximized'
        ],
        defaultViewport:null
    });
    // open the tabs
    let pages = await browser.pages();
    let page = pages[0];

    // goto url
    await page.goto(args.url);

    await page.waitForSelector("a[data-event-action='Login']");
    await page.click("a[data-event-action='Login']");

    await page.waitForSelector("a[href='https://www.hackerrank.com/login']");
    await page.click("a[href='https://www.hackerrank.com/login']");

    await page.waitForSelector("input[name='username']");
    await page.type("input[name='username']",configJSO.userid,{delay:30});

    await page.waitForSelector("input[name='password']");
    await page.type("input[name='password']",configJSO.password,{delay:70});

    await page.waitForSelector("button[data-analytics='LoginPassword']");
    await page.click("button[data-analytics='LoginPassword']");

    await page.waitForSelector("a[data-analytics='NavBarContests']");
    await page.click("a[data-analytics='NavBarContests']");

    await page.waitForSelector("a[href='/administration/contests/']");
    await page.click("a[href='/administration/contests/']");

    await page.waitForSelector("p.mmT");
    await page.click("p.mmT");

    await page.waitFor(3000);
    await page.waitForSelector("li[data-tab='moderators']");
    await page.click("li[data-tab='moderators']");

    await page.waitForSelector("input#moderator");
    await page.type("input#moderator",configJSO.moderators,{delay:50});

    await page.keyboard.press("Enter");

}
run();