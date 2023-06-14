import AppExpress from "../application/appExpress.js";

class AppFactory
{
    static create(appType = 'AppExpress')
    {
        const apps = new Map();
        apps.set('AppExpress', AppExpress);

        const app = apps.get(appType);
        return new app();
    }
}

export default AppFactory;
