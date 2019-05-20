import { IdentificationType, CommonTasks } from './common-tasks';

export const locatorsHome = {
    customerLoginButton: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//button[contains(text(), "Customer Login")]'
    },

    allButtons: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//button'
    },


};

export class HomePage extends CommonTasks {
    customerLoginButton = this.elementLocator(locatorsHome.customerLoginButton);

}

