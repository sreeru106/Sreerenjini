				document.getElementById("myForm").addEventListener("submit", function(e){
										e.preventDefault();
										var name= document.getElementById("name").value;
										console.log("name  is  "+name)
										var depositAmount= document.getElementById("amount").value;
										var accountNumber= document.getElementById("accntnum").value;
										var years= document.getElementById("year").value;
										var bankName= document.getElementById("bnkname").value;
			 
										var customer1 = new Customer(name, depositAmount, accountNumber,bankName,years);
										customer1.calculateMaturityAmount(depositAmount);
					
				});
				
				var Bank = function(bankName) {
				  this.bankName = bankName;
				  this.interestRate=7;
				};


				Bank.prototype.calculateMaturityAmount = function(depositAmount){
					if(depositAmount== 0){
								 
				  document.getElementById("demo").innerHTML = "Invalid amount";
				 
					}else{
						var finalamount = parseInt(depositAmount)+parseInt((depositAmount*this.interestRate/100));
				 
				  document.getElementById("demo").innerHTML = "Maturity amount is  "+finalamount;								  
				  console.log("Maturity amount is  "+finalamount);
					}

				 
				};

				function Customer(name, depositAmount, accountNumber,bankName,years) {

				  Bank.call(this, bankName);
				  this.name = name;
				  this.depositAmount=depositAmount;
				  this.accountNumber=accountNumber;
				  this.years=years;
				}

				Customer.prototype = Object.create(Bank.prototype);

				Customer.prototype.constructor = Customer;