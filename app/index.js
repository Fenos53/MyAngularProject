import 'bootstrap/dist/css/bootstrap.css';
import angular from 'angular';
import routing from './config';
import uirouter from 'angular-ui-router';

const ngModule = angular.module('app',[
    uirouter
    ])
    .config(routing);