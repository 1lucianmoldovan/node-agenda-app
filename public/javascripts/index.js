var phoneToEdit = '';

function loadContacts(contacts) {
    var resultTable = document.querySelector('tbody');

    $.ajax('../contacts').done(function (contacts) {
        console.info('contacts loaded', contacts);
        window.globalContacts = contacts;
        displayContacts(contacts);
    });
}

function saveContact() {
    var firstName = document.querySelector('input[name=firstName]').value;
    var lastName = $('input[name=lastName]').val();
    var phone = $('input[name=phone').val();
    console.debug('saveContact...', firstName, lastName, phone);

    var actionUrl = phoneToEdit ? 'contacts/update?id=' + phoneToEdit : 'contacts/create';

    // var actionUrl = '';
    // acesta este un if inline, similar to if (phoneToEdit) actionUrl = 'contacts/update' } else {actionUrl = 'contacts/create'}

    $.post(actionUrl, {
        firstName, // shortcut from ES6 (key is the same as value variable name)
        lastName,
        phone: phone // ES5 (key = value)
    }).done(function (response) {
        console.warn('done create contact', response);
        phoneToEdit = '';
        if (response.success) {
            loadContacts();
        }
    });
}

function displayContacts(contacts) {
    var contacts = contacts.map(function (contact) {
        return `<tr>
            <td>${contact.firstName}</td> 
            <td>${contact.lastName}</td> 
            <td>${contact.phone}</td>
            <td>
                <a href="/contacts/delete?id=${contact.id}">&#10006</a>
                <a href="#" class="edit" data-id="${contact.id}">&#9998</a>
            </td> 
            </tr>`
    });

    // console.warn('contacts', contacts);
    // rows.push(getNewRow()); // simplified
    // var actions = getNewRow();
    // contacts.push(actions);

    document.querySelector('tbody').innerHTML = contacts.join('');
}

function initEvents() {
    $("tbody").delegate("a.edit", "click", function () {
        phoneToEdit = this.getAttribute('data-id');
        var contact = globalContacts.find(function (contact) {
            return contact.id == phoneToEdit;
        });

        searchAll = this.getAttribute('data-id');

        console.log('edit', phoneToEdit, contact);
        document.querySelector('input[name=firstName]').value = contact.firstName;
        $('input[name=lastName]').val(contact.lastName);
        $('input[name=phone]').val(contact.phone);
    });

    document.getElementById('search').addEventListener('input', doSearch);

}

// - start app


function doSearch(ev) {
    var value = this.value;


    var filteredContacts = globalContacts.filter(function (contact) {
        console.log(contact.firstName, value)
        return contact.firstName.toLowerCase().includes(value) ||
            contact.lastName.toLowerCase().includes(value) ||
            contact.phone.toLowerCase().includes(value);
    });

    // sintaxa identica si la map, si la filter si la for.. etc. ↑

    // var filteredContacts = [];
    // filteredContacts.push(globalContacts[0]); - linie ca exemplu, practic reda din global contacts, contactul de pe prima pozitie

    displayContacts(filteredContacts);
}

loadContacts();
initEvents();
// searchAll();