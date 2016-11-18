				
				var el = document.getElementById('myForm');
					if(el){

				document.getElementById("myForm").addEventListener("submit", function(e){
										e.preventDefault();
										var name= document.getElementById("name").value;
										console.log("name  is  "+name)
										var depositAmount= document.getElementById("amount").value;
										var accountNumber= document.getElementById("accntnum").value;
										var years= document.getElementById("year").value;
										var bankName= document.getElementById("bnkname").value;
										if(depositAmount== 0){
											document.getElementById('error').innerHTML='Invalid deposit amount';
										}else{
											var savingsAccount1 = new SavingsAccount(name, depositAmount, accountNumber,bankName,years);
										
											savingsAccount1.calculateMaturityAmount();
											var recurringAccount1 = new RecurringAccount(name, depositAmount, accountNumber,bankName,years);
										
											recurringAccount1.calculateMaturityAmount();
										}
										
				});
					}
				
				var Account = function(name, depositAmount, accountNumber,bankName,years) {
				  this.name = name;
				  this.depositAmount = depositAmount;
				  this.accountNumber = accountNumber;
				  this.bankName = bankName;
				  this.years = years;
				};


				Account.prototype.calculateMaturityAmount = function(interestRate,that){
					referrence=that;
					var finalamount = parseInt(referrence.depositAmount)+parseInt((referrence.depositAmount*interestRate/100));								  
				  console.log("Maturity amount is  "+finalamount);
				  return finalamount;
					
		 
				};

				function SavingsAccount(name, depositAmount, accountNumber,bankName,years) {

				  Account.call(this, name, depositAmount, accountNumber,bankName,years);
				  this.interestRate=4;
				  this.maturityamount = 0;
				}

				SavingsAccount.prototype = Object.create(Account.prototype);

				SavingsAccount.prototype.constructor = SavingsAccount;
				SavingsAccount.prototype.parent = Account.prototype;
				SavingsAccount.prototype.calculateMaturityAmount =function(){
							this.maturityamount=this.parent.calculateMaturityAmount(this.interestRate,this);
							document.getElementById('sdemo').innerHTML='Maturity Amount from Savings account is '+this.maturityamount;
				}
				function RecurringAccount(name, depositAmount, accountNumber,bankName,years) {

				  Account.call(this, name, depositAmount, accountNumber,bankName,years);
				  this.interestRate=8;
				  this.maturityamount = 0;
				}

				RecurringAccount.prototype = Object.create(Account.prototype);

				RecurringAccount.prototype.constructor = RecurringAccount;
				RecurringAccount.prototype.parent = Account.prototype;
				RecurringAccount.prototype.calculateMaturityAmount =function(){
							this.maturityamount= parseInt(this.depositAmount)+parseInt(this.depositAmount*this.interestRate*this.years/100);
							document.getElementById('rdemo').innerHTML='Maturity Amount from Recurring account is '+this.maturityamount;
				}