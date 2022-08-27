@login
Feature: Access Product Via  Category

    # Scenario: User Successfully Login 
    # Given I on login page lionparcel
    # When I input username
    # And I input password 
    # And I click button enter
    # Then Dashboard page will be displayed

Scenario: User get error login with invalid password 
    Given I on login page lionparcel
    When I input username
    And  I input invalid password 
    And I click button enter
    # Then 



