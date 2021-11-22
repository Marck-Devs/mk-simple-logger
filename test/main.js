const SimpleLogger = require("../dist");


let logger = new SimpleLogger.SimpleLogger("logger")
let theme = SimpleLogger.ThemeBuild();
// SimpleLogger.SimpleLogger.setFormat("{level} {msg}")
SimpleLogger.SimpleLogger.setLogLevel("debug")
SimpleLogger.SimpleLogger.enableFileLog()
SimpleLogger.SimpleLogger.setLogFile("logger.log")
SimpleLogger.SimpleLogger.setErrorFile("error.log")
SimpleLogger.SimpleLogger.setDateFormat("{day}/{month}/{year}")
const log2 = new SimpleLogger.SimpleLogger("my logger")
// while (1) {
logger.critical("Error")
logger.info("Error")
logger.log("wt")
logger.error("wt")
logger.debug("wt")
logger.warn("wt")

log2.critical("Error")
log2.info("Error")
log2.log("wt")
log2.error("wt")
log2.debug("wt")
log2.warn("wt")
// }