.PHONY: prepare

test:
	node YouTubeTvCode.js
prepare:
	sudo PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=1 npm i -g puppeteer

