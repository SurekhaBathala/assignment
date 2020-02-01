# assignment
Steps for Executing Tests in Cucumber: 
Step 1: Install java and Eclispe IDE in personal computer 
Step 2: Open Eclipse IDE assign work space and create Maven project. 
Step3: Open pom.xml and add dependencies for the following Jars. 
                                                 1.Selenium Java 
                                                 2.Cucumber Java 
                                                 3.Cucumber Junit 
                                                 4.Junit 
Step 4: Create a folder with name features under the src/test/java then create new file with .feature extension and write all the scenarios using Gherkin language. 
Step 5: Create package under src/test/java as Stepdefinition then create a new class and write code for executing tests. 
Step 6: Create a Runner class file to link feature file(scenarios) and stepdefiniton package(Selenium code)  for executing tests. 
Step 7: For Executing the Test script follow the below steps 
-->Open “TestRunner” class. 
 -->Right click and select—Run As--JUnit 
Step 8: After successful script execution HTML Report will be generated in the target folder 
(target-->cucumber-html-report-->index.html) 

The following things will happen after execution 
1)An instance of Firefox web browser will open 
2)It will open the we transfer site on the browser 
3)It will detect the agree button preforms click action. 
4)It will detect “Add files” option and then browse’s and upload’s the file. 
5)It will enter all the input details. 
6)It will Detect “Transfer” but and then transfer the file. 
7)Then browser will be closed. 
8)Automatically reported will be generated in “target” folder 

Note: 
1)Disable the browser security pop-ups before executing script. 
2)If you are exporting the project, change the location of file to be uploaded as per PC. 
I.e., change the string selection value in the code. 
3)If you want transfer file to more users, make changes in Examples of the feature file. 
4)After executing script Refresh the target folder to see generated html report 
