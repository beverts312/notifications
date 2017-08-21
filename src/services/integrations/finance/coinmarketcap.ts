import request = require('request');
import util = require('util');

import Config = require('../../../config/services');

import CryptoProvider = require('../../../interfaces/finance/crypto-provider');
import CryptoCurrency = require('../../../interfaces/finance/crypto-currency');

const config = Config.finance.crypto.coinmarketcap;
/**
 * For financial related alerts
 * @class CoinmarketcapService
 * @implements {CryptoProvider}
 */
class CoinmarketcapService implements CryptoProvider {

    public getData(id: string): Promise<CryptoCurrency> {
        return new Promise<CryptoCurrency>((resolve, reject) => {
            const uri = util.format(config.uris.base, config.uris.getCurrency);
            request.get(util.format(uri, id), {}, (err, res) => {
                if (res.statusCode !== 200) {
                    reject(res.body);
                }
                resolve(JSON.parse(res.body)[0]);
            });
        });
    }
}
export = CoinmarketcapService;