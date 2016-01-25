function Contact(firstName, lastName, street, city, state) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.street = street;
  this.city = city;
  this.state = state;
  this.address = [street, city, state];
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

$(document).ready(function() {
  $('form#contact').submit(function(event) {
    event.preventDefault();
    var firstNameInput = $('input#firstName').val();
    var lastNameInput = $('input#lastName').val();
    var streetInput = $('input#street').val();
    var cityInput = $('input#city').val();
    var stateInput = $('input#state').val();

    var newContact = new Contact(firstNameInput, lastNameInput, streetInput, cityInput, stateInput);

    $("ul#nameList").append("<li class='firstList'>" + newContact.fullName() + "</li>");

    $('li.firstList').last().click(function() {
      $('div.contactLastHidden').show();
      $('li#nameOutput').text(newContact.fullName());
      $('li#streetOutput').text(newContact.street);
      $('li#cityOutput').text(newContact.city);
      $('li#stateOutput').text(newContact.state);
    });
  });


});
