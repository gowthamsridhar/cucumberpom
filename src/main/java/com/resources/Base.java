package com.resources;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class Base {
	
	
	public static WebDriver driver;
	
	public  static void fill(WebElement e, String value) {
		e.sendKeys(value);
		
	}
	public  static WebElement findelementById(WebElement e, String value) {
		WebElement element = e.findElement(By.id(value));
		return e;

	}
	

}
