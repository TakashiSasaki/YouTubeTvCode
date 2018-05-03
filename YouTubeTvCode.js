#!/usr/bin/env node
const puppeteer = require("puppeteer");

const options = [
{
  executablePath: "/usr/bin/chromium",
  headless: false,
  waitUntil: 'networkidle',
  networkIdleTimeout: 5000,
  userDataDir: "/tmp/puppeteer",
  //slowMo: true,
  //browserWsEndpoint: 21212,
  devtools: false,
  timeout: 5000,
  args: [
	  '--start-fullscreen',
	  "---no-first-run", 
	  "--no-default-browse-check", 
	  //"--no-sandbox", 
	  //"--disable-infobars", 
	  //"--disable-session-crashed-bubble", 
	  //"--disable-session-restore",  
	  //"--noerrdialogs"
  ]
},
{
  executablePath: "/mnt/c/Program Files/Google/Chrome/Application/chrome.exe",
  headless: false,
  waitUntil: 'networkidle',
  networkIdleTimeout: 5000,
  userDataDir: "C:\\tmp\\puppeteer",
  args: ['--start-fullscreen']
},
{
  executablePath: "/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  headless: false,
  waitUntil: 'networkidle',
  networkIdleTimeout: 5000,
  userDataDir: "C:\\tmp\\puppeteer",
  args: ['--start-fullscreen']
},
];

async function main(){
  for(var i in options) {
    try{
      console.log(options[i].executablePath);
      var browser = await puppeteer.launch(options[i]);
      console.log("main¥t: succeeded to execute chromium/chrome.");
      console.log("main^t: typeof browser = " + typeof browser);
      break;
    } catch(e) {
      console.log("main¥t: failed to execute chromium/chrome");
      continue;
    }//try
  }//for

  if(typeof browser === "undefined") {
    console.log("main¥t: all options failed. exiting... ");
    process.exit(-1);
  }//if

  console.log("main¥t: await browser.newPage()");
  const page = await browser.newPage();
  console.log("main^t: waiting for new page.");
  await page.waitFor(5000);
  await await page.setViewport({width:0, height:0});
  console.log("main¥t: await page.goto(...)");
  await page.goto("https://www.youtube.com/tv#/settings?resume");
  await page.waitFor(10000);
  await await page.setViewport({width:0, height:0});
  console.log("main¥t: await page.$(...)");
  const x = await page.$("#settings-items > div.content > div.settings-list > div > div:nth-child(2)");
  if(x === null) {
    console.log("main¥t: failed to get the element.");
    process.exit();
  }//if
  console.log("main¥t: await x.click()");
  await x.click();
  await page.waitFor(2000);
  await await page.setViewport({width:0, height:0});
  console.log("main¥t: await page.$(...)");
  const y = await page.$("#dialog-view > div > div.left-column.divider > div > div > div > div.button:nth-child(2) > span");
  console.log("main¥t: await y.clock()");
  await y.click();
  await page.waitFor(1000);
  await await page.setViewport({width:0, height:0});
  console.log("main¥t: TV code should be displayed.");
  await browser._connection.dispose();
  //await browser.disconnect();
  console.log("main¥t: Browser object has disposed.");
}//main

main().then(x => {
  console.log(x);
  //process.exit();
}).catch(e => {
  console.log(e);
  process.exit();
}
);

