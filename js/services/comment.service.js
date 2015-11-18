let CommentService = function($http, PARSE) {
  
  let url = PARSE.URL + 'classes/comments';

  // Bind private funciton
  this.getComments = getComments;
  this.addComment = addComment;

  function Comment (commentObj) {
    this.name = commentObj.name;
    this.email = commentObj.email;
    this.website = commentObj.website;
    this.message = commentObj.message;
  }

  function getComments () {
    return $http.get(url, PARSE.CONFIG);
  }

  function addComment (commentObj) {
    let c = new Comment(commentObj);
    return $http.post(url, c, PARSE.CONFIG);
  }

};

CommentService.$inject = ['$http','PARSE'];

export default CommentService;