@login
Feature: Login Feature

  Scenario: login get error with invalid password
    Given I on login page lionparcel
    When I input username
    And I input invalid password
    And I click button enter
    Then User get error wrong password
