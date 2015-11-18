let CommentsAddController = function($state, $scope, CommentService) {
  
  let vm = this;

  vm.addComment = addComment;

  function addComment (commentObj) {
    CommentService.addComment(commentObj).then( (res) => {
      console.log(res);
      $state.go('root.home');
    });
  }

  // Validation for form fields
  let validateName = (name) => {
    if (name.length <= 1) {
      $scope.msgN = 'Name must be filled out';
    } else {
      $scope.msgN = '';
    }
  };

  let validateEmail = (email) => {
    let emailSym = email.indexOf('@');
    if (emailSym <= 0) {
      $scope.msgE = 'Email must include @';
    } else {
      $scope.msgE = '';
    }
  };

  let validateWebsite = (website) => {
    let val = website.indexOf('http://');
    let val2 = website.indexOf('https://');

    if ((val < 0) && (val2 < 0)) {
      $scope.msgW = 'Address must include "http://" or "https://"';
    } else {
      $scope.msgW = '';
    }
  };

  let validateMessage = (message) => {
    if (message.length <= 0) {
      $scope.msgM = 'Share your comments';
    } else {
      $scope.msgM = '';
    }
  };

  // Watch events
  $scope.$watch('comment.name', function(name) {
    if (!name) return;
    validateName(name);
  });

  $scope.$watch('comment.email', function(email) {
    if (!email) return;
    validateEmail(email);
  });

  $scope.$watch('comment.website', function(website) {
    if (!website) return;
    validateWebsite(website);
  });

  $scope.$watch('comment.message', function(message) {
    if (!message) return;
    validateMessage(message);
  });

};

CommentsAddController.$inject = ['$state', '$scope', 'CommentService'];

export default CommentsAddController;