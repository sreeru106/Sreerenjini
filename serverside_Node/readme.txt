Set up:
1.	Install Node and mongodb 
2.	download the code into your local machine
3.	open command prompt from the folder
4.	type "npm install", this will install all the node dependencies
5.	Go to MongoDB installed folder till bin,
		Run mongod.exe (make sure you have C:/data/db folder created)
6.	Create a folder AngularJS_Assignment and copy these files or download. 
7.	Create a folder “views” in the AngularJS_Assignment folder and place your index.html 
        (Use name "index.html" for the initial page and place that in the "views" folder.)
8.	Create a folder “client”  in the AngularJS_Assignment and place the angular js code in that folder
9.	While creating a router, mention template url as "client/<your path>"
10.	Use server calls as below:
	Creating an employee: /add   , Method: POST
	Viewing employee details: /view   , Method: GET
	Updating employee details: /update/:id  , Method: PUT
	Deleting employee details: /delete/:id , Method: DELETE
11.	 run the app using "node app.js"
12.	Go to browser and hit url : http://localhost:8888/index	
