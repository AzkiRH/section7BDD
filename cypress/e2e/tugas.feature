Feature: Submit Transfer Funds Feature

    As a valid user
    i want to be able to give Transfer Funds

    Scenario: Submit something for transfer funds
        Given i open the transfer funds page
        When I input transfer funds form and submit
        Then I should see the message that the transfer funds successfully submitted your transaction