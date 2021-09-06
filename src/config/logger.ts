import { join } from 'path';
import { existsSync as verifyFileLogExisit, mkdirSync as buildFile } from 'fs';
import { createLogger, error, format, transports } from 'winston';

import environment from './environment';

const DIRECTORY_NAME_TO_LOG = 'logs';

if (!verifyFileLogExisit(DIRECTORY_NAME_TO_LOG)) {
  buildFile(DIRECTORY_NAME_TO_LOG);
}

const errorLog = join(DIRECTORY_NAME_TO_LOG, 'error.log');
const combinedLog = join(DIRECTORY_NAME_TO_LOG, 'combined.log');
const exceptionsLog = join(DIRECTORY_NAME_TO_LOG, 'exceptions.log');

export const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
  ),
  transports: [
    new transports.File({
      filename: errorLog,
      level: 'error'
    }),
    new transports.File({
      filename: combinedLog
    })
  ],
  exceptionHandlers: [
    new transports.File({
      filename: exceptionsLog
    })
  ]
});

if (environment.NODE_ENV !== 'production') {
  logger.add(
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
      ),
      level: 'debug'
    })
  );
}
