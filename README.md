# [Onoma](https://github.com/the-metagame/onoma) Chrome Extension

Name EVM addresses on the fly while browsing the internet.

## How it works (in progress)

Currently, the extension only looks for addresses where it makes up the entire element. For example:

It will work on this:
```html 
<span>0x17A059B6B0C8af433032d554B0392995155452E6</span>
```

But it won't work on this:
```html
<p>My address is 0x17A059B6B0C8af433032d554B0392995155452E6</p>
```

It also has trouble on websites that dynamically load content like Twitter.

## Install the extension

1. Download the `dist` folder from this repo
2. Navigate to [chrome://extensions](chrome://extensions/) in Chrome
3. Enable "Developer mode" in the top right
4. Press "Load unpacked" in the top left
5. Select the `dist` folder you downloaded from step 1

You're done! Navigate to [etherscan.io](https://etherscan.io/) and you should see Onoma name the "From" and "To" fields under "Latest Transactions"
