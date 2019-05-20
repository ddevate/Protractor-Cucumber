import { IdentificationType, CommonTasks } from './common-tasks';

export const locatorsAccount = {
    depositButton: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//button[contains(text(), "Deposit")]'
    },

    allButtons: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//button'
    },
    amountInput: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//input[contains(@type, "number")]'
    },
    depositAmountButton: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//button[contains(@type, "submit")]'
    },
    elementDepositResult: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//span[contains(text(), "Deposit Successful")]'

    },
    withdrawalButton: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//button[contains(text(), "Withdrawl")]'
    },
    
    withdrawalamountButton: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//button[contains(@type, "submit")]'
    },
    elementWithdrawalResult: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//span[contains(text(), "Transaction successful")]'
    },
    transactionsButton: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//button[contains(text(), "Transactions")]'
    },
    // startDateInput: {
    //     type: IdentificationType[IdentificationType.Xpath],
    //     value: '//input[contains(@id, "start")]'
    // },
    // endDateInput: {
    //     type: IdentificationType[IdentificationType.Xpath],
    //     value: '//input[contains(@id, "end")]'
    // },
    resetButton: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//button[contains(text(),"Reset")]'

    },
    backButton: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//*[contains(text(),"Back")]'

    }

    



};
export class AccountsPage extends CommonTasks {
    depositButton = this.elementLocator(locatorsAccount.depositButton);
    amountInput = this.elementLocator(locatorsAccount.amountInput);
    depositAmountButton = this.elementLocator(locatorsAccount.depositAmountButton);
    elementDepositResult = this.elementLocator(locatorsAccount.elementDepositResult);
    withdrawalButton = this.elementLocator(locatorsAccount.withdrawalButton);
    withdrawalamountButton = this.elementLocator(locatorsAccount.withdrawalamountButton);
    elementWithdrawalResult = this.elementLocator(locatorsAccount.elementWithdrawalResult);
    transactionsButton = this.elementLocator(locatorsAccount.transactionsButton);
    // startDateInput = this.elementLocator(locatorsAccount.startDateInput);
    // endDateInput = this.elementLocator(locatorsAccount.endDateInput);
    resetButton = this.elementLocator(locatorsAccount.resetButton);
    backButton = this.elementLocator(locatorsAccount.backButton);
}