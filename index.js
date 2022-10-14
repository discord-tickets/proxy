require('dotenv').config();
const port = process.env.PORT || 3000;
const fastify = require('fastify')();
const proxy = require('http-proxy').createProxyServer({});
const Logger = require('leekslazylogger');
const log = new Logger();

fastify.register(require('@fastify/static'), {
	root: require('path').join(__dirname, 'public'),
	prefix: '/no-proxy/'
});

fastify.all('*', (req, res) => {
	let host = req.hostname.split('.')[0];
	if (host === 'proxy') {
		res.sendFile('index.html');
	} else {
		host = Buffer.from(host, 'hex').toString();
		target = 'http://' + host;
		log.info(req.id, req.ip, req.method, target + req.url);
		proxy.web(req.raw, res.raw, { target });
	}
});

fastify.get('/output.css', (req, res) => {
	res.sendFile('output.css');
});

fastify.listen({ port }, (err, addr) => {
	if (err) log.error(err);
	else log.success(`Listening at`, addr);
});

process.on('uncaughtException', log.error);