/**
 * Created by zhoujun on 2017/7/4.
 */

const log4js = require('log4js');

module.exports = (config)=>{

	let category = config.category || 'km';
	let host = config.host || '127.0.0.1';
	let port = config.port || 5000;
	let instance = config.instance || '';
	let environment = config.environment || 'development';

log4js.configure({
	appenders: [
		{
			"category": category,
			"type": "log4js-logstash",
			"host": host,
			"port": port,
			"fields": {
				"instance": instance,
				"environment": environment
			}
		},
		{
			"category": "tests",
			"type": "console"
		}
	],
	"levels": {
		"tests":  "DEBUG"
	}
});

	var log = log4js.getLogger(category);
	log.info(category+'log启动成功');
	return log;
}