import { $, browser, by, element, ElementFinder } from 'protractor';

export class CreatePresetPo {
    static async create(name: string, excludeMocks: boolean, excludeVariables: boolean): Promise<void> {

        await $('.name').sendKeys(name);

        if (excludeMocks) {
            await $('.excludeMocks').$('.mdc-checkbox__native-control').click();
        }

        if (excludeVariables) {
            await $('.excludeVariables').$('.mdc-checkbox__native-control').click();
        }

        await element(by.buttonText('Create')).click();

        await browser.sleep(1000);
    }

    static error(): ElementFinder {
        return $('.error');
    }

}
