Feature: Test file upload scenario of we transfer

Scenario Outline: Validate File Upload process

Given Launch browser and open we Transfer site
When Accept T&C of WE transfer
Then Browse and Upload file for transfer
And Fill valid "<sender>" and valid "<receiver>" details with Message
Then click on Transfer for sending file to the recipient
Then Close the application

Examples:
|sender|receiver
|surekhagoddli417@gmail.com|venkatsiva789@gmail.com
|venkatsiva789@gmail.com|surekhagoddli417@gmail.com