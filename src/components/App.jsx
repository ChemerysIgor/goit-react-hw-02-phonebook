import { Component } from "react";

import { nanoid } from 'nanoid';
import ContactForm from "./form/contactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import { GlobalStyles } from "./GlobalStyles";
import {Div} from './Div.styled'


export class App extends Component  {
 state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
 
};
  addContact = (contact) => {
    const inContact = this.state.contacts.some(item => {
      console.log(item)
      return item.name.toLowerCase() === contact.name.toLowerCase()
    })
    if (inContact) {
      alert(`${contact.name} is already in the list`)
    return this.state.contacts}

    contact.id = nanoid(5);
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, contact] }
    })
  }
 
   deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  }

     filteredContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
}
    
  render() {
   
    const filterData = (evt) => {
    this.setState({ filter: evt.target.value })
    }
    const contactsAfterFilter = this.filteredContacts()
    console.log(contactsAfterFilter)
    return (
      <>
        <GlobalStyles/>
        <Div>
         <h1>Phonebook</h1>
         <ContactForm addContact={ this.addContact} />
       
       
          <h2>Contacts</h2>
          <Filter filterData={filterData} />
         <ContactList contactArr={contactsAfterFilter} deleteContact={this.deleteContact} />
        </Div>
        </>
    )
  }
}
