import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './home.routes';
import userInput from './directives/user_input'; //directives
import userToDo from './directives/user_toDo';
import allToDo from './directives/all_toDo';
import TabController from './tab.controller';
import 'firebase';
import angularFire from 'angularfire';
import ToDoService from './toDo.service';

export default angular.module('app.home',[uirouter,angularFire])
    .config(routing)
    .controller('TabController',TabController)
    .directive('userInput', userInput)
    .directive('userToDo', userToDo)
    .directive('allToDo', allToDo)
    .service('ToDoService', ToDoService)
    .name;