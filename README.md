# Intern Profile Database

The Intern Profile Database is a backend application developed using **Node.js, Express.js, MongoDB, and Mongoose** to manage intern information efficiently. The system provides RESTful APIs for performing CRUD (Create, Read, Update, Delete) operations on intern records.

This project demonstrates database integration, API development, and backend data management practices commonly used in real-world applications.

---

## Features

* Add new intern profiles
* View all intern records
* Retrieve a specific intern by ID
* Update intern information
* Delete intern records
* MongoDB database integration using Mongoose
* API testing with Postman

---

## Technology Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB
* **ODM:** Mongoose
* **API Testing:** Postman
* **Environment Management:** dotenv

---

## Database Schema

Each user record contains:

| Field       | Type   |
| ----------- | ------ |
| internId    | String |
| name        | String |
| email       | String |
| phone       | String |
| college     | String |
| branch      | String |
| skills      | Array  |
| projects    | Array  |
| status      | String |
| joiningDate | Date   |

---
## Installation

### Clone Repository

```bash
git clone <repository-url>
cd InternProfileDatabase
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/internDB
```

### Start Server

```bash
npm run dev
```

Server Output:

```text
MongoDB Connected
Server running on port 5000
```

---

## API Endpoints

### Create Intern

```http
POST /api/interns
```

### Get All Interns

```http
GET /api/interns
```

### Get Intern By ID

```http
GET /api/interns/:id
```

### Update Intern

```http
PUT /api/interns/:id
```

### Delete Intern

```http
DELETE /api/interns/:id
```

---

## Sample Request

```json
{
  "internId": "INT001",
  "name": "Vasanthi",
  "email": "vasanthi@gmail.com",
  "phone": "9876543210",
  "college": "XYZ College",
  "branch": "CSE",
  "skills": ["Java", "MongoDB"],
  "projects": ["Intern Profile Database"],
  "status": "Active"
}
```
## Testing

All APIs were tested successfully using Postman and verified through MongoDB Compass.

### CRUD Operations Verified

* Create Intern Profile
* Retrieve Intern Data
* Update Intern Information
* Delete Intern Records

---
