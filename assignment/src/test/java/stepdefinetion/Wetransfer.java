package stepdefinetion;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.Toolkit;
import java.awt.datatransfer.StringSelection;
import java.awt.event.KeyEvent;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;


import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class Wetransfer {
	
	WebDriver driver;
	//Opening FireFox browser and Launching We transfer web site
	
	@Given("Launch browser and open we Transfer site")
	public void launch_browser_and_open_we_Transfer_site() throws InterruptedException {
		System. setProperty("webdriver.gecko.driver", "E:\\selenium\\geckodriver.exe");
		driver=new FirefoxDriver();
	    driver.get("https://wetransfer.com");
		driver.manage().window().maximize();
	    Thread.sleep(1000);
	}

	//Accepting T&C 
	
	@When("Accept T&C of WE transfer")
	public void accept_T_C_of_WE_transfer() throws InterruptedException {
		driver.findElement(By.xpath("//*[@type='button']")).click();
		Thread.sleep(2000);
	}

	//Uploading file for transfer
	
	@Then("Browse and Upload file for transfer")
	public void browse_and_Upload_file_for_transfer() throws AWTException, InterruptedException {
		driver.findElement(By.xpath("//button[contains(text(),'select a folder')]/preceding-sibling::*[1]")).click();
		Thread.sleep(2000);
	
		//Using Java Robot for handling window based pop-up	
		
		StringSelection x=new StringSelection("C:\\Surekha\\Surekha_QA.docx");
		Toolkit.getDefaultToolkit().getSystemClipboard().setContents(x,null);
		Robot r=new Robot();
		r.keyPress(KeyEvent.VK_CONTROL);
		r.keyPress(KeyEvent.VK_V);
		r.keyRelease(KeyEvent.VK_V);
		r.keyRelease(KeyEvent.VK_CONTROL);
		Thread.sleep(1000);
		r.keyPress(KeyEvent.VK_ENTER);
		r.keyRelease(KeyEvent.VK_ENTER);
		r.keyPress(KeyEvent.VK_ENTER);
		r.keyRelease(KeyEvent.VK_ENTER);
		Thread.sleep(5000); 
	}
//Creating a link for Transfer with parameterized data
	
	@And("Fill valid {string} and valid {string} details with Message")
	public void fill_valid_and_valid_details_with_Message(String To, String From) {
		driver.findElement(By.name("autosuggest")).sendKeys(To);
		driver.findElement(By.name("email")).sendKeys(From);
		driver.findElement(By.name("message")).sendKeys("Hi");
	}
	@Then("click on Transfer for sending file to the recipient")
	public void click_on_Transfer_for_sending_file_to_the_recipient() {
		driver.findElement(By.xpath("//button[@type='button']")).click();
		
	}
//Close opened site
	
	@Then("Close the application")
	public void close_site() {
	    driver.close();
	}
}
