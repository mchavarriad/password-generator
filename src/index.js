const generatePass = (len = 10) => {
	const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*+=-.:";
	let pass = Array.from({ length: len }, () => possible.charAt(Math.floor(Math.random() * possible.length)))
	console.log(pass.join(''));
	return pass.join('');
}

module.exports = { generatePass }