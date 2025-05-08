// src/pages/Order.jsx
import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import OrderForm from '../components/OrderForm'

const Order = () => {
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
              Order Online
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg"
            >
              Skip the line and order ahead for pickup or delivery
            </motion.p>
          </div>
        </div>
      </motion.section>
      
      {/* Order Form */}
      <section className="page-section">
        <AnimatedSection animation="slide-up" className="mb-8">
          <h2 className="text-3xl font-bold text-primary mb-2">Place Your Order</h2>
          <p className="text-gray-600">
            Browse our menu and customize your order. Available for pickup or delivery within 5 miles.
          </p>
        </AnimatedSection>
        
        <AnimatedSection animation="fade-in" delay={0.2}>
          <OrderForm />
        </AnimatedSection>
      </section>
      
      {/* Delivery Information */}
      <section className="bg-amber-100 py-10">
        <div className="page-section">
          <AnimatedSection animation="slide-up" className="text-center mb-8">
            <h3 className="text-2xl font-bold text-primary mb-2">Delivery Information</h3>
            <p className="text-gray-700 max-w-3xl mx-auto">
              We offer delivery service to locations within a 5-mile radius of our cafe.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatedSection animation="fade-in" delay={0.1} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <svg className="w-10 h-10 text-accent mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="text-lg font-bold text-primary mb-2">Delivery Times</h4>
                  <p className="text-gray-700">
                    Monday - Friday: 8:00 AM - 7:00 PM<br />
                    Saturday - Sunday: 9:00 AM - 8:00 PM
                  </p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in" delay={0.2} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <svg className="w-10 h-10 text-accent mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <h4 className="text-lg font-bold text-primary mb-2">Delivery Zone</h4>
                  <p className="text-gray-700">
                    We deliver within a 5-mile radius of our cafe location. Delivery times may vary based on distance and traffic.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in" delay={0.3} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <svg className="w-10 h-10 text-accent mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                <div>
                  <h4 className="text-lg font-bold text-primary mb-2">Payment</h4>
                  <p className="text-gray-700">
                    For delivery and pickup orders, payment is made in person at the time of delivery or pickup.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="page-section">
        <AnimatedSection animation="slide-up" className="text-center mb-8">
          <h3 className="text-2xl font-bold text-primary mb-2">Frequently Asked Questions</h3>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Find answers to common questions about our online ordering service
          </p>
        </AnimatedSection>
        
        <div className="max-w-3xl mx-auto space-y-4">
          <AnimatedSection animation="fade-in" delay={0.1} className="bg-white p-5 rounded-lg shadow-md">
            <h4 className="text-lg font-bold text-primary mb-2">How far in advance can I place an order?</h4>
            <p className="text-gray-700">
              You can place an order up to 3 days in advance. For same-day orders, please allow at least 30 minutes for preparation.
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in" delay={0.2} className="bg-white p-5 rounded-lg shadow-md">
            <h4 className="text-lg font-bold text-primary mb-2">Can I modify my order after it's been placed?</h4>
            <p className="text-gray-700">
              For modifications, please call us at (555) 123-4567 as soon as possible. We'll do our best to accommodate changes if your order hasn't been prepared yet.
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in" delay={0.3} className="bg-white p-5 rounded-lg shadow-md">
            <h4 className="text-lg font-bold text-primary mb-2">Is there a minimum order amount for delivery?</h4>
            <p className="text-gray-700">
              Yes, there is a $15 minimum order amount for delivery service.
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in" delay={0.4} className="bg-white p-5 rounded-lg shadow-md">
            <h4 className="text-lg font-bold text-primary mb-2">Do you offer catering services?</h4>
            <p className="text-gray-700">
              Yes, we offer catering for events of all sizes. Please contact us at catering@cozycornercafe.com for more information and to discuss your specific needs.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

export default Order
