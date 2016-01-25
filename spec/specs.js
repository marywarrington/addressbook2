describe('Contact', function() {
  it('should create a contact object', function() {
    var testContact = new Contact("Paul", "Hess", "1234 first ave.", "portland", "OR");
    expect(testContact.firstName).to.equal("Paul");
    expect(testContact.lastName).to.equal("Hess");
    expect(testContact.address).to.eql(["1234 first ave.", "portland", "OR"]);
  });

  it('should return a full name', function() {
    var testContact = new Contact("Paul", "Hess");
    expect(testContact.fullName()).to.equal("Paul Hess");
  });

  it('should return the street address', function() {
    var testContact = new Contact("Paul", "Hess", "1234 first ave.", "portland", "OR");
    expect(testContact.address).to.eql(['1234 first ave.', 'portland','OR']);
  });
});
