// tslint:disable-next-line:missing-jsdoc
'use strict';

import Chai = require('chai');
import Sinon = require('sinon');

import NotificationService = require('../../src/services/notification');
import FinanceService = require('../../src/services/categories/finance');

const assert = Chai.assert;

let sut: NotificationService;
suite('NotificationService Suite -', () => {
    let sandbox: Sinon.SinonSandbox;

    setup(() => {
        sandbox = Sinon.sandbox.create();
        sut = new NotificationService();
    });

    suite('init', () => {
        test('should register financial alerts', () => {
            const financeService = new FinanceService();
            const registerAlertsStub = sandbox.stub(financeService, 'registerAlerts');
            sut = new NotificationService(financeService);
            sut.init();
            assert.isTrue(registerAlertsStub.calledOnce);
        });
    });
});