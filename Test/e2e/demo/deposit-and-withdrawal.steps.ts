import { defineSupportCode } from 'cucumber';
import { browser } from 'protractor';

import { CommonTasks, HomePage, CustomerPage, AccountsPage } from '../../shared';

defineSupportCode(({ Given, When, Then }) => {

    const chai = require('chai').use(require('chai-as-promised'));
    const expect = chai.expect;
    const hPage = new HomePage();
    const cPage = new CustomerPage();
    const aPage = new AccountsPage();

    Given('User is on Home Page', async () => {
        await browser.get('', 120000);
    });

    When('Clears Transaction History', async () => {
        await aPage.transactionsButton.click();
        await aPage.resetButton.click();
        await aPage.backButton.click();
    });

    When('User clicks customer Login Button', async () => {
        await hPage.customerLoginButton.click();
    });

    When('User selects the customer Name from DropDown', async () => {
        await cPage.selectDropdown.click();
    });

    When('User clicks Login Button', async () => {
        await cPage.LoginButton.click();
    });

    When('User clicks on Deposit Button', async () => {
        await aPage.depositButton.click();
    });

    When('User enter the amount to deposit', async () => {
        await aPage.amountInput.sendKeys('100');
    });

    When('User clicks Deposit', async () => {
        await aPage.depositAmountButton.click();
    });

    Then('Deposit is successful', async () => {
        await expect(aPage.elementDepositResult.getText()).to.eventually.contain("Deposit Successful");
    });

    When('User clicks on Withdrawal Button', async () => {
        await aPage.withdrawalButton.click();
    });

    When('User enter the amount to Withdraw', async () => {
        await aPage.amountInput.sendKeys('100');
    });
    When('User clicks Withdraw', async () => {
        await aPage.withdrawalamountButton.click();
    });
    Then('Withdrawal is successful', async () => {
        await CommonTasks.wait(2000);
        await expect(aPage.elementWithdrawalResult.getText()).to.eventually.contain("Transaction successful");
    });
}); 
