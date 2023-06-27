Feature: Submit Feedback Feature


    As a user
    I want to be able to give a feedback


    Scenario: Submit something for feedback
        Given I open the feedback page
        When I input feedback form and submit
        Then I should see the message that the feedback i gave, succses and will be reviewed by CS staff