
# ✨ CRUD Unit Testing, Docker, and CI/CD ✨

This project primarily focuses on the development of a simple CRUD (Create, Read, Update, Delete) API using Sequelize. It involves implementing functionalities like finding all records, specific records, creating new ones, and soft deletes. To ensure the API's reliability, unit testing is performed using Jest.

Additionally, the project utilizes Docker for containerization, enabling the application to run consistently across different environments. The final stage involves the setup of a Continuous Integration/Continuous Delivery (CI/CD) process through GitLab. This process automates the integration of code changes, running tests, and deploying the application within Docker containers.



## 🛠️ Installation

There are several npm packages that will be used in this project, including cors, dotenv, express, jest, nodemon, pg, sequelize, sequelize-cli, and supertest. you can using code below to install all the npm packages

```bash
  npm install --save cors dotenv express jest nodemon pg sequelize sequelize-cli supertest
```
    
## 📥 Import Database
The database is already provided within the "./migration" and "./seeder" directories, so there's no need to import the database for this project. However, it remains crucial to create the database following the specifications outlined in "./config/config.js" to avoid any potential errors.
## ⚙️ How to Run Project
there is several way to run the project but dont forget to create the database first.
### local run 
to run this project using local, use:
```bash
node app.js
```

### Using Docker
to run this project using docker, use:
```bash
docker build .

docker compose up
```

### CI/CD
you can access the CI/CD configuration here
https://gitlab.com/rezaakbar351/unit-testing-development/-/runners/28805432


