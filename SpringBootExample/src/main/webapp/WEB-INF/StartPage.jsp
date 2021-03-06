<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
	<head>
		<title>React JS Example</title>
		<script src="https://unpkg.com/react@15.3.2/dist/react.min.js"></script>
		<script src="https://unpkg.com/react-dom@15.3.2/dist/react-dom.min.js"></script>
		<script src="https://unpkg.com/babel-core@5.8.38/browser.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>
		<script src="https://code.jquery.com/jquery-2.2.0.min.js"></script>
	</head>

	<body>
		
		<script type="text/babel">

			var EmployeeAdd = React.createClass({

				getInitialState: function() {
					return {name: '', id: '',dept:''};
				},
				 handleIdChange: function(e) {
					this.setState({id: e.target.value});
				},
				 handleDeptChange : function(e){
					this.setState({dept: e.target.value});
				},
				handleNameChange : function(e){
					this.setState({name:e.target.value});
				},

				handleSubmit: function(e) {
					e.preventDefault();
					var name = this.state.name.trim();
					var id = this.state.id.trim();
					var dept = this.state.dept.trim();
					if (!name || !id || !dept) {
					  return;
					}
					this.props.onCommentSubmit({name: name, id: id, dept:dept});
					this.setState({name: '', id: '', dept:''});
				},
				render : function(){
					return(
						<form className="empAdd" onSubmit={this.handleSubmit}>
							<div>
								<table>
									<tr>
										<td>Employee Name</td>
										<td><input type ="text" name="name"  value= {this.state.name} onChange={this.handleNameChange}/></td>
									</tr>
									<tr>
										<td>Employee id</td>
										<td><input type ="text" name="id" value= {this.state.id} onChange={this.handleIdChange} /></td>
									 </tr>
									 <tr>
											<td>Department</td>
											<td><input type ="text" name="dept"  value= {this.state.dept} onChange={this.handleDeptChange}/></td>
									</tr>
									<tr>
											<td colspan="2">
												<input type="submit" value="Submit" id="saveBtn" class="save" />
											</td>
									</tr>
								</table>  
							</div>
						</form>
			
					);

				}
			});

			var EmployeeEdit = React.createClass({
				
			  render: function() {
				
					var rows =[];
					var onSubmit= this.props.onCommentSubmit;
					var onDeleteEmp= this.props.onDelete;
					this.props.data.forEach(function(data){
						rows.push(<EmployeeRows key={data.id} item={data} onCommentSubmit={onSubmit}  onDelete={onDeleteEmp}/>);
						
					});
				return(
					<table  className="empTable" border= "2">
						<thead>
							<tr>
								<th> Employee Name</th>
								<th> Employee Id </th>
								<th> Department</th>
								<th> Action</th>
							</tr>
						</thead>
							
						<tbody>
						{rows}
						</tbody>
					</table>
				)	; 
			  }
			});

			var EmployeeRows = React.createClass({

				getInitialState: function() {
					return { name: '', id: '',dept:''};
				},
				handleEdit: function(e) {
					e.preventDefault();
					var name = this.refs.empName.value;
					var id = this.refs.empId.value;
					var dept = this.refs.emdDept.value;
				   this.props.onCommentSubmit({name: name, id: id, dept:dept});
				},
				handleDelete: function(e) {
					e.preventDefault();
					var name = this.refs.empName.value;
					var id = this.refs.empId.value;
					var dept = this.refs.emdDept.value;
					this.props.onDelete({name: name, id: id, dept:dept});
				},
				render: function() {
					return(
						
						<tr className="record" id={"record_" + this.props.key} >
							<td >
								<input type ="text"  defaultValue={this.props.item.name} ref="empName" />
							</td>
							<td >
								<input type ="text"  value={this.props.item.id} ref ="empId"/>
							</td>
							<td >
								<input type ="text" defaultValue= {this.props.item.dept} ref="emdDept"/>
							</td>
							<td> 
								<input type="button" value="Edit" id="editBtn" data-item={this.props.item} onClick={this.handleEdit} class="btn"/>
								<input type="button" value="Delete" id="deleteBtn" data-item={this.props.item} onClick={this.handleDelete} class="btn" /> 
							</td>
						</tr>
							
					);
				}
			});


			var StartPage = React.createClass({

				componentDidMount: function() {
					this.loadCommentsFromServer();
				},
				  
				 getInitialState: function() {
					return ({data: [], editing: 'start'});
				},
				  
				loadCommentsFromServer: function() {
					$.ajax({
					  url: this.props.saveUrl,
					  dataType: 'json',
					  type: 'POST',
					  success: function(data) {
						
						this.setState({data: data});
					  }.bind(this),
					  error: function(xhr, status, err) {
						console.error(this.props.url, status, err.toString());
					  }
					});
				},
				  
				handleCommentSubmit: function(comment) {

				   $.ajax({
					  url: this.props.saveUrl,
					  dataType: 'json',
					  type: 'POST',
					  data: comment,
					  success: function(data) {
						
						this.setState({data: data});
						alert("Data Saved  successfully");
					  }.bind(this),
					  error: function(xhr, status, err) {
						this.setState({data: comments});
						alert("Can not save data");
					  }
					});
				},
				  
				handleDelete : function(comment){
					$.ajax({
					  url: this.props.deleteUrl,
					  dataType: 'json',
					  type: 'POST',
					  data: comment,
					  success: function(data) {
						
						this.setState({data: data});
						alert("Data Deleted successfully");
					  }.bind(this),
					  error: function(xhr, status, err) {
						this.setState({data: comments});
						console.error(this.props.url, status, err.toString());
					  }
					});  
				},
				addSate: function(){
					this.setState({editing:'add'});
				},
				viewState: function(){
					this.setState({editing:'edit'});
				},
				initialState:function(){
					this.setState({editing:'start'});
				},
				renderInitialForm:function(){
					return(
						<div>
							<h1>Employee Registration Process</h1>
							<input type= "button" value="Add a new Employee"  onClick={this.addSate}/>
							 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							<input type= "button" value="View Employees"  onClick={this.viewState}/>
						</div>
					);
				},
				render : function(){
							if(this.state.editing=='start'){
									return this.renderInitialForm();
							}else if (this.state.editing=='add'){
								return(
									<div>
										<h1>Employee Registartion</h1>
										<EmployeeAdd  onCommentSubmit={this.handleCommentSubmit} />
										<input type="button" value="Go to Home Page" onClick={this.initialState}/>
									</div>
								);
							}else{
								return(
									<div>
										<h1>Employee List</h1>
										<EmployeeEdit data={this.state.data} onDelete={this.handleDelete} onCommentSubmit={this.handleCommentSubmit} />
										<input type="button" value="Go to Home Page" onClick={this.initialState}/>
									</div>
								);
							}	
							
					
				}


			});
ReactDOM.render(<StartPage saveUrl="authUser/addUser" deleteUrl="authUser/delete"></StartPage>,document.getElementById("container"));
		</script>
		<div id="container"></div>
	</body>
</html>