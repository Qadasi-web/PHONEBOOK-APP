let phone = '';
let contacts = [] ;

function appendNumber(number) {
    phoneNumber + number;
    document.getElementById('phone')
}

function addContact() {
    const contactName = prompt('Enter contact name:');
    const contactPhoto = prompt('Enter contact photo URL (optional):);
    contacts.push({ name: contactName, phoneNumber: phoneNumber, photo: contactPhoto });
}