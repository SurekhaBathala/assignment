$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:features/Test.feature");
formatter.feature({
  "name": "Test file upload scenario of we transfer",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Validate File Upload process",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Launch browser and open we Transfer site",
  "keyword": "Given "
});
formatter.step({
  "name": "Accept T\u0026C of WE transfer",
  "keyword": "When "
});
formatter.step({
  "name": "Browse and Upload file for transfer",
  "keyword": "Then "
});
formatter.step({
  "name": "Fill valid \"\u003csender\u003e\" and valid \"\u003creceiver\u003e\" details with Message",
  "keyword": "And "
});
formatter.step({
  "name": "click on Transfer for sending file to the recipient",
  "keyword": "Then "
});
formatter.step({
  "name": "Close the application",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "sender"
      ]
    },
    {
      "cells": [
        "surekhagoddli417@gmail.com"
      ]
    },
    {
      "cells": [
        "venkatsiva789@gmail.com"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validate File Upload process",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Launch browser and open we Transfer site",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinetion.Wetransfer.launch_browser_and_open_we_Transfer_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Accept T\u0026C of WE transfer",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinetion.Wetransfer.accept_T_C_of_WE_transfer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Browse and Upload file for transfer",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinetion.Wetransfer.browse_and_Upload_file_for_transfer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Fill valid \"surekhagoddli417@gmail.com\" and valid \"\u003creceiver\u003e\" details with Message",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinetion.Wetransfer.fill_valid_and_valid_details_with_Message(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Transfer for sending file to the recipient",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinetion.Wetransfer.click_on_Transfer_for_sending_file_to_the_recipient()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close the application",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinetion.Wetransfer.close_site()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate File Upload process",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Launch browser and open we Transfer site",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinetion.Wetransfer.launch_browser_and_open_we_Transfer_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Accept T\u0026C of WE transfer",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinetion.Wetransfer.accept_T_C_of_WE_transfer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Browse and Upload file for transfer",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinetion.Wetransfer.browse_and_Upload_file_for_transfer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Fill valid \"venkatsiva789@gmail.com\" and valid \"\u003creceiver\u003e\" details with Message",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinetion.Wetransfer.fill_valid_and_valid_details_with_Message(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Transfer for sending file to the recipient",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinetion.Wetransfer.click_on_Transfer_for_sending_file_to_the_recipient()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close the application",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinetion.Wetransfer.close_site()"
});
formatter.result({
  "status": "passed"
});
});