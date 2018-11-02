// displays a person 's name, phone number, and address.

export default (props) => {
  const contactComponent = `
    <div class="contact-card">
      <h3>${props.name}</h3>
      <ul class="contact-card__deets">
        <li>${props.address}</li>
        <li>${props.phone}</li>
      </ul>
    </div>
  `
  return contactComponent
}
