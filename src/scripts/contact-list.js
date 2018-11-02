// displays all contacts.It should
// import the Contact component and the ContactCollection component.
import contactComponent from "./contact"
import API from "./contact-collection"

export default () => {
  return API.getContacts()
  .then( (contacts) => contacts.map( contact => contactComponent(contact)))
}
