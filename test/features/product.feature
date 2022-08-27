Feature: Access Product Via  Category

    Scenario: User Successfully Search By Category
        Given User Go To Homepage
        And  User Click Category Cellphone and Accessories
        And User Click Cell Phones & Smartphones
        When User Add Filter Screen Size, Price, Item Location
        Then User Successfully Filter Tags Are Applied

     Scenario: User Successfully Search In Search Bar
        Given User Go To Homepage
        And  User search Macbook keyword
        When User changed keyword to Iphone
        Then Iphone will have displayed