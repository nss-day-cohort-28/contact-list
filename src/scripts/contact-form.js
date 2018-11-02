// when form filled out and a submit button is pressed, adds a new contact to storage.It should
// import the ContactCollection component.

import API from "./contact-collection"

class Contact {
  constructor(props) {
    this.name = props.name
    this.address = props.address
    this.phone = props.phone
  }

  get contactInfo() {
    return {name: this.name, address: this.address, phone: this.phone}
  }

  save() {
    return API.saveContact(this.contactInfo)
  }
}

export default Contact
