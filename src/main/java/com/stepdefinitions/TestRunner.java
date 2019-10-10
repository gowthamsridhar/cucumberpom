package com.stepdefinitions;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src\\main\\resources",glue={"com.stepdefinitions"},plugin= {"html:target\\cucumberreports"})
public class TestRunner {
	
	
	
	

}
