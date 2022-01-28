![MK Simple Logger](https://marck-devs.com/assets/img/SimpleLoggerLogo.png)
# MK Simple Logger

This a small package for node that allow implement a logger, and add same
config options, like theming or set custom format.
# Install
The package is available in npm repositories.
npm install
```
npm install mk-simple-logger
```
yarn install
```
yarn add mk-simple-logger
```
## Usage

The main class is `SimpleLogger` so you need to import from the module

```js
const SimpleLogger = require("mk-simple-logger").SimpleLogger;
// or
const { SimpleLogger } = require('mk-simple-logger');
let logger = new SimpleLogger("mylogger");
logger.info("My Message");
// -> 20/02/2021 @ 20:10:40 - [ info ] - mylogger - My message

// allow string foramtting
logger.critical("My {p} message", { p: "custom" });
// -> 20/02/2021 @ 20:10:40 - [ CRITICAL ] - mylogger - My custom message
```

### Methods

```js
logger.debug("");
logger.info("");
logger.log("");
logger.warn("");
logger.error("");
logger.critical("");
```

### Set the log level

```js
SimpleLogger.setLogLevel("debug"); // 'warn'| 'info' | 'log' | 'error' |
'critical'
```

### Set custom format

The class allow change the date and the log line format:

```js
SimpleLogger.setFormat("{name} ==> {msg}");
// on log: mylogger ==> My message
SimpleLogger.setDateFormat("{y}/{month}/{day}");
// on write date: 21/03/14
```

Available log fields:

```
{name}  - logger name
{level} - loging level
{date}  - log date
{msg}   - log message
```

Available date format:

```
{day}     - current day
{weekDay} - day of the week
{month}   - the month
{year}    - the full year
{y}       - the short year
{hour}    - the hour
{min}     - the minuts
{sec}     - the seconds
{mil}     - the miliseconds
```

## Enable the file logger

SimpleLogger class can manger a file log too, this option need to set
the static option `isFile` as `true` and set the `logFile`:

```js
SimpleLogger.enableFileLog(); // enable file log
SimpleLogger.setFileLog("myapp.log"); //setting the file log
// if you want you can disable the stdout with:
SimpleLogger.disableStdout();
```

Logger can work with two options at the same time, they'r not restrictive.

# Load configuration from the env
Simple logger can load same data from the enviroment if it's set.
Can load:
- `LEVEL` as `logLevel`
- `LOG_FILE` for set the log's file
- `ERROR_FILE` for set the errors' file
- If `NODE_ENV` is set read it and set the log level from this env variable

# Global usage
It's posible to use the logger globally, for this prupose from version [`0.1.4`](http://gitea.marck-devs.com/marck/mk-simple-logger/src/tag/v0.1.4)
has the static method `global()` that return an static instance of the logger:
```js
	const {SimpleLogger} = require('mk-simple-logger');
	SimpleLogger.global().log('message'); // can access to all log method
	SimpleLogger.global().setName('name'); // can set the girglobal logger name
```
All methods all available for the glogal logger.

# Express integration
Sice version [`0.1.8` ](http://gitea.marck-devs.com/marck/mk-simple-logger/src/tag/v0.1.8) can use built logger for express applications:
```javascript
function logger(?name: string, ?level: string): ExpressMiddleware
```

## Usage in express
```javascript
const express =  require('express');
const app = express();
const {SimpleLogger, logger} = require('mk-simple-logger');
app.use(express.json());
...
app.use(logger('request', 'log'));
...
app.listen(8080);

```
On request:
```
GET /uri1
logger:
10-01-22 @ 10:00:11 [ LOG ] -> request -> GET /uri1 resolve in 200ms
```
The logger work like the main logger so you can enable the file logger.