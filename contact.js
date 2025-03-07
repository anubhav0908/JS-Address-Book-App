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
        if (!nameRegex.test(name)) 
            throw new Error(`${fieldName} is invalid! Must start with a capital letter and have at least 3 alphabetic characters.`);
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
        if (this.contacts.some(c => c.firstName === contact.firstName && c.lastName === contact.lastName)) {
            console.log("Duplicate contact! This person already exists in the Address Book.");
            return;
        }
        this.contacts.push(contact);
        console.log("Contact added successfully!");
    }

    findContact(firstName, lastName) {
        return this.contacts.find(contact => contact.firstName === firstName && contact.lastName === lastName);
    }

    editContact(firstName, lastName, newDetails) {
        let contact = this.findContact(firstName, lastName);
        if (contact) {
            Object.assign(contact, newDetails);
            console.log("Contact updated successfully!");
        } else {
            console.log("Contact not found!");
        }
    }

    deleteContact(firstName, lastName) {
        let initialCount = this.contacts.length;
        this.contacts = this.contacts.filter(contact => !(contact.firstName === firstName && contact.lastName === lastName));
        if (this.contacts.length < initialCount) {
            console.log("Contact deleted successfully!");
        } else {
            console.log("Contact not found!");
        }
    }

    getContactCount() {
        return this.contacts.reduce(count => count + 1, 0);
    }

    getCountByCityOrState() {
        let cityCount = this.contacts.reduce((acc, contact) => {
            acc[contact.city] = (acc[contact.city] || 0) + 1;
            return acc;
        }, {});

        let stateCount = this.contacts.reduce((acc, contact) => {
            acc[contact.state] = (acc[contact.state] || 0) + 1;
            return acc;
        }, {});

        return { cityCount, stateCount };
    }

    displayContacts() {
        if (this.contacts.length === 0) {
            console.log("Address Book is empty.");
        } else {
            console.log(`Address Book (Total Contacts: ${this.getContactCount()}):`);
            this.contacts.forEach(contact => console.log(contact.toString()));
        }
    }

    viewPersonsByCity(city) {
        return this.contacts.filter(contact => contact.city === city).map(contact => contact.toString());
    }

    viewPersonsByState(state) {
        return this.contacts.filter(contact => contact.state === state).map(contact => contact.toString());
    }

    searchPersonByCityOrState(name, location) {
        return this.contacts.filter(contact => 
            (contact.firstName === name || contact.lastName === name) && 
            (contact.city === location || contact.state === location)
        ).map(contact => contact.toString());
    }

    sortContactsByName() {
        this.contacts.sort((a, b) => (a.firstName + a.lastName).localeCompare(b.firstName + b.lastName));
        console.log("Contacts sorted alphabetically by name.");
    }

    sortContactsByCityStateZip() {
        this.contacts.sort((a, b) => {
            if (a.city !== b.city) return a.city.localeCompare(b.city);
            if (a.state !== b.state) return a.state.localeCompare(b.state);
            return a.zip.localeCompare(b.zip);
        });
        console.log("Contacts sorted by City, State, and Zip.");
    }
}

// Example Usage
try {
    let addressBook = new AddressBook();

    let contact1 = new Contact("OmK", "Prakash", "456 Lane", "Delhi", "Delhi", "11001", "9876543210", "om.prakash@example.com");
    let contact2 = new Contact("Deepansh", "Verma", "789 Market", "Mumbai", "Maharashtra", "40001", "9123456789", "deepansh.verma@example.com");

    addressBook.addContact(contact1);
    addressBook.addContact(contact2);

    console.log("\nAddress Book:");
    addressBook.displayContacts();

    console.log("\nSorting contacts by City, State, and Zip:");
    addressBook.sortContactsByCityStateZip();
    addressBook.displayContacts();
} catch (error) {
    console.error(error.message);
}
