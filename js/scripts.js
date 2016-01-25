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
