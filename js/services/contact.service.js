let ContactService = function($http, PARSE) {
  
  let url = PARSE.URL + 'classes/contact';

  // Bind private funciton
  this.getAllContacts = getAllContacts;
  this.addContact = addContact;

  function Contact (obj) {
    this.name = obj.name;
    this.email = obj.email;
    this.website = obj.website;
    this.message = obj.message;
  }

  function getAllContacts () {
    return $http.get(url, PARSE.CONFIG);
  }

  function  addContact (obj) {
    let c = new Contact(obj);
    return $http.post(url, c, PARSE.CONFIG);
  }

};

ContactService.$inject = ['$http','PARSE'];

export default ContactService;