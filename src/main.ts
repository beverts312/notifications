// tslint:disable:missing-jsdoc
// tslint:disable:max-func-body-length
import electron = require('electron');
import path = require('path');
import url = require('url');

import NotificationService = require('./services/notification');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const notificationService = new NotificationService();
let mainWindow;

const createWindow = () => {
    mainWindow = new BrowserWindow({ width: 800, height: 600 });
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, '../index.html'),
        protocol: 'file:',
        slashes: true
    }));

    mainWindow.on('closed', () => {
        mainWindow = null;
    });

    notificationService.init();
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});