@login
Feature: Access Product Via  Category

    Scenario: User Successfully Login 
    Given I on login page lionparcel
    When I input username and password 
    And I click button enter
    Then Dashboard page will be displayed



