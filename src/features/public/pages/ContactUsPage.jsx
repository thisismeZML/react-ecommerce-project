import React from 'react';

const ContactUsPage = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold text-center mb-8">Contact Us</h1>
      <div className="lg:flex lg:gap-16">
        {/* Left Section: Contact Information */}
        <div className="lg:w-1/3 mb-8 lg:mb-0">
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-lg mb-6">
            Feel free to reach out if you have any questions, suggestions, or concerns.
          </p>
          <ul className="space-y-4">
            <li>
              <strong>Email: </strong>
              <span>thatismetheoneudunknow@gmail.com</span>
            </li>
            <li>
              <strong>Phone: </strong>
              <span>(959) 784-063-395</span>
            </li>
            <li>
              <strong>Location: </strong>
              <span>Building (D), Room (28), Kyaik Waing Pagoda Road, Mayangone, Yangon</span>
            </li>
          </ul>
        </div>

        {/* Right Section: Google Map */}
        <div className="lg:w-2/3">
          <h2 className="text-xl font-semibold mb-4">Our Location</h2>
          {/* Google Maps Embed (Replace with your location) */}
          <div className="w-full h-80">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.7059069152388!2d96.17095122576202!3d16.84093970072937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c193006ad1b6ab%3A0xbdd73610c712c4db!2s8mile!5e0!3m2!1sen!2smm!4v1735723333698!5m2!1sen!2smm"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="mt-16">
        <h2 className="text-xl font-semibold text-center mb-4">Send Us a Message</h2>
        <form className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <label className="block text-lg font-medium">Name</label>
              <input
                type="text"
                className="mt-2 w-full p-4 border border-gray-300 rounded-md"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium">Email</label>
              <input
                type="email"
                className="mt-2 w-full p-4 border border-gray-300 rounded-md"
                placeholder="Your Email"
                required
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-lg font-medium">Message</label>
            <textarea
              rows="5"
              className="mt-2 w-full p-4 border border-gray-300 rounded-md"
              placeholder="Your Message"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-6 w-full py-3 px-6 text-white bg-primary hover:bg-pink-600 rounded-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUsPage;