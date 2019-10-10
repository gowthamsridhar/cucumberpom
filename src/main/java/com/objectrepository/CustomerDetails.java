package com.objectrepository;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.stepdefinitions.Hook;

public class CustomerDetails  {
	public CustomerDetails() {
		PageFactory.initElements(Hook.driver, this);
	}
	@FindBy(xpath="//label[text()='Done']")
	private WebElement btn1;
	
	@FindBy(id="fname")
	private WebElement fn;
	
	@FindBy(id="lname")
	private WebElement ln;
	
	@FindBy(id="email")
	private WebElement mail;
	
	@FindBy(xpath="//textarea[@id='message']")
	private WebElement address;
	
	@FindBy(id="telephoneno")
	private WebElement phno;
	
	
	@FindBy(xpath="//input[@type='submit']")
	private WebElement submitbtn;
	
	
	public WebElement getBtn1() {
		return btn1;
	}

	public WebElement getFn() {
		return fn;
	}

	public WebElement getLn() {
		return ln;
	}

	public WebElement getMail() {
		return mail;
	}

	public WebElement getAddress() {
		return address;
	}

	public WebElement getPhno() {
		return phno;
	}

	public WebElement getSubmitbtn() {
		return submitbtn;
	}
	
	
	
	
	
	
	
}
