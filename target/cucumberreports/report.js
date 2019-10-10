$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/project.feature");
formatter.feature({
  "name": "Title of your feature",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "name": "Add the customer details",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "open the homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionOfGuru.open_the_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the details",
  "rows": [
    {
      "cells": [
        "gowtham",
        "sri",
        "gow@gmail.com",
        "chennai",
        "7299663142"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionOfGuru.enter_the_details(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user see the customer id",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionOfGuru.the_user_see_the_customer_id()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Add the customer details with examples",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "open the homepage guru",
  "keyword": "Given "
});
formatter.step({
  "name": "Enter the details page \"\u003cfirstname\u003e\" , \"\u003clastname\u003e\" , \"\u003cemail\u003e\" , \"\u003caddress\u003e\" , \"\u003cphno\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the user see the customer id in guru",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "email",
        "address",
        "phno"
      ]
    },
    {
      "cells": [
        "guna",
        "sekar",
        "guna@gmail.com",
        "kirshgiri",
        "824252638"
      ]
    },
    {
      "cells": [
        "ram",
        "kumar",
        "ram@gmail.com",
        "chennai",
        "8453627345"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Add the customer details with examples",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "open the homepage guru",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionOfGuru.open_the_homepage_guru()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the details page \"guna\" , \"sekar\" , \"guna@gmail.com\" , \"kirshgiri\" , \"824252638\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionOfGuru.enter_the_details_page(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user see the customer id in guru",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionOfGuru.the_user_see_the_customer_id_in_guru()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Add the customer details with examples",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "open the homepage guru",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionOfGuru.open_the_homepage_guru()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the details page \"ram\" , \"kumar\" , \"ram@gmail.com\" , \"chennai\" , \"8453627345\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionOfGuru.enter_the_details_page(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user see the customer id in guru",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionOfGuru.the_user_see_the_customer_id_in_guru()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});