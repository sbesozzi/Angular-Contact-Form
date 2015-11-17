import angular from 'angular';
import 'angular-ui-router';

import config from './config';

// Controllers
import HomeController from './controllers/home.controller';
import ContactsAddController from './controllers/contacts-add.controller';

import PARSE from './constants/parse.constants.js';

import ContactService from './services/contact.service.js';

angular
  .module('app', ['ui.router'])
  .config(config)
  .constant('PARSE', PARSE)

  .controller('HomeController', HomeController)
  .controller('ContactsAddController', ContactsAddController)

  .service('ContactService', ContactService)


;
