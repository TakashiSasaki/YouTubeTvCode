const puppeteer = require("puppeteer");

async function main(){
	const browser = await puppeteer.launch({
		executablePath: "/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe",
		headless: false,
		waitUntil: 'networkidle',
		networkIdleTimeout: 5000
	});
	const page = await browser.newPage();
	await page.goto("https://www.youtube.com/tv#/settings?resume");
	await page.waitFor(5000);
	await page.focus("#settings-items");
	await page.focus("#settings-items > div.content");
	await page.focus("#settings-items > div.content > div.focused.new-list.settings-list");
	await page.focus("#settings-items > div.content > div.focused.new-list.settings-list > div");
	await page.focus("#settings-items > div.content > div.focused.new-list.settings-list > div > div:nth-child(2)");
	const x = await page.$("#settings-items > div.content > div.focused.new-list.settings-list > div > div:nth-child(2)");
	x.click();
	await page.waitFor(5000);
	await page.focus("#dialog-view > div > div.left-column.divider > div > div > div > div.button:nth-child(2) > span");
	await page.waitFor(5000);
	const y = await page.$("#dialog-view > div > div.left-column.divider > div > div > div > div.button:nth-child(2) > span");
	y.click();
	await page.waitFor(5000);
}

main().then(x=>console.log(x)).catch(e=>console.log(e));

