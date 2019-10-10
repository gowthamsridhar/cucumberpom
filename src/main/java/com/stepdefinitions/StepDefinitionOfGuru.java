package com.stepdefinitions;

import java.util.List;

import org.openqa.selenium.By;

import com.objectrepository.CustomerDetails;
import com.objectrepository.Homepage;
import com.resources.Base;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinitionOfGuru extends Base  {

	Homepage h=new Homepage();
	CustomerDetails c=new CustomerDetails();

@Given("open the homepage")
public void open_the_homepage() {
	h.getAdd().click();
	
    
}

@When("Enter the details")
public void enter_the_details(io.cucumber.datatable.DataTable dataTable) {
List<String> as = dataTable.asList(String.class);
c.getBtn1().click();
fill(c.getFn(), as.get(0));
fill(c.getLn(), as.get(1));
fill(c.getMail(), as.get(2));
fill(c.getAddress(), as.get(3));
fill(c.getPhno(), as.get(4));
c.getSubmitbtn().click();



}

@Then("the user see the customer id")
public void the_user_see_the_customer_id() {
	
		 System.out.println("success");
	 

}

@Given("open the homepage guru")
public void open_the_homepage_guru() {
	//Homepage h=new Homepage();
	h.getAdd().click();


}

@When("Enter the details page {string} , {string} , {string} , {string} , {string}")
public void enter_the_details_page(String s, String s1, String s2, String s3, String s4) {
	
	//CustomerDetails c=new CustomerDetails();
	c.getBtn1().click();
	fill(c.getFn(), s);
	fill(c.getLn(), s1);
	fill(c.getMail(), s2);
	fill(c.getAddress(), s3);
	fill(c.getPhno(), s4);
c.getSubmitbtn().click();	
	
	
	
}

@Then("the user see the customer id in guru")
public void the_user_see_the_customer_id_in_guru() {

System.out.println("success2");
	
	
	
}
}
