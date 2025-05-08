// src/pages/Contact.jsx
import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 bg-primary text-white"
      >
        <div className="page-section">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Contact Us
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg"
            >
              Get in touch with our team. We'd love to hear from you!
            </motion.p>
          </div>
        </div>
      </motion.section>
      
      {/* Contact Information */}
      <section className="page-section">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <AnimatedSection animation="fade-in" delay={0.1} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-start">
              <svg className="w-10 h-10 text-accent mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <h3 className="text-lg font-bold text-primary mb-2">Visit Us</h3>
                <p className="text-gray-700">
                  123 Coffee Street<br />
                  Brewtown, BT 98765<br />
                  United States
                </p>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in" delay={0.2} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-start">
              <svg className="w-10 h-10 text-accent mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div>
                <h3 className="text-lg font-bold text-primary mb-2">Call Us</h3>
                <p className="text-gray-700">
                  General: (555) 123-4567<br />
                  Reservations: (555) 123-4568<br />
                  Catering: (555) 123-4569
                </p>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in" delay={0.3} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-start">
              <svg className="w-10 h-10 text-accent mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <h3 className="text-lg font-bold text-primary mb-2">Email Us</h3>
                <p className="text-gray-700">
                  General: info@cozycornercafe.com<br />
                  Reservations: reservations@cozycornercafe.com<br />
                  Careers: jobs@cozycornercafe.com
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <AnimatedSection animation="slide-right">
            <h2 className="text-3xl font-bold text-primary mb-6">Send Us a Message</h2>
            <p className="text-gray-600 mb-6">
              Have questions, feedback, or want to learn more about our cafe? Fill out the form below and we'll get back to you as soon as possible.
            </p>
            
            <ContactForm />
          </AnimatedSection>
          
          {/* Hours & Social Media */}
          <AnimatedSection animation="slide-left">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Hours of Operation</h3>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                    <span className="font-medium">Monday - Friday:</span>
                    <span>7:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                    <span className="font-medium">Saturday:</span>
                    <span>8:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Sunday:</span>
                    <span>8:00 AM - 9:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Connect With Us</h3>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-700 mb-4">
                  Follow us on social media for updates, special offers, and behind-the-scenes content!
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                  <a href="#" className="p-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                  <a href="#" className="p-3 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="p-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21.582 7.179a2.513 2.513 0 00-1.768-1.768C18.254 5 12 5 12 5s-6.254 0-7.814.411a2.515 2.515 0 00-1.768 1.768C2 8.746 2 12 2 12s0 3.254.418 4.821a2.517 2.517 0 001.768 1.768C5.746 19 12 19 12 19s6.254 0 7.814-.411a2.515 2.515 0 001.768-1.768C22 15.254 22 12 22 12s0-3.254-.418-4.821zM9.955 14.989V9.011L15.455 12l-5.5 2.989z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="mt-16">
        <div className="h-96 bg-gray-300 relative">
          {/* This would typically be a Google Maps or other map integration */}
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
            <div className="text-center">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-gray-600 text-lg">Map Integration Would Go Here</p>
              <p className="text-gray-500">123 Coffee Street, Brewtown, BT 98765</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="page-section">
        <AnimatedSection animation="slide-up" className="text-center mb-8">
          <h2 className="text-3xl font-bold text-primary mb-2">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our cafe and services
          </p>
        </AnimatedSection>
        
        <div className="max-w-3xl mx-auto space-y-4">
          <AnimatedSection animation="fade-in" delay={0.1} className="bg-white p-5 rounded-lg shadow-md">
            <h4 className="text-lg font-bold text-primary mb-2">Do you offer WiFi?</h4>
            <p className="text-gray-700">
              Yes, we offer free high-speed WiFi for all our customers. Just ask our staff for the password when you order.
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in" delay={0.2} className="bg-white p-5 rounded-lg shadow-md">
            <h4 className="text-lg font-bold text-primary mb-2">Is your cafe suitable for work or study?</h4>
            <p className="text-gray-700">
              Absolutely! We have plenty of tables with power outlets and a quiet atmosphere during weekdays, making it perfect for working or studying.
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in" delay={0.3} className="bg-white p-5 rounded-lg shadow-md">
            <h4 className="text-lg font-bold text-primary mb-2">Do you accommodate dietary restrictions?</h4>
            <p className="text-gray-700">
              Yes, we offer gluten-free, dairy-free, vegan, and other allergen-friendly options. Please inform our staff about any allergies or dietary restrictions.
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in" delay={0.4} className="bg-white p-5 rounded-lg shadow-md">
            <h4 className="text-lg font-bold text-primary mb-2">Can I host an event at your cafe?</h4>
            <p className="text-gray-700">
              Yes, we offer private event bookings outside of regular business hours. Please contact us at events@cozycornercafe.com for more information.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

export default Contact
