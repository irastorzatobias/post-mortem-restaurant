import {createParragraph} from './home.js';

function createContact(phone, location, img){
    const contact = document.createElement('div');
    contact.classList.add('contact');
    const locationEl = createParragraph(location);
    const phoneEl = createParragraph(phone);
    const imgEl = document.createElement('img');
    const mock = createParragraph('This is just a mockup for the contact page. Made it for fun.');
    imgEl.src = img;
    contact.appendChild(imgEl);
    contact.appendChild(locationEl);
    contact.appendChild(phoneEl);
    contact.appendChild(mock);
    return contact;
}

export {createContact};