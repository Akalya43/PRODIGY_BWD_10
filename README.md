User Management REST API
This project is a RESTful User Management API built using Node.js and Express. It performs basic CRUD (Create, Read, Update, Delete) operations on user data stored in in-memory storage. The API includes proper error handling, input validation, and is tested using Postman.

📁 Project Structure
User-management-REST-API/
│
├── node_modules/
├── index.js
├── package.json
├── package-lock.json
└── README.md

Features
1)Create, read, update, and delete users
2)In-memory data storage using a hash map
3)UUID-based user identification
4)Input validation (email format, required fields)
5)Proper HTTP status codes (200, 201, 400, 404)
6)API testing using Postman
7)User Fields

Each user contains the following fields:
id (UUID)
name
email
age

Technologies Used
Node.js
Express.js
UUID
Postman (for API testing)

 How to Run the Project
Clone the repository:
git clone <repository-url>

Navigate to the project folder:
cd User-management-REST-API

Install dependencies:
npm install

Start the server:
node index.js

Server will run at:
http://localhost:5000
After create the user:http://localhost:5000/users

 Validation & Error Handling
Validates email format Checks required fields.

Returns appropriate status codes:
201 – Created
200 – Success
400 – Bad Request
404 – User Not Found

 Testing
All API endpoints are tested using Postman to verify request handling and responses.
