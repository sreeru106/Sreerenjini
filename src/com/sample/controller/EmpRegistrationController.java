package com.sample.controller;

import java.util.List;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.google.gson.Gson;
import com.sample.bean.Employee;
import com.sample.bean.Employees;
import com.sample.bean.User;
import com.sample.service.EmployeeService;

@RestController
@RequestMapping(value = "/authUser")
public class EmpRegistrationController {

	@Autowired
	private EmployeeService empserice;

	@RequestMapping(value = "/registration.html", method = RequestMethod.GET)
	public ModelAndView getRegForm() {

		return new ModelAndView("EmployeeRegistration", "command",
				new Employee());
	}

	@RequestMapping(value = "/addUser", method = RequestMethod.POST)
	public String addUSer(HttpServletRequest request,
			HttpServletResponse response) {

		System.out.println("1st method" + request.getParameter("name"));
		Employee employee = new Employee((request.getParameter("name")),
				(request.getParameter("dept")), request.getParameter("id"));
		empserice.addEmployee(employee);
		List<Employee> employess = empserice.fetchEmployee();
		String jsonResponse = new Gson().toJson(employess);
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");

		// ServletContextListener implementaion
		ServletContext sc = request.getServletContext();
		System.out.println("Path:" + sc.getAttribute("filePath"));
		System.out.println("Mode:" + sc.getAttribute("fileMode"));
		return jsonResponse;
	}

	@RequestMapping(value = "/delete.html", method = RequestMethod.POST)
	public String deleteEmp(@ModelAttribute("empDet") Employees empDet,
			ModelMap model) {
		List<Employee> emplist = empDet.getEmployees();

		empserice.deleteEmployee(emplist);

		empDet = new Employees();
		empDet.setEmployees(empserice.fetchEmployee());
		model.addAttribute("empDet", empDet);
		return "EmployeeView";
	}
}
