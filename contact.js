// UC3: Ability to create an Address Book array and add new Contacts

class Contact {
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        this.firstName = this.validateName(firstName, "First Name");
        this.lastName = this.validateName(lastName, "Last Name");
        this.address = this.validateAddress(address, "Address");
        this.city = this.validateAddress(city, "City");
        this.state = this.validateAddress(state, "State");
        this.zip = this.validateZip(zip);
        this.phoneNumber = this.validatePhoneNumber(phoneNumber);
        this.email = this.validateEmail(email);
    }

    validateName(name, fieldName) {
        let nameRegex = /^[A-Z][a-zA-Z]{2,}$/;
        if (!nameRegex.test(name)) throw new Error(`${fieldName} is invalid! Must start with a capital letter and have at least 3 characters.`);
        return name;
    }

    validateAddress(value, fieldName) {
        if (value.length < 4) throw new Error(`${fieldName} is invalid! Must have at least 4 characters.`);
        return value;
    }

    validateZip(zip) {
        let zipRegex = /^\d{5}$/;
        if (!zipRegex.test(zip)) throw new Error("Invalid ZIP code! Must be 5 digits.");
        return zip;
    }

    validatePhoneNumber(phoneNumber) {
        let phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phoneNumber)) throw new Error("Invalid phone number! Must be 10 digits.");
        return phoneNumber;
    }

    validateEmail(email) {
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) throw new Error("Invalid email format!");
        return email;
    }

    toString() {
        return `Name: ${this.firstName} ${this.lastName}, Address: ${this.address}, ${this.city}, ${this.state} - ${this.zip}, Phone: ${this.phoneNumber}, Email: ${this.email}`;
    }
}

// Address Book Class
class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        this.contacts.push(contact);
        console.log("Contact added successfully!");
    }

    displayContacts() {
        if (this.contacts.length === 0) {
            console.log("Address Book is empty.");
        } else {
            console.log("Address Book:");
            this.contacts.forEach(contact => console.log(contact.toString()));
        }
    }
}

// Example Usage
try {
    let addressBook = new AddressBook();

    let contact1 = new Contact("Om", "Prakash", "456 Lane", "Delhi", "Delhi", "11001", "9876543210", "om.prakash@example.com");
    let contact2 = new Contact("Deepansh", "Verma", "789 Market", "Mumbai", "Maharashtra", "40001", "9123456789", "deepansh.verma@example.com");

    addressBook.addContact(contact1);
    addressBook.addContact(contact2);

    addressBook.displayContacts();
} catch (error) {
    console.error(error.message);
}