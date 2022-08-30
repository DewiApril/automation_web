@login
Feature: Login Feature

  Scenario: User Successfully Login 
    Given I on login page lionparcel
    When I input username
    And I input password 
    And I click button enter
    Then Dashboard page will be displayed
