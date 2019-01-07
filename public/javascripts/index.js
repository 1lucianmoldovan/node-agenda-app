function loadContacts(contacts) {
    var resultTable = document.querySelector('tbody');

    $.ajax('../contacts.json').done(function (contacts) {

        var contacts = contacts.map(function (contact) {
            return `<tr>
            <td>${contact.FirstName}</td> 
            <td>${contact.LastName}</td> 
            <td>${contact.PhoneNumber}</td>
            <td><a href="contacts/delete?phone=${contact.PhoneNumber}">x</a></td> 
            </tr>`
        })

        resultTable.innerHTML = contacts.join("");
    })
}

loadContacts();
