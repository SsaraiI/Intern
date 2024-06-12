Feature: Register

  Scenario: Register_01 (normal)
    Given On the register page
    When Regis fill valid name
    And Regis fill valid mobile
    And Regis fill valid password
    And Regis fill valid re-password 
    And Regis submit Verify
    Then Change to Verify page 

  Scenario: Register_02 (normal)
    Given On the register page
    When Regis fill valid name
    And Regis fill valid email
    And Regis fill valid password
    And Regis fill valid re-password 
    And Regis submit Verify
    Then Change to Verify page 

  Scenario: Register_03 (abnormal)
    Given On the register page
    When Regis fill blank name
    And Regis fill blank mobile-email
    And Regis fill blank password
    And Regis fill blank re-password 
    And Regis submit Verify
    Then Regis all blank alert

  Scenario: Register_04 (abnormal)
    Given On the register page
    When Regis fill blank name
    And Regis fill valid mobile
    And Regis fill valid password
    And Regis fill valid re-password 
    And Regis submit Verify
    Then Regis name alert

  Scenario: Register_05 (abnormal)
    Given On the register page
    When Regis fill blank name
    And Regis fill valid email
    And Regis fill valid password
    And Regis fill valid re-password 
    And Regis submit Verify
    Then Regis name alert

  Scenario: Register_06 (abnormal)
    Given On the register page
    When Regis fill valid name
    And Regis fill blank mobile-email
    And Regis fill valid password
    And Regis fill valid re-password 
    And Regis submit Verify
    Then Regis blank mobile-email alert

  Scenario: Register_07 (abnormal)
    Given On the register page
    When Regis fill valid name
    And Regis fill valid mobile
    And Regis fill blank password
    And Regis fill valid re-password 
    And Regis submit Verify
    Then Regis blank password alert

  Scenario: Register_08 (abnormal)
    Given On the register page
    When Regis fill valid name
    And Regis fill valid email
    And Regis fill blank password
    And Regis fill valid re-password 
    And Regis submit Verify
    Then Regis blank password alert

  Scenario: Register_09 (abnormal)
    Given On the register page
    When Regis fill valid name
    And Regis fill valid mobile
    And Regis fill valid password
    And Regis fill blank re-password 
    And Regis submit Verify
    Then Regis re-password missing alert

  Scenario: Register_10 (abnormal)
    Given On the register page
    When Regis fill valid name
    And Regis fill valid email
    And Regis fill valid password
    And Regis fill blank re-password 
    And Regis submit Verify
    Then Regis re-password missing alert

  Scenario: Register_13 (normal)
    Given On the register page
    When Regis fill not Eng name
    And Regis fill valid mobile
    And Regis fill valid password
    And Regis fill valid re-password 
    And Regis submit Verify
    Then Change to Verify page 

  Scenario: Register_14 (normal)
    Given On the register page
    When Regis fill not Eng name
    And Regis fill valid email
    And Regis fill valid password
    And Regis fill valid re-password 
    And Regis submit Verify
    Then Change to Verify page 

  Scenario: Register_15 (normal)
    Given On the register page
    When Regis fill special letter name
    And Regis fill valid mobile
    And Regis fill valid password
    And Regis fill valid re-password 
    And Regis submit Verify
    Then Change to Verify page 

  Scenario: Register_16 (normal)
    Given On the register page
    When Regis fill special letter name
    And Regis fill valid email
    And Regis fill valid password
    And Regis fill valid re-password 
    And Regis submit Verify
    Then Change to Verify page 

  Scenario: Register_17 (abnormal)
    Given On the register page
    When Regis fill valid name
    And Regis fill not real mobile
    And Regis fill valid password
    And Regis fill valid re-password 
    And Regis submit Verify
    Then Regis invalid mobile-email alert 

  Scenario: Register_18 (abnormal)
    Given On the register page
    When Regis fill valid name
    And Regis fill not real email
    And Regis fill valid password
    And Regis fill valid re-password 
    And Regis submit Verify
    Then Regis invalid mobile-email alert 

  Scenario: Register_19 (abnormal)
    Given On the register page
    When Regis fill valid name
    And Regis fill valid mobile
    And Regis fill less password
    And Regis fill valid re-password 
    And Regis submit Verify
    Then Regis less password alert 
  
  Scenario: Register_20 (abnormal)
    Given On the register page
    When Regis fill valid name
    And Regis fill valid email
    And Regis fill less password
    And Regis fill valid re-password 
    And Regis submit Verify
    Then Regis less password alert 

  Scenario: Register_21 (abnormal)
    Given On the register page
    When Regis fill valid name
    And Regis fill valid mobile
    And Regis fill valid password
    And Regis fill unlike re-password 
    And Regis submit Verify
    Then Regis mismatch re-password alert

  Scenario: Register_22 (abnormal)
    Given On the register page
    When Regis fill valid name
    And Regis fill valid email
    And Regis fill valid password
    And Regis fill unlike re-password 
    And Regis submit Verify
    Then Regis mismatch re-password alert
  