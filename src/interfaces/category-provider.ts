/**
 * @interface CategoryProvider
 */
interface CategoryProvider {
    /**
     * Register all alerts for this category
     * @memberof CategoryProvider
     */
    registerAlerts(): void;
}
export = CategoryProvider;