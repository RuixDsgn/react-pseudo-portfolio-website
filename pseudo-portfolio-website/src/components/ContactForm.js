import React from 'react'

const ContactForm = () => {
  return (
    <footer>
          <div id="form-div">
              <form>
                <label htmlFor="fname">First Name: </label>
                <input type="text" placeholder="enter first name here"/><br /><br />
                <label htmlFor="lname">Last Name: </label>
                <input type="text" placeholder="enter last name here"/><br /><br />
                <label htmlFor="email" >Email: </label>
                <input type="text" placeholder="enter email here" /><br /><br />
                <input type="checkbox" />
                <label htmlFor="subscribe">  Subscribe to newsletter?</label><br /><br />
                <input type="submit" />
              </form>
          </div>
      </footer>
  )
}

export default ContactForm