// UC2: Ability to ensure valid contacts are added
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

    // Validate Name (Starts with Capital, Min 3 chars)
    validateName(name, fieldName) {
        let nameRegex = /^[A-Z][a-zA-Z]{2,}$/;
        if (!nameRegex.test(name)) {
            throw new Error(`${fieldName} is invalid! Must start with a capital letter and have at least 3 characters.`);
        }
        return name;
    }

    // Validate Address, City, State (Min 4 chars)
    validateAddress(value, fieldName) {
        if (value.length < 4) {
            throw new Error(`${fieldName} is invalid! Must have at least 4 characters.`);
        }
        return value;
    }

    // Validate ZIP (5-digit numeric)
    validateZip(zip) {
        let zipRegex = /^\d{5}$/;
        if (!zipRegex.test(zip)) {
            throw new Error("Invalid ZIP code! Must be 5 digits.");
        }
        return zip;
    }

    // Validate Phone Number (10-digit numeric)
    validatePhoneNumber(phoneNumber) {
        let phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phoneNumber)) {
            throw new Error("Invalid phone number! Must be 10 digits.");
        }
        return phoneNumber;
    }

    // Validate Email
    validateEmail(email) {
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            throw new Error("Invalid email format!");
        }
        return email;
    }

    // Display Contact Info
    toString() {
        return `Name: ${this.firstName} ${this.lastName}, Address: ${this.address}, ${this.city}, ${this.state} - ${this.zip}, Phone: ${this.phoneNumber}, Email: ${this.email}`;
    }
}

// Example Usage
try {
    let contact1 = new Contact("Om", "Prakash", "456 Lane", "Delhi", "Delhi", "11001", "9876543210", "om.prakash@example.com");
    console.log(contact1.toString());

    let contact2 = new Contact("Deepansh", "Verma", "789 Market", "Mumbai", "Maharashtra", "40001", "9123456789", "deepansh.verma@example.com");
    console.log(contact2.toString());
} catch (error) {
    console.error(error.message);
}