/**
 * Created by zhoujun on 2017/7/11.
 */
const Logger = require('../pinklogger');

//const logObj = new Logger({logName:'logs.log'});

//const logger = Logger.getLogFile('a.log');
//console.log(logger)
//console.error(logger)
//logger.trace('Entering cheese testing');
//logger.debug('Got cheese.');
//logger.info('Cheese is Gouda.');
//logger.log('Something funny about cheese.');
//logger.warn('Cheese is quite smelly.');
////these end up on the console and in cheese.log
//logger.error('Cheese %s is too ripe!', "gouda");
//logger.fatal('Cheese was breeding ground for listeria.');
const logger = Logger({
	category: 'km-message',
	instance: 'wallet-t1'
})

logger.info('11111')