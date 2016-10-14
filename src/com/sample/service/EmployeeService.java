package com.sample.service;

import java.util.List;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.sample.bean.Employee;

@Component
public interface EmployeeService {

	public String addEmployee(Employee employee);

	public String deleteEmployee(List<Employee> emplist);

	public List<Employee> fetchEmployee();

//	public void savePolicy();
//	
//	public void saveDocument();
}
