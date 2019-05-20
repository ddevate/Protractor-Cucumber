import { defineSupportCode } from 'cucumber';
import { browser } from 'protractor';

import { CommonTasks, HomePage, CustomerPage, AccountsPage } from '../../shared';

defineSupportCode(({ Given, When, Then }) => {

    const chai = require('chai').use(require('chai-as-promised'));
    const aPage = new AccountsPage();


    When('Transaction is present in the transaction History Page', { timeout: 10000 }, async () => {

        await aPage.transactionsButton.click();
        await browser.refresh();
        await CommonTasks.wait(5000);

    });
    // When('User enter the start date', {timeout: 10000}, async () => {
    //     await aPage.startDateInput.sendKeys('05/17/2019 12:00:000 AM');
    // });
    // When('User enter the end date', {timeout: 20000}, async () => {
    //     await aPage.endDateInput.sendKeys('05/20/2019 12:00:000 PM')
    //     await CommonTasks.wait(19000);
    // });


}); 