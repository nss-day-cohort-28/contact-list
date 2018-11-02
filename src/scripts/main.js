import Contact from "./contact-form"
// import ContactList from "./contact-list"

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
    $("#form-message").text(`New contact, ${data.name}, saved`).fadeIn("slow").delay(1000).fadeOut("slow")
  })

})
