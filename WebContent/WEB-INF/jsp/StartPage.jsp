<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<html>
<head>
<title>Spring MVC Form Handling</title>
<script src="https://unpkg.com/react@15.3.2/dist/react.min.js"></script>
<script src="https://unpkg.com/react-dom@15.3.2/dist/react-dom.min.js"></script>
<script src="https://unpkg.com/babel-core@5.8.38/browser.min.js"></script>
<script src="https://code.jquery.com/jquery-1.9.1.min.js"></script>
</head>

<body>
	<Script type="text/javascript">
$(document).on('click', '#save', function(event){
 //$("#employeeForm").submit(function(event) {
      event.preventDefault();
      var $form = $( "#employeeForm" );
      
      $.ajax({
    	     type: $form.attr('method'),
    	     url: $form.attr('action'),
    	     data:$form.serialize(),
    	     success: function (jsonResponse) {var $table = $("<table border='2' class='table'>").appendTo($("#result")); 
			$("<tr>").appendTo($table)
			         .append($("<td>").text("ID"))
			         .append($("<td>").text("Name"))
					 .append($("<td>").text("Department"))
					 .append($("<td>").text("ACTIONS"));
			$("</tr>").appendTo($table);
			
			var employees = JSON.parse(jsonResponse); 

			$.each(employees, function(index, empDet) {   
	            $("<tr>").appendTo($table)
	            		.append($("<td>").text(empDet.id))
	                	.append($("<td>").text(empDet.name))
	            		.append($("<td>").text(empDet.dept))
	            		.append($("<td>").html('<button id="editemployee" name='+empDet.id+' class="action" >Edit</button>'));
	            $("</tr>").appendTo($table);
	        });
		},
		error: function(){
			$('#result').html("Exception!!");
		}
});
});
</Script>
<script type="text/babel">
var StartPage = React.createClass({

render : function(){
return(
		<div>
			<table>
    			<tr>
        			<td>Employee Name</td>
        			<td><input type ="text" name="name" /></td>
    			</tr>
    			<tr>
       				 <td>Employee id</td>
       				 <td><input type ="text" name="id" /></td>
   				 </tr>
   				 <tr>
        				<td>Department</td>
        				<td><input type ="text" name="dept" /></td>
				</tr>
   				 <tr>
      					  <td colspan="2">
          				  <input type="button" value="Submit" id="save" />
      					  </td>
   				 </tr>
			</table>  
		</div>
		
);
}
});

ReactDOM.render(<StartPage/>,document.getElementById("container"));
</script>
<form:form method="POST" action="addUser" id="employeeForm">
<div id="container"></div>
</form:form>
	<div id= "result"></div>	

</body>

</html>