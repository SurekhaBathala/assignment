package testrunner;


import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="features",
        glue={"stepdefinetion"},
		plugin={"html:target/cucumber-html-report"}
		
		)


public class Test1 {

}
