import React from 'react'
import logo_large from '../assets/images/logo_large.png';
import { useState } from 'react';

function ContactPage() {
  const initialFormData = {
    name: '',
    email: '',
    mobile: '',
    subject: '',
    message: ''
  };
  const [formData, setFormData] = useState(initialFormData);
  const [EmailSuccess, setEmailSuccess] = useState(undefined);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const OnSubmit = async (event) => {
    event.preventDefault()
     const submissionData = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      mobile: formData.mobile,
      subject_from_field: formData.subject,
      subject: `New Contact Form Submission from ${formData.name}`,
      from_name: "Fruto Foods",
      replyto: formData.email,
      access_key: "ca307d10-b986-47a0-ae6d-eda368de80fa"
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(submissionData)
      });

      const data = await response.json();

      if (data.success) {
        // setResult("Form Submitted Successfully!");
        setEmailSuccess(true);
        event.target.reset();
        setFormData(initialFormData);
      } else {
        console.log("Error from Web3Forms:", data);
        // setResult(data.message);
        setEmailSuccess(false);
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setEmailSuccess(false);
    }
  };

  return (
    <div className=' md:m-12 m-8 '>
      <div>
        <h2 className='text-4xl md:text-7xl'><span className='border-b-3 border-[#c33E2F]'>Fruto Foo</span>ds</h2>
        <p className='mt-2 md:ml-64 ml-20 text-xltext-gray-600 md:text-2xl'> ~Natures goodness in every spoon</p>
      </div>
      <div className='flex flex-col md:flex-row justify-center items-center gap-2'>
        <h3 className='text-xl md:text-3xl mt-10 text-gray-800 mb-6 leading-none md:leading-snug'>“We are committed to providing authentic, high-quality food products and ingredients, ensuring excellent packaging, timely delivery, and efficient after-sales service to achieve the highest level of customer satisfaction worldwide.”</h3>
        <img src={logo_large} alt="Fruto Foods Logo" className="mb-4 w-60 h-60 md:w-100 md:h-100 md:mr-10" />
      </div>
      <div>
        <h2 className='text-3xl md:text-5xl mt-8 md:mt-12 leading-none '><span className='text-[#c33E2F]'>❖</span><span className='border-b-3 border-[#c33E2F] ml-1'>Contact</span> Us</h2>
        <p className='mt-4 ml-4 text-lg md:text-3xl md:mt-8 text-gray-800 leading-none md:leading-snug'>“We’re always happy to hear from you! Whether you have questions, feedback, or business inquiries, our team at Fruto Foods is here to help. Reach out to us and we’ll get back to you at the earliest.”</p>
      </div>
      <div className='mt-8 md:mt-15 flex justify-center'>
        <h2 className='text-2xl md:text-4xl'><span className='text-[#c33E2F]'>❖</span>Con<span className='border-b-3 border-[#c33E2F]'>nnect with Fruto Foods</span></h2>
      </div>
      <div className=' md:mt-12 md:w-1/2 md:mx-auto'>
        <form onSubmit={OnSubmit}>
          <div className='flex flex-col md:flex-col gap-3'>
            <div className='md:flex md:flex-row gap-3 justify-around'>
              <div className="mb-4 ">
                <label htmlFor="name" className="block text-lg font-medium md:text-2xl text-gray-700 mb-2">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border md:text-2xl border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c33E2F]" placeholder="Your Name" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-lg md:text-2xl font-medium text-gray-700 mb-2">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full md:text-2xl px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c33E2F]" placeholder="Your Email" />
              </div>
            </div>
            <div className='md:flex md:flex-row md:text-2xl gap-3 justify-around'>
              <div className="mb-4">
                <label htmlFor="mobile"  className="block text-lg font-medium text-gray-700 md:text-2xl mb-2">Mobile</label>
                <input type="number" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c33E2F]" placeholder="Your Mobile Number" />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-lg md:text-2xl font-medium text-gray-700 mb-2">Subject</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c33E2F]" placeholder="Your Subject" />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-lg md:text-2xl font-medium text-gray-700 mb-2">Message</label>
              <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} className="w-full px-4 py-2 border md:text-2xl border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c33E2F]" placeholder="Your Message"></textarea>
            </div>
            <div className='justify-center flex'>
              <input type="submit" className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-[#a32b24] transition-colors duration-300" value="Submit" />
            </div>
          </div>
        </form>
        <div className='mt-4 flex justify-center'>
        {EmailSuccess === true && <p className='text-green-600'>Thank you for your message, we’ll connect soon 😊</p>}
        {EmailSuccess === false && <p className='text-red-600'>Your submission failed because of an error. Please try again. 😌</p>}
        </div>
      </div>

    </div>
  )
}

export default ContactPage