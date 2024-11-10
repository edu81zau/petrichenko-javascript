const path = require('path');
const config = {
	devServer: {
		contentBase: process.env.CONTENT_BASE || path.join(__dirname, 'public'),
		serveIndex: true,
		watchContentBase: true
	}
}
console.log('config', config);
module.exports = config;
