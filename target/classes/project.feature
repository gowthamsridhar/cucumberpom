@tag
Feature: Title of your feature
  I want to use this template for my feature file

  @tag1
  Scenario: Add the customer details
    Given open the homepage
    When Enter the details
      | gowtham | sri | gow@gmail.com | chennai | 7299663142 |
    Then the user see the customer id

  @tag2
  Scenario Outline: Add the customer details with examples
    Given open the homepage guru
    When Enter the details page "<firstname>" , "<lastname>" , "<email>" , "<address>" , "<phno>"
     
    Then the user see the customer id in guru

    Examples: 
      | firstname | lastname | email          | address   | phno       |
      | guna      | sekar    | guna@gmail.com | kirshgiri |  824252638 |
      | ram       | kumar    | ram@gmail.com  | chennai   | 8453627345 |
