// src/pages/Home.jsx
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
              filter: "brightness(50%)"
            }}
          ></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Welcome to <span className="text-secondary">Cozy Corner Cafe</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
          >
            Experience the perfect blend of comfort and taste in every cup
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link to="/menu" className="btn btn-primary">
              Explore Our Menu
            </Link>
            <Link to="/reservation" className="btn btn-secondary">
              Book a Table
            </Link>
          </motion.div>
        </div>
        
        {/* Scroll Down Indicator */}
        <motion.div
          animate={{ 
            y: [0, 10, 0],
            opacity: [1, 0.5, 1]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut"
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <svg
            className="w-10 h-10 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </motion.section>
      
      {/* Featured Section */}
      <section className="page-section">
        <AnimatedSection animation="slide-up" className="mb-12">
          <h2 className="section-title">Why Choose Us?</h2>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedSection 
            animation="slide-up"
            delay={0.1}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="mb-4 text-primary text-4xl">
              <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
            <p className="text-gray-600">
              We source the finest coffee beans and ingredients to ensure every cup and dish exceeds your expectations.
            </p>
          </AnimatedSection>
          
          <AnimatedSection 
            animation="slide-up"
            delay={0.2}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="mb-4 text-primary text-4xl">
              <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Quick Service</h3>
            <p className="text-gray-600">
              Our efficient team ensures your order is prepared with care and delivered promptly, respecting your time.
            </p>
          </AnimatedSection>
          
          <AnimatedSection 
            animation="slide-up"
            delay={0.3}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="mb-4 text-primary text-4xl">
              <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Cozy Atmosphere</h3>
            <p className="text-gray-600">
              Our cafe is designed to provide a warm, welcoming environment where you can relax, work, or catch up with friends.
            </p>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Featured Menu */}
      <section className="bg-primary text-white py-16">
        <div className="page-section">
          <AnimatedSection animation="slide-up" className="mb-12">
            <h2 className="section-title text-white">Popular Items</h2>
            <p className="text-center max-w-2xl mx-auto">
              Discover our most beloved menu items that keep our customers coming back
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Signature Latte",
                price: "$4.50",
                image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
              },
              {
                name: "Avocado Toast",
                price: "$8.75",
                image: "https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg",
              },
              {
                name: "Blueberry Muffin",
                price: "$3.95",
                image: "https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg",
              },
              {
                name: "Breakfast Sandwich",
                price: "$7.25",
                image: "https://images.unsplash.com/photo-1600628421055-4d30de868b8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
              },
            ].map((item, index) => (
              <AnimatedSection
                key={index}
                animation="zoom-in"
                delay={0.1 * index}
                className="overflow-hidden rounded-lg shadow-lg bg-white text-gray-800"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold">{item.name}</h3>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-accent font-medium">{item.price}</span>
                    <Link to="/menu" className="text-primary hover:text-accent font-medium">
                      View Menu
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          
          <AnimatedSection animation="fade-in" delay={0.5} className="mt-10 text-center">
            <Link to="/menu" className="btn btn-secondary">
              View Full Menu
            </Link>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="page-section">
        <AnimatedSection animation="slide-up" className="mb-12">
          <h2 className="section-title">What Our Customers Say</h2>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Johnson",
              quote: "Cozy Corner Cafe is my go-to place for morning coffee. The ambiance is perfect for working remotely, and their pastries are to die for!",
              rating: 5,
            },
            {
              name: "Michael Chen",
              quote: "The baristas here are true artists. Every latte I've ordered has been beautifully crafted and tastes amazing. Highly recommend the seasonal specials!",
              rating: 5,
            },
            {
              name: "Emma Rodriguez",
              quote: "I hosted a small gathering in their private area, and the service was impeccable. Everyone loved the food and coffee. Will definitely return!",
              rating: 4,
            },
          ].map((testimonial, index) => (
            <AnimatedSection
              key={index}
              animation="slide-up"
              delay={0.1 * index}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
              <p className="font-bold text-primary">{testimonial.name}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>
      
      {/* Newsletter */}
      <AnimatedSection animation="fade-in" className="bg-secondary py-16">
        <div className="page-section">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-700 mb-6">
              Subscribe to our newsletter for updates, special offers, and coffee tips
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto sm:max-w-lg">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 mb-2 sm:mb-0 sm:mr-2 rounded-md border-0 focus:ring-2 focus:ring-primary"
              />
              <button className="btn btn-primary">Subscribe</button>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}

export default Home
