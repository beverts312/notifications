// tslint:disable-next-line:missing-jsdoc
'use strict';

import Chai = require('chai');
import Sinon = require('sinon');
import request = require('request');

import CoinmarketcapService = require('../../../../src/services/integrations/finance/coinmarketcap');

const assert = Chai.assert;

const sut = new CoinmarketcapService();
suite('CoinmarketcapService Suite -', () => {
    let sandbox: Sinon.SinonSandbox;

    setup(() => {
        sandbox = Sinon.sandbox.create();
    });

    teardown(() => {
        sandbox.restore();
    });

    suite('getData', () => {
        test('should call proper url', (done) => {
            const getStub = sandbox.stub(request, 'get');
            getStub.yields(null, { statusCode: 200 });
            sut.getData('bitcoin').catch(() => {
                assert(getStub.calledOnce);
                assert.equal(getStub.firstCall.args[0], 'https://api.coinmarketcap.com/v1/ticker/bitcoin');
                done();
            });
        });

        test('should handle error', (done) => {
            const getStub = sandbox.stub(request, 'get');
            getStub.yields(null, { statusCode: 500 });
            sut.getData('').catch(() => {
                assert(getStub.calledOnce);
                done();
            });
        });
    });
});