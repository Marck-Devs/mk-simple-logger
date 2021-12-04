
export default class ConfigLoader{
	public static instance:ConfigLoader = new ConfigLoader();
	private static config : any = {};

	private constructor(){
		this.checkEnv();
	}

	private checkEnv(){
		// check if exists env config;
		let config = process.env
		if(config.LOGS_FOLDER){
			ConfigLoader.config.folder =  config.LOGS_FOLDER;
		}

		if(config.LOG_FILE)
			ConfigLoader.config.logFile = config.LOG_FILE;

		if(config.EROR_FILE){
			ConfigLoader.config.erroFile = config.LOG_FILE;
		}

		// set log level if it exists in the envirements variables
		if(config.LEVEL){
			ConfigLoader.config.level = config.LEVEL;
		}

		// set the log level by the node env if LEVEL not exists in enviroment
		if(!config.LEVEL && config.NODE_ENV){
			switch(config.NODE_ENV){
				case "production":
				case "deploy":
					ConfigLoader.config.level = "log"
					break;
				case "debug":
				case "devel":
				case "development":
				case "sandbox":
					ConfigLoader.config.level = "debug";
				break;
				default:
					ConfigLoader.config.level = "info"
					break;
			}
		}
	}
	/**
	 * get config from the object
	 * @param {string} key of the var
	 * @param {string} _return the value to return if not found value
	 * @returns {any} the value of the default value
	 **/
	public static getConf(key:string, _return: any = false){
		if( key in ConfigLoader.config ){
			return ConfigLoader.config[key];
		}else{
			return _return;
		}
	}

}
