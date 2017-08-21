// tslint:disable-next-line:no-var-requires
import notify = require('electron-main-notification');

/**
 * @class Notification
 */
class Notification {
    /**
     * A title for the notification, which will be shown at the top of the notification window when it is shown
     * @type {String}
     * @memberof Notification
     */
    public title: String;

    /**
     * The body text of the notification, which will be displayed below the title or subtitle
     * @type {String}
     * @memberof Notification
     */
    public body?: String;
    /**
     * Whether or not to emit an OS notification noise when showing the notification
     * @type {Boolean}
     * @memberof Notification
     */
    public silent?: Boolean;
    /**
     * An icon to use in the notification
     * @type {{}}
     * @memberof Notification
     */
    public icon?: {};

    // tslint:disable-next-line:typedef
    public notify = notify;

    constructor(title: String, body?: String, icon?: {}, silent?: Boolean) {
        this.title = title;
        this.body = body;
        this.icon = icon;
        this.silent = silent;
    }

    public send() {
        this.notify(this.title, {
            body: this.body,
            silent: this.silent,
            icon: this.icon
        });
    }
}
export = Notification;