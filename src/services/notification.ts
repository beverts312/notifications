import FinanceService = require('./categories/finance');

/**
 * @class NotificationService
 */
class NotificationService {
    private financeService: FinanceService;

    constructor(financeService?: FinanceService) {
        this.financeService = (financeService) ? financeService : new FinanceService();
    }

    public init() {
        this.financeService.registerAlerts();
    }
}
export = NotificationService;