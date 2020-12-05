import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface IAppConfig {
    environment: {
        production: boolean
        serverUrl: string
    }
}

@Injectable()
export class AppConfigService {

    static settings: IAppConfig;

    constructor(private http: HttpClient) { }

    load() {
        const jsonFile = `assets/config/config.json`;

        return new Promise<void>((resolve, reject) => {
            this.http.get(jsonFile).toPromise().then((response) => {
                AppConfigService.settings = <IAppConfig>response;

                console.log('Config Loaded');
                console.log('settings', AppConfigService.settings);
                resolve();

            }).catch((response: any) => {
                reject(`Could not load the config file`);
            });
        });
    }
}