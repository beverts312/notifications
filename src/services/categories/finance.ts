import CategoryProvider = require('../../interfaces/category-provider');
import Notification = require('../../notification');

/**
 * For financial related alerts
 * @class FinanceService
 * @implements {CategoryProvider}
 */
class FinanceService implements CategoryProvider {
    public registerAlerts() {
        throw new Error('Not Implimented');
    }
}
export = FinanceService;