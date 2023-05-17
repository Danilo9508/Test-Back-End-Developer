# Test-Back-End-Developer
test back-end developer for  Wompi
**Table of Contents**

[TOC]

## Configuration
The following is the process of installing development dependencies and configuring Sequelize for the creation of the database structure in the various environments.
1. install dependencies `npm i` or `npm install`
2. configuration of the creation of the different environments (**development**, **test**, **production**)
  ### **development**:
```
npm run migrationsdev:run
npm run migrationsdev:revert
npm run seedersdev:run
npm run seedersdev:revert
```
  ### **test**:
```
npm run migrationstest:run
npm run migrationstest:revert
npm run seederstest:run
npm run seederstest:revert
```
  ### **production**:
```
npm run migrations:run
npm run migrations:revert
npm run seeders:run
npm run seeders:revert
```
3. Start the application in the different environments
 - **test**: `npm t` or `npm test` runs all unit and integration tests
 - **development**:  `npm run dev` run the application on localhost
 - **production**: `npm run start` Executes the allocation in the production environment
 **Note**: Each environment has its own database, to connect you can find the application in the files with .env extension. I upload the files so you can see the credentials and connect. But they are also configured directly in [Railway](https://railway.app/ "Railway")

## Deployment information
  - **postman documentation**: https://documenter.getpostman.com/view/16232351/2s93kz5Qnz
  - **host_prod**: https://test-back-end-developer-production.up.railway.app
**Note**: Everything you run from the host_prod goes to the production database.