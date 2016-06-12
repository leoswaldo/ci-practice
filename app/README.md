# WizeApp

### First time run
- Install nodejs in you machine
- Run `npm install forever -g"
- Run `npm install`
- Run `npm start`


### Overview
- Uses Node.js application is using the port `3000`.
- Uses Express as router
- Has two endpoints available endpoints
  - `GET /`: Should return `Hello world!`
  - `GET /health`: Should return `All good`
  - `GET /database`: Must return data from the DB

### Database
This application uses mongodb

#### Env Vars
- DB IP: `DATABASE_IP`
- DB Port: `DATABASE_PORT`
- DB Name: `DATABASE_NAME`
- DB User: `DATABASE_USER`
- DB Password: `DATABASE_PASSWORD`
- Environment: `ENVIRONMENT`
