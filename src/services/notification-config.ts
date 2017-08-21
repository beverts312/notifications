import config = require('../config/notifications');

/**
 * Gets Alert Configurations (for now just proxies static json file)
 * @class NotificationConfigService
 */
class NotificationConfigService {
    public getCryptoConfigs() {
        return config.finance.crypto;
    }
}
export = NotificationConfigService;