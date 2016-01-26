describe('Contact', function() {
  it('should create a contact object', function() {
    var testContact = new Contact("Paul", "Hess");
    expect(testContact.firstName).to.equal("Paul");
    expect(testContact.lastName).to.equal("Hess");
    expect(testContact.address).to.eql([]);
  });

  it('should return a full name', function() {
    var testContact = new Contact("Paul", "Hess");
    expect(testContact.fullName()).to.equal("Paul Hess");
  });
});

describe('Address', function() {
  it('should create an address object', function() {
    var testAddress = new Address("123 N Ave", "Portland", "OR");
    expect(testAddress.street).to.equal("123 N Ave");
    expect(testAddress.city).to.equal("Portland");
    expect(testAddress.state).to.equal("OR");
  });

  it('should return a full address', function() {
    var testAddress = new Address("123 N Ave", "Portland", "OR");
    expect(testAddress.fullAddress()).to.equal("123 N Ave, Portland, OR");
  });
});
