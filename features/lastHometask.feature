Feature: Onliner Main Page Footer

  Background: Navigation to URL
    Given User navigates to "BASE_URL"

  Scenario: Page Title verification
    Then Page URL is equal to "BASE_URL"
    And New check of Page title is equal to "Onliner"

  Scenario: Cart click
    When I click "OnlinerMain|CartButton" element
    Then Page URL is equal to "https://cart.onliner.by/"

  Scenario: Secondary Nav
    When I wait until "OnlinerMain|Header|SecondaryNav" element is visible 
    And I click "OnlinerMain|Header|SecondaryNav" new element
    Then Page URL contains "catalog.onliner.by"
    And I wait until "OnlinerMain|Header|Samsung" element is visible

    Scenario Outline: Footer check
        When I scroll the page to "OnlinerMain|Footer|Footer"
        Then Footer Items list "OnlinerMain|Footer|Sections" contains values:
        | О компании                  |
        | Контакты редакции           |
        | Вакансии                    |
        | Манифест                    |
        | Пользовательское соглашение |
        | Публичные договоры          |
        | Политика конфиденциальности |
        | Поддержка пользователей     |
        | Правила возврата            |
   
   Scenario: Klever XPath
    When I wait until "OnlinerMain|Header|Klever" element is visible 
    Then Element "OnlinerMain|Header|Klever" has "target" attribute "_blank" value
    And Element "OnlinerMain|Header|Klever" has "href" attribute "https://clever.onliner.by/?utm_source=onliner&utm_medium=navigation&utm_campaign=clever" value
    
    @iPad
   Scenario: iPad emulation
    Then I wait until "OnlinerMain|Header|MobileMenu" element is visible