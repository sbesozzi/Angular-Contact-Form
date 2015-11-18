let CommentsAddController = function($state, $scope, CommentService) {
  
  let vm = this;

  vm.addComment = addComment;

  function addComment (obj) {
    CommentService.addComment(obj).then( (res) => {
      console.log(res);
      $state.go('root.home');
    });
  }

  // Validation for form fields
  let validateName = (name) => {
    console.log(name.length);
    if (name.length <= 1) {
      $scope.msgN = 'name must be filled out';
    } else {
      $scope.msgN = '';
    }
  };

  let validateEmail = (email) => {
    let emailSym = email.indexOf('@');
    if (emailSym <= 0) {
      $scope.msgE = 'email must include @';
    } else {
      $scope.msgE = '';
    }
  };

  let validateWebsite = (website) => {
    let val = website.indexOf('http://');
    let val2 = website.indexOf('https://');

    if ((val < 0) && (val2 < 0)) {
      $scope.msgW = 'web address must include http:// or https://';
    } else {
      $scope.msgW = '';
    }
  };

  let validateMessage = (message) => {
    if (message.length <= 0) {
      $scope.msgM = 'share your comments';
    } else {
      $scope.msgM = '';
    }
  };

  // Watch events
  $scope.$watch('comment.name', function(name) {
    validateName(name);
  });

  $scope.$watch('comment.email', function(email) {
    validateEmail(email);
  });

  $scope.$watch('comment.website', function(website) {
    validateWebsite(website);
  });

  $scope.$watch('comment.message', function(message) {
    validateMessage(message);
  });

};

CommentsAddController.$inject = ['$state', '$scope', 'CommentService'];

export default CommentsAddController;