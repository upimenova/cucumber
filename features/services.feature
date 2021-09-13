Feature: Onliner Services Page

  Background: Navigation to URL
    Given User navigates to "SERVICES_URL"
    
  Scenario: Page Title verification
    Then Page URL is equal to "SERVICES_URL"
    And Page title is equal to "Заказы на услуги"

  Scenario Outline: Verify Services items
    Then Section Items list "ServicesPage|Services|Sections" contains values:
        | Строительные и отделочные работы |
        | Перевозки                        |
        | Все для дома                     |
        | Ремонт техники и инструмента     |
        | Уборка                           |
        | Интернет                         |
        | Красота и стиль                  |
        | Спорт                            |
        | Туризм                           |
        | Авто и мото                      |
        | Компьютерная помощь              |
        | Репетиторы                       |
        | Образование                      |
        | Фото- и видеоуслуги              |
        | Услуги для животных              |
        | Дизайн и полиграфия              |
        | Виртуальный помощник             |
        | Организация торжеств             |
        | Аудит и бухгалтерские услуги     |
        | Юридические услуги               |
        | Ритуальные услуги                |

  Scenario: Verify filter value is selected after click
    When I click "ServicesPage|Services|FilterItem" element
    Then I wait until "ServicesPage|Services|SelectedFilter" element is visible


   Scenario Outline: Verify share buttons Path
    When I click "<locator>" element
    Then Page URL contains "<pageurl>"

    Examples:
        | locator                              | pageurl                                              |
        | .project-navigation__button_android  | https://play.google.com/store/apps/details           |
        | .project-navigation__button_ios      | https://apps.apple.com/app/apple-store/id1269069993  |