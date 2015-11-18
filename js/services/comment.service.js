let CommentService = function($http, PARSE) {
  
  let url = PARSE.URL + 'classes/comments';

  // Bind private funciton
  this.getComments = getComments;
  this.addComment = addComment;

  let Comment = function (obj) {
    this.name = obj.name;
    this.email = obj.email;
    this.website = obj.website;
    this.message = obj.message;
  };

  function getComments () {
    return $http.get(url, PARSE.CONFIG);
  }

  function  addComment (obj) {
    let c = new Comment(obj);
    return $http.post(url, c, PARSE.CONFIG);
  }

};

CommentService.$inject = ['$http','PARSE'];

export default CommentService;