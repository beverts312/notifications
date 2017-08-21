// tslint:disable:no-reserved-keywords
// tslint:disable:variable-name

/**
 * @interface CryptoCurrency
 */
interface CryptoCurrency {
    id?: string;
    name: string;
    symbol: string;
    rank?: number;
    price_usd?: number;
    price_btc?: number;
    market_cap_usd?: number;
    available_supply?: number;
    total_supply?: number;
    percent_change_1h?: number;
    percent_change_24h?: number;
    percent_change_7d?: number;
}
export = CryptoCurrency;