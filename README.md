# Simple logger for NodeJs

This a small package for node that allow implement a logger, and add same
config options, like theming or set custom format.

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

