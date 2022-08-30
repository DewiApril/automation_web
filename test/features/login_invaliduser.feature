@login
Feature: Login Feature

  Scenario: login get error with invalid username
    Given I on login page lionparcel
    When I input invalid username
    And I input password
    And I click button enter
    Then User get error wrong username