import angular from 'angular';
import 'angular-ui-router';

import config from './config';

// Controllers
import HomeController from './controllers/home.controller';
import CommentsAddController from './controllers/comments-add.controller';

import PARSE from './constants/parse.constants.js';

import CommentService from './services/comment.service.js';

angular
  .module('app', ['ui.router'])
  .config(config)
  .constant('PARSE', PARSE)

  .controller('HomeController', HomeController)
  .controller('CommentsAddController', CommentsAddController)

  .service('CommentService', CommentService)


;
