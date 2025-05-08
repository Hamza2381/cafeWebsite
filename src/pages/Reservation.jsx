// src/pages/Reservation.jsx
import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import ReservationForm from '../components/ReservationForm'

const Reservation = () => {
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
              Reserve Your Table
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg"
            >
              Secure your spot at Cozy Corner Cafe for a delightful dining experience
            </motion.p>
          </div>
        </div>
      </motion.section>
      
      {/* Reservation Form */}
      <section className="page-section">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <AnimatedSection animation="slide-up" className="mb-8">
              <h2 className="text-3xl font-bold text-primary mb-2">Make a Reservation</h2>
              <p className="text-gray-600">
                Please fill out the form below to reserve your table. We'll confirm your reservation via email or phone.
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in" delay={0.2}>
              <ReservationForm />
            </AnimatedSection>
          </div>
          
          <div>
            <AnimatedSection animation="slide-left" className="bg-amber-100 p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-bold text-primary mb-4">Hours of Operation</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="font-medium">Monday - Friday:</span>
                  <span>7:00 AM - 8:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Saturday:</span>
                  <span>8:00 AM - 9:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Sunday:</span>
                  <span>8:00 AM - 9:00 PM</span>
                </li>
              </ul>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-left" delay={0.2} className="bg-amber-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary mb-4">Reservation Policy</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Reservations should be made at least 2 hours in advance.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>We hold reservations for 15 minutes past the reserved time.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>For parties of 8 or more, please call us directly at (555) 123-4567.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Cancellations should be made at least 2 hours before your reservation time.</span>
                </li>
              </ul>
              
              <div className="mt-6 pt-6 border-t border-amber-200">
                <p className="font-medium text-primary">Need assistance?</p>
                <p className="text-gray-700">
                  Call us at (555) 123-4567 or email 
                  <a href="mailto:reservations@cozycornercafe.com" className="text-accent hover:underline"> reservations@cozycornercafe.com</a>
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Private Events */}
      <section className="bg-primary text-white py-16">
        <div className="page-section">
          <AnimatedSection animation="slide-up" className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Private Events</h2>
            <p className="max-w-3xl mx-auto">
              Looking to host a special celebration or business meeting? We offer private and semi-private dining options.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection animation="fade-in" delay={0.1} className="bg-white text-gray-800 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="Private room"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">Private Room</h3>
                <p className="text-gray-600 mb-4">
                  Our private dining room can accommodate up to 20 guests and features its own dedicated staff.
                </p>
                <p className="font-medium text-accent">Perfect for: Corporate meetings, intimate celebrations</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in" delay={0.2} className="bg-white text-gray-800 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1485686531765-ba63b07845a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="Semi-private area"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">Semi-Private Area</h3>
                <p className="text-gray-600 mb-4">
                  Our curtained lounge space offers a semi-private experience for groups of 8-12 guests.
                </p>
                <p className="font-medium text-accent">Perfect for: Casual gatherings, small celebrations</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in" delay={0.3} className="bg-white text-gray-800 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="Full café buyout"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">Full Café Buyout</h3>
                <p className="text-gray-600 mb-4">
                  Reserve our entire space for your exclusive event, accommodating up to 50 guests.
                </p>
                <p className="font-medium text-accent">Perfect for: Wedding receptions, large celebrations</p>
              </div>
            </AnimatedSection>
          </div>
          
          <AnimatedSection animation="fade-in" delay={0.4} className="mt-10 text-center">
            <a href="mailto:events@cozycornercafe.com" className="btn btn-secondary">
              Inquire About Private Events
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

export default Reservation
