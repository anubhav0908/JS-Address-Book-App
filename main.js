// UC1: Ability to create a Contact in Address Book
class Contact {
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    toString() {
        return `Name: ${this.firstName} ${this.lastName}, Address: ${this.address}, ${this.city}, ${this.state} - ${this.zip}, Phone: ${this.phoneNumber}, Email: ${this.email}`;
    }
}

// Example Usage
let contact1 = new Contact("Om", "Prakash", "456 Street Lane", "Delhi", "Delhi", "110001", "9876543210", "om.prakash@example.com");
let contact2 = new Contact("Deepansh", "Verma", "789 Market Road", "Mumbai", "Maharashtra", "400001", "9123456789", "deepansh.verma@example.com");

// Display Contacts
console.log(contact1.toString());
console.log(contact2.toString());