Feature: Onliner Main Page

  Background: Navigation to URL
    Given User navigates to "BASE_URL"
  @mobile
  Scenario: Page Title verification
    Then Page URL is equal to "BASE_URL"
    And Page title is equal to "Onliner"
  @mobile
  Scenario: Page logo verification
    When I click "OnlinerMain|Header|HeaderLogo" element
    Then Page URL is equal to "BASE_URL"

  Scenario: Search Verification
    When I enter "iPhone" text into "OnlinerMain|Header|SearchField" element
    And I switch to "iframe.modal-iframe" element
    And I delete symbol in element
    Then Input value of "OnlinerMain|Header|SearchField" element contains "iPhon" text

  Scenario: Cart click
    When I click "OnlinerMain|CartButton" cart element
    Then Page URL is equal to "https://cart.onliner.by/"
   