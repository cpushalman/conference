import React from "react";

const Contact = () => {
  return (
    <section id="venue" className="bg-white py-16 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 -translate-x-40 -translate-y-40 bg-blue-100 rounded-full opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 translate-x-40 translate-y-40 bg-blue-200 rounded-full opacity-20"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-4 tracking-wide">Venue & Contact</h2>
          <div className="h-1.5 w-24 bg-orange-400 rounded-full mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 transform transition-transform duration-300 hover:scale-[1.02]">
            <h3 className="text-2xl font-bold text-blue-600 mb-5 flex items-center">
              Event Venue
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              PSG College of Technology, Avinashi Rd, Peelamedu, Coimbatore, Tamil Nadu 641004
            </p>
            <div className="w-full h-64 rounded-xl overflow-hidden">
              {/* This is where you paste the Google Maps embedded code */}
              <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15664.343822032339!2d77.00897324558663!3d11.03217767611908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8582f1435fa59%3A0x137d95bfd8909293!2sPSG%20College%20Of%20Technology!5e0!3m2!1sen!2sin!4v1757523747511!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="PSG College of Technology Map"
              ></iframe>
            </div>
          </div>
        
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 transform transition-transform duration-300 hover:scale-[1.02]">
            <h3 className="text-2xl font-bold text-blue-600 mb-5 flex items-center">
              Contact Us
            </h3>
            
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <h4 className="font-semibold text-gray-800 text-xl">Name1</h4>
                <a href="tel: no 1" className="text-blue-600 hover:underline transition-colors duration-200">No1</a>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <h4 className="font-semibold text-gray-800 text-xl">Name2</h4>
                <a href="tel: no 2" className="text-blue-600 hover:underline transition-colors duration-200">No2</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;