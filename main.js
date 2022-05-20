const { addressToName } = require('onoma')

window.addEventListener('load', () => {
	const content = document.querySelectorAll(
		'h1, h2, h3, h4, h5, p, li, td, caption, div, span, a'
	)

	content.forEach((el) => {
		const text = el.innerText

		// Regex to read EVM address
		const regex = new RegExp(/^0x[a-fA-F0-9]{40}$/)

		// Skip element if it doesn't match the regex
		if (!regex.test(text)) return

		const addressName = addressToName(text)
		el.innerText = addressName
	})
})
