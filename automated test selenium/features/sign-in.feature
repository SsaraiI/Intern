Feature: sign in

  Scenario: sign in_02 (normal)
    Given On the sign in page
    When Sign fill valid email
    And Sign submit continue
    And Sign fill valid password
    And Sign submit sign in
    Then Sign change to verify page

