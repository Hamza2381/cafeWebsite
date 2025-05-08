// src/pages/About.jsx
import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'

const About = () => {
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
              Our Story
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg"
            >
              Discover the passion and dedication behind Cozy Corner Cafe
            </motion.p>
          </div>
        </div>
      </motion.section>
      
      {/* Our Journey */}
      <section className="page-section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="slide-right">
            <img 
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Our cafe's beginning" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </AnimatedSection>
          
          <AnimatedSection animation="slide-left">
            <h2 className="text-3xl font-bold text-primary mb-6">How It All Started</h2>
            <p className="mb-4 text-gray-700">
              Cozy Corner Cafe began in 2010 with a simple dream: to create a space that feels like a second home while serving exceptional coffee and food.
            </p>
            <p className="mb-4 text-gray-700">
              Founded by David and Emma Wilson, coffee enthusiasts who traveled the world exploring coffee cultures, our cafe combines international influences with local charm.
            </p>
            <p className="text-gray-700">
              What started as a small corner shop has grown into a beloved local institution, but our core values remain the same: quality, community, and comfort.
            </p>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Our Mission */}
      <section className="bg-amber-100 py-16">
        <div className="page-section">
          <AnimatedSection animation="fade-in" className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8">Our Mission</h2>
            <p className="text-xl text-gray-700 italic">
              "To create a welcoming space where quality coffee brings people together, conversations flow freely, and every customer leaves happier than when they arrived."
            </p>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="page-section">
        <AnimatedSection animation="slide-up" className="text-center mb-12">
          <h2 className="section-title">Our Values</h2>
          <p className="max-w-3xl mx-auto text-gray-700">
            These core principles guide everything we do at Cozy Corner Cafe
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedSection animation="zoom-in" delay={0.1} className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">Quality</h3>
            <p className="text-gray-700">
              We never compromise on the quality of our ingredients, our preparation, or our service.
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="zoom-in" delay={0.2} className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">Community</h3>
            <p className="text-gray-700">
              We strive to be a gathering place that brings people together and supports local initiatives.
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="zoom-in" delay={0.3} className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">Passion</h3>
            <p className="text-gray-700">
              Our love for coffee and food drives us to continuously learn, improve, and share our enthusiasm.
            </p>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="bg-primary text-white py-16">
        <div className="page-section">
          <AnimatedSection animation="slide-up" className="text-center mb-12">
            <h2 className="section-title text-white">Meet Our Team</h2>
            <p className="max-w-3xl mx-auto">
              The talented individuals who make Cozy Corner Cafe special
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "David Wilson",
                role: "Founder & Head Barista",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
              },
              {
                name: "Emma Wilson",
                role: "Founder & Pastry Chef",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
              },
              {
                name: "Michael Chen",
                role: "Manager",
                image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
              },
              {
                name: "Sophie Ahmed",
                role: "Chef",
                image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
              },
            ].map((member, index) => (
              <AnimatedSection
                key={index}
                animation="fade-in"
                delay={0.1 * index}
                className="bg-white text-gray-800 rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-4 text-center">
                  <h3 className="text-xl font-bold text-primary">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Sustainability Section */}
      <section className="page-section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="slide-right" className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-primary mb-6">Our Commitment to Sustainability</h2>
            <p className="mb-4 text-gray-700">
              At Cozy Corner Cafe, we believe in responsible business practices that benefit our planet and community.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-accent mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>We source our coffee beans ethically from small-scale farmers.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-accent mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Our packaging is made from recyclable or compostable materials.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-accent mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>We minimize food waste by donating unsold items to local shelters.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-accent mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Our cafe uses energy-efficient appliances and LED lighting.</span>
              </li>
            </ul>
          </AnimatedSection>
          
          <AnimatedSection animation="slide-left" className="order-1 md:order-2">
            <img 
              src="https://images.unsplash.com/photo-1512389142860-9c449e58a543?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Sustainability efforts" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

export default About
