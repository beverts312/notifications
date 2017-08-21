// tslint:disable-next-line:missing-jsdoc
'use strict';

import Chai = require('chai');

import NotificationConfigService = require('../../src/services/notification-config');

const assert = Chai.assert;

suite('NotificationConfigService Suite -', () => {
    test('will write real tests when this is a real service', () => {
        (new NotificationConfigService()).getCryptoConfigs();
    });
});