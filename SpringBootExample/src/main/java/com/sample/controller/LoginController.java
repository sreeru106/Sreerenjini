package com.sample.controller;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.sample.bean.User;
import com.wordnik.swagger.annotations.Api;
import com.wordnik.swagger.annotations.ApiOperation;

@Controller
public class LoginController {

	@RequestMapping(value = "/Login.html", method = RequestMethod.GET)
	public ModelAndView getRegForm() {

		return new ModelAndView("Login", "command", new User());
	}

	@RequestMapping(value = "/StartPage.html", method = RequestMethod.GET)
	public String getStartPage() {
		System.out.println("inside getStartPage");
		return "StartPage";
	}

	
}
