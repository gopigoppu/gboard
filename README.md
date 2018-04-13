# Gboard

Its an application that allows users to create their personal board with cards and it uses express with angular 5 in single webpack bundler.

You can fork and use it if you wanted.

## Technologies used

Backend - Express.js

DB Connectivity - MLAP

Frontend - Angular 5


### Application is splitted as two parts. 

    ==> #1.Client(Angular app)
    ==> #2.Server(Express app)

## How to run setup

### #1 Clone/Fork this repository.

### #2 Run 
    npm install

### #3 For Backend run 
    nodemon src/server/index.js

You can  access application in 3000 port. E.g [http://localhost:3000](http://localhost:3000)

`index.js` is your express root file. So, you can start working in this file.

### #4 For Frontend run 
    ng serve

You can  access application in 4200 port. E.g [http://localhost:4200](http://localhost:4200)


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
