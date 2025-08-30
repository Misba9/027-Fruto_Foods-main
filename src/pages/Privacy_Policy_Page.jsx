import React from 'react'

function Privacy_Policy_Page() {
  return (
     <div className="max-w-5xl mx-auto px-6 py-10 text-gray-800 leading-relaxed">
      <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-6">Last updated: August 22, 2025</p>

      <p>
        This Privacy Policy describes Our policies and procedures on the
        collection, use and disclosure of Your information when You use the
        Service and tells You about Your privacy rights and how the law protects
        You.
      </p>
      <p className="mt-4">
        We use Your Personal data to provide and improve the Service. By using
        the Service, You agree to the collection and use of information in
        accordance with this Privacy Policy.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Interpretation and Definitions
      </h2>
      <h3 className="text-xl font-semibold mt-6 mb-2">Interpretation</h3>
      <p>
        The words of which the initial letter is capitalized have meanings
        defined under the following conditions. The following definitions shall
        have the same meaning regardless of whether they appear in singular or
        in plural.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Definitions</h3>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Account:</strong> a unique account created for You to access
          our Service or parts of our Service.
        </li>
        <li>
          <strong>Affiliate:</strong> an entity that controls, is controlled by
          or is under common control with a party.
        </li>
        <li>
          <strong>Company:</strong> (referred to as "the Company", "We", "Us" or
          "Our") refers to Fruto Foods.
        </li>
        <li>
          <strong>Cookies:</strong> small files placed on Your device containing
          details of browsing history.
        </li>
        <li>
          <strong>Country:</strong> refers to Telangana, India.
        </li>
        <li>
          <strong>Device:</strong> any device that can access the Service such
          as a computer, cellphone or tablet.
        </li>
        <li>
          <strong>Personal Data:</strong> any information that relates to an
          identified or identifiable individual.
        </li>
        <li>
          <strong>Service:</strong> refers to the Website.
        </li>
        <li>
          <strong>Service Provider:</strong> third-party companies or
          individuals employed to facilitate the Service.
        </li>
        <li>
          <strong>Usage Data:</strong> data collected automatically when using
          the Service.
        </li>
        <li>
          <strong>Website:</strong> refers to Fruto Foods, accessible from{" "}
          <a
            href="https://frutofoods.in/"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://frutofoods.in/
          </a>
        </li>
        <li>
          <strong>You:</strong> the individual accessing or using the Service.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Collecting and Using Your Personal Data
      </h2>
      <h3 className="text-xl font-semibold mt-6 mb-2">
        Types of Data Collected
      </h3>
      <p className="font-semibold mt-4">Personal Data</p>
      <p>
        While using Our Service, We may ask You to provide Us with certain
        personally identifiable information that can be used to contact or
        identify You. Personally identifiable information may include, but is
        not limited to:
      </p>
      <ul className="list-disc list-inside space-y-1 mt-2">
        <li>Email address</li>
        <li>First name and last name</li>
        <li>Phone number</li>
        <li>Address, State, Province, ZIP/Postal code, City</li>
        <li>Usage Data</li>
      </ul>

      {/* Continue adding sections in the same structure */}
      <h3 className="text-xl font-semibold mt-8 mb-2">Usage Data</h3>
      <p>
        Usage Data is collected automatically when using the Service and may
        include details such as IP address, browser type, browser version, pages
        visited, time and date of visit, and other diagnostic data.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Contact Us
      </h2>
      <p>If you have any questions about this Privacy Policy, You can contact us:</p>
      <ul className="list-disc list-inside space-y-1 mt-2">
        <li>By email: frutofoods@gmail.com</li>
        <li>
          By visiting this page on our website:{" "}
          <a
            href="https://frutofoods.in/"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://frutofoods.in/
          </a>
        </li>
        <li>By phone number: +91 75696 30192</li>
      </ul>
    </div>
  )
}

export default Privacy_Policy_Page