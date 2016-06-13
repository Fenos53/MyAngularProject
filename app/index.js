import 'bootstrap/dist/css/bootstrap.css';
import angular from 'angular';
import routing from './config';
import uirouter from 'angular-ui-router';
import home from './features/directives'; 

const ngModule = angular.module('app',[
    uirouter,
    home
    ])
    .config(routing);