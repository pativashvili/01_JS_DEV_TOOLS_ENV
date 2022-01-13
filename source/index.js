import * as logger from "./logger";
import * as utils from "./utils";

logger.log("my message");
utils.currentDate();
console.log("is friday? - ", isFriday(new Date()));
console.log("is monday? - ", isMonday(new Date()));
console.log("is wensday? - ", isWednesday(new Date()));
