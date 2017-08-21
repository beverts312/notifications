// tslint:disable-next-line:missing-jsdoc
const config = {
    finance: {
        stock: {},
        crypto: {
            coinmarketcap: {
                uris: {
                    base: 'https://api.coinmarketcap.com/v1/%s',
                    getCurrency: 'ticker/%s',
                    getCurrencies: 'ticker'
                }
            }
        }
    }
};
export = config;