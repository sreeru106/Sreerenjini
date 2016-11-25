Set up:
1. Node and mongo installed
2. download the code into your local machine
3. open command prompt from the folder
4. type "npm install", this will instll all the node dependencies
5. Go to MongoDB installed folder till bin,
		run mongod.exe (make sure you have C:/data/db folder created)
6. Make the changes in your code as mentioned below
7. run the app using "node app.js"
8. Go to browser and hit url : http://localhost:8888/index	



Code changes :
1. Place the angular js code in the folder "client"
2. While creating a router, mention template url as "client/<your path>"
3. use server calls as below:
	Creating an employee : /add , Method:POST
	Viewing employee details : /view , Method : GET
	Updating employee detials : /update/:id  , Method : PUT
	Deleting employee details : /delete/:id , Method : DELETE
	
4. Use name "index.html" for the initial page and place that in the "views" folder.

