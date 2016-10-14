package com.sample.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.sample.bean.Employee;
import com.sample.bean.Employees;
import com.sample.dao.EmployeeDao;
import com.sample.entity.EmployeeEntity;

@Component
public class EmployeeServiceImpl implements EmployeeService {
	@Autowired
	EmployeeDao empdao;

	

	public String addEmployee(Employee employee) {
		System.out.println("inside service");
		EmployeeEntity entity = new EmployeeEntity();
		mapBeanToEntity(employee, entity);
		return	empdao.addEmployee(entity);
		
	}

	public String deleteEmployee(List<Employee> employees) {
		
		List<EmployeeEntity> emplist = new ArrayList<EmployeeEntity> ();
		for(Employee employee: employees){
			EmployeeEntity entity = new EmployeeEntity();
			mapBeanToEntity(employee,entity);
			emplist.add(entity);
		}
		 return empdao.deleteEmployee(emplist);
	}

	private void mapBeanToEntity(Employee employee, EmployeeEntity entity) {
		System.out.println(employee.getDept());
		System.out.println(employee.getId());
		System.out.println(employee.getName());
		entity.setEmpDep(employee.getDept());
		entity.setEmpId(Integer.parseInt(employee.getId()));
		entity.setEmpName(employee.getName());

	}

	@Override
	public List<Employee> fetchEmployee() {
		List<Employee> employess = new ArrayList<Employee>();
		List<EmployeeEntity> emplist = empdao.fetchEmployees();
		for (EmployeeEntity emp : emplist) {
			Employee employee = new Employee();
			mapEntityToBean(employee, emp);
			employess.add(employee);
		}
		return employess;
	}

	private void mapEntityToBean(Employee employee, EmployeeEntity emp) {
		employee.setDept(emp.getEmpDep());
		employee.setId(String.valueOf(emp.getEmpId()));
		employee.setName(emp.getEmpName());

	}

}
