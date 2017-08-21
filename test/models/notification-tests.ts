// tslint:disable-next-line:missing-jsdoc
'use strict';

import Chai = require('chai');
import Sinon = require('sinon');

import Notification = require('../../src/models/notification');

const assert = Chai.assert;

let sut: Notification;
suite('Notification Suite -', () => {
    let sandbox: Sinon.SinonSandbox;

    setup(() => {
        sandbox = Sinon.sandbox.create();
        sut = new Notification('title', 'body', undefined, true);
    });

    test('constructor', () => {
        assert.equal(sut.title, 'title');
        assert.equal(sut.body, 'body');
        assert.isUndefined(sut.icon);
        assert.isTrue(sut.silent);
    });

    test('send', () => {
        const notifyStub = sandbox.stub(sut, 'notify');
        sut.send();
        notifyStub.alwaysCalledWith('title', {
            body: 'body',
            silent: true
        });
    });
});