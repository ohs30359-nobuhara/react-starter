import { getLogger, configure } from 'log4js';
import config from 'config';

configure(config.get('log'));

class Log {
  constructor() {
    this.logger = getLogger();
  }

  info(log) {
    this.logger.info(log);
  }

  error(log) {
    this.logger.error(log);
  }
}

export const logger = new Log();