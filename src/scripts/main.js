import Contact from "./contact-form"
import getContacts from "./contact-list"
import render from "./render"

// Fetch all the current contacts from the db on page load
getContacts()
.then(contactList => render("contact-list", contactList))

// Add a new contact when form is submitted
$("#contact-save").click(() => {
  const contact = new Contact({
    name: $("#input--name").val(),
    address: $("#input--address").val(),
    phone: $("#input--phone").val()
  })

  console.log(contact)

  contact.save()
  .then( (data) => {
    console.log("new contact saved", data)
    $("#form-message").text(`New contact, ${data.name}, saved`).fadeIn("slow").delay(1500).fadeOut("slow")
    return getContacts()
  })
  .then(contactList => render("contact-list", contactList))
})
