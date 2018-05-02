.PHONY: prepare

test:
	node YouTubeTvCode.js
prepare:
	sudo npm uninstall puppeteer ; sudo npm uninstall -g puppeteer ; PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=1 npm i puppeteer@0.9.0

