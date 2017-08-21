import CrptoCurrency = require('./crypto-currency');

/**
 * @interface CryptoProvider
 */
interface CryptoProvider {
    getData(id: string): Promise<CrptoCurrency>;
}
export = CryptoProvider;