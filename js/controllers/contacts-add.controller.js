let ContactsAddController = function(ContactService) {
  
  let vm = this;

  vm.addContact = addContact;

  function addContact (obj) {
    ContactService.addContact(obj).then( (res) => {
      console.log(res);
      $state.go('/');
    });
  }

};

ContactsAddController.$inject = ['ContactService'];

export default ContactsAddController;