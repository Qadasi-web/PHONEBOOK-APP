let phoneNumber = '';
let contacts = [];

function appendNumber(number) {
    phoneNumber += number;
    document.getElementById('phone-number').value = phoneNumber;
}

function addContact() {
    const contactName = prompt('Enter contact name:');
    const contactPhoto = prompt('Enter contact photo URL (optional):');
    contacts.push({ name: contactName, phoneNumber: phoneNumber, photo: contactPhoto });
    phoneNumber = '';
    document.getElementById('phone-number').value = '';
    renderContactList();
}

function clearNumber() {
    phoneNumber = '';
    document.getElementById('phone-number').value = '';
}

function renderContactList() {
    const contactList = document.getElementById('contact-list');
    contactList.innerHTML = '';
    contacts.forEach((contact, index) => {
        const contactItem = document.createElement('li');
        contactItem.classList.add('contact-item');
        contactItem.innerHTML = `
            <img src="${contact.photo}" alt="${contact.name}">
            ${contact.name} - ${contact.phoneNumber}
            <button onclick="editContact(${index})">Edit</button>
            <button onclick="deleteContact(${index})">Delete</button>
        `;
        contactList.appendChild(contactItem);
    });
}

function editContact(index) {
    const newName = prompt('Enter new name:');
    const newPhoneNumber = prompt('Enter new phone number:');
    const newPhoto = prompt('Enter new photo URL (optional):');
    contacts[index].name = newName;
    contacts[index].phoneNumber = newPhoneNumber;
    contacts[index].photo = newPhoto;
    renderContactList();
}

function deleteContact(index) {
    contacts.splice(index, 1);
    renderContactList();
                   }
