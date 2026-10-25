import React from 'react'
import { useParams } from 'react-router-dom'

const ContactDetails = () => {
    const params = useParams();
    console.log(params);
  return (
    <div>
        <h1>Contact Details</h1>
        <p>Here are our contact details:</p>
        <ul>
            <li>Email: info@company.com</li>
            <li>Phone: +1 234 567 890</li>
            <li>Address: 123 Main Street, City, Country</li>
        </ul>
    </div>
  )
}

export default ContactDetails