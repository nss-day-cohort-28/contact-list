// loads existing contacts from storage, and saves new ones.Each new contact should have an auto - generated identifier.

export default {
  getContacts() {
    fetch("http://localhost:8088/contacts/")
      .then((contactDataJson) => contactDataJson.json()) //convert json to js
      .then((contactData) => contactData)
  },

  saveContact(contact) {
    return fetch("http://localhost:8088/contacts/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(contact)
    })
    .then((data) => data.json())
    .then( data => data)
    .catch( error => `Oops! ${error.message}`)
  }
}
