import { IdentificationType, CommonTasks } from './common-tasks';

export const locatorsCustomer = {
    selectDropdown: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//option[contains(text(), "Hermoine Granger")]'

    },
    allDropdowns: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//option'
    },

    LoginButton: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//button[contains(text(), "Login")]'
    },

    allButtons: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//button'
    },
    };

export class CustomerPage extends CommonTasks {
    selectDropdown = this.elementLocator(locatorsCustomer.selectDropdown);
    LoginButton = this.elementLocator(locatorsCustomer.LoginButton);
}
