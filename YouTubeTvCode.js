#!/usr/bin/env node
const puppeteer = require("puppeteer");

const options = [
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
{
  executablePath: "chromium-browser",
  headless: false,
  waitUntil: 'networkidle',
  networkIdleTimeout: 5000,
  userDataDir: "/tmp/puppeteer",
  args: ['--start-fullscreen']
}
];

async function main(){
  for(var i in options) {
    try{
      var browser = await puppeteer.launch(options[i]);
      break;
    } catch(e) {
      continue;
    }//try
  }//for

  const page = await browser.newPage();
  await page.goto("https://www.youtube.com/tv#/settings?resume");
  await page.waitFor(1000);
  const x = await page.$("#settings-items > div.content > div.focused.new-list.settings-list > div > div:nth-child(2)");
  x.click();
  await page.waitFor(1000);
  const y = await page.$("#dialog-view > div > div.left-column.divider > div > div > div > div.button:nth-child(2) > span");
  y.click();
  await page.waitFor(1000);
}//main

main().then(x => {
  console.log(x);
  process.exit();
}).catch(e=>console.log(e));

