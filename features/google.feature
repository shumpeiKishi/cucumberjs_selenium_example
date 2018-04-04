Feature: Searching for cucumbers
As an internet user
In order to find out more about cucumbers
I want to be able to search for information about cucumbers

  Scenario: Google cucumber search
    Given I visit google
    When I search for "cucumbers"
    Then I should see some results
    And I take a screenshot