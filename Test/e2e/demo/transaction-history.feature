@demo1

Feature: Common Banking Transactions

    Scenario: Cash Deposit Transaction
        Given User is on Home Page
        When User clicks customer Login Button
        And User selects the customer Name from DropDown
        And User clicks Login Button
        And Clears Transaction History
        And User clicks on Deposit Button
        And User enter the amount to deposit
        And User clicks Deposit
        Then Deposit is successful
        And Transaction is present in the transaction History Page
        
        
