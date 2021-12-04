
export default class ConfigLoader{
	public static instance:ConfigLoader= new ConfigLoader();
	private config : any = {};

	private constructor(){
		this.checkEnv();
	}

	private conf(){
		if(!this.config)
			this.config = {};
		return this.config;
	}

	private checkEnv(){
		// check if exists env config;
		let config = process.env
		if(config.LOGS_FOLDER){
			this.conf().folder =  config.LOGS_FOLDER;
		}

		if(config.LOG_FILE)
			this.conf().logFile = config.LOG_FILE;

		if(config.EROR_FILE){
			this.conf().erroFile = config.LOG_FILE;
		}

		// set log level if it exists in the envirements variables
		if(config.LEVEL){
			this.conf().level = config.LEVEL;
		}

		// set the log level by the node env if LEVEL not exists in enviroment
		if(!config.LEVEL && config.NODE_ENV){
			switch(config.NODE_ENV){
				case "production":
				case "deploy":
					this.config.level = "log"
					break;
				case "debug":
				case "devel":
				case "development":
				case "sandbox":
					this.config.level = "debug";
				break;
				default:
					this.config.level = "info"
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
	public getConf(key:string, _return: any = false){
		if( key in this.conf() ){
			return this.conf()[key];
		}else{
			return _return;
		}
	}

}
