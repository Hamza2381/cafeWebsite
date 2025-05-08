// src/pages/Menu.jsx
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import MenuCard from '../components/MenuCard'

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('coffee')
  
  const categories = [
    { id: 'coffee', name: 'Coffee' },
    { id: 'tea', name: 'Tea' },
    { id: 'breakfast', name: 'Breakfast' },
    { id: 'lunch', name: 'Lunch' },
    { id: 'pastries', name: 'Pastries' },
  ]
  
  const menuItems = {
    coffee: [
      {
        name: 'Espresso',
        price: '$2.95',
        description: 'Rich, full-bodied shot with a caramel-colored crema on top',
        image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg',
        dietary: ['Vegan'],
      },
      {
        name: 'Cappuccino',
        price: '$4.50',
        description: 'Equal parts espresso, steamed milk, and milk foam',
        image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        dietary: ['Vegetarian'],
      },
      {
        name: 'Latte',
        price: '$4.75',
        description: 'Espresso with steamed milk and a small layer of foam',
        image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        dietary: ['Vegetarian'],
      },
      {
        name: 'Cold Brew',
        price: '$4.25',
        description: 'Slow-steeped coffee, smooth and naturally sweet',
        image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        dietary: ['Vegan'],
      },
      {
        name: 'Mocha',
        price: '$5.25',
        description: 'Espresso with chocolate, steamed milk, and whipped cream',
        image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        dietary: ['Vegetarian'],
      },
      {
        name: 'Americano',
        price: '$3.50',
        description: 'Espresso diluted with hot water',
        image: 'https://images.unsplash.com/photo-1551030173-122aabc4489c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        dietary: ['Vegan'],
      },
    ],
    tea: [
      {
        name: 'Earl Grey',
        price: '$3.50',
        description: 'Black tea flavored with bergamot oil',
        image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        dietary: ['Vegan'],
      },
      {
        name: 'Green Tea',
        price: '$3.25',
        description: 'Delicate, fresh tea with light grassy notes',
        image: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg',
        dietary: ['Vegan'],
      },
      {
        name: 'Chai Latte',
        price: '$4.75',
        description: 'Spiced black tea with steamed milk',
        image: 'https://i.pinimg.com/originals/0d/b2/a1/0db2a10eb892c083b2bd51bd1d605e76.jpg',
        dietary: ['Vegetarian'],
      },
      {
        name: 'Herbal Infusion',
        price: '$3.75',
        description: 'Caffeine-free blend of herbs and spices',
        image: 'https://images.pexels.com/photos/227908/pexels-photo-227908.jpeg',
        dietary: ['Vegan'],
      },
    ],
    breakfast: [
      {
        name: 'Avocado Toast',
        price: '$8.95',
        description: 'Toasted sourdough with mashed avocado, lime, and chili flakes',
        image: 'https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg',
        dietary: ['Vegetarian', 'Vegan Option'],
      },
      {
        name: 'Breakfast Burrito',
        price: '$9.75',
        description: 'Scrambled eggs, cheese, potatoes, and salsa in a flour tortilla',
        image: 'https://images.pexels.com/photos/5737247/pexels-photo-5737247.jpeg',
        dietary: ['Vegetarian'],
      },
      {
        name: 'Granola Bowl',
        price: '$7.50',
        description: 'Housemade granola with Greek yogurt and seasonal fruit',
        image: 'https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg',
        dietary: ['Vegetarian'],
      },
      {
        name: 'Breakfast Sandwich',
        price: '$8.25',
        description: 'Eggs, cheese, and choice of protein on a toasted English muffin',
        image: 'https://images.unsplash.com/photo-1600628421055-4d30de868b8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        dietary: ['Vegetarian Option'],
      },
    ],
    lunch: [
      {
        name: 'Grilled Cheese',
        price: '$8.50',
        description: 'Three-cheese blend on sourdough with tomato soup',
        image: 'https://images.pexels.com/photos/30910196/pexels-photo-30910196/free-photo-of-delicious-grilled-cheese-sandwich-on-rustic-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        dietary: ['Vegetarian'],
      },
      {
        name: 'Caprese Sandwich',
        price: '$9.25',
        description: 'Fresh mozzarella, tomato, basil, and balsamic on ciabatta',
        image: 'https://images.pexels.com/photos/30700809/pexels-photo-30700809/free-photo-of-delicious-caprese-sandwich-with-mozzarella.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        dietary: ['Vegetarian'],
      },
      {
        name: 'Quinoa Bowl',
        price: '$10.95',
        description: 'Warm quinoa with roasted vegetables, greens, and tahini dressing',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        dietary: ['Vegan', 'Gluten-Free'],
      },
      {
        name: 'Turkey Club',
        price: '$11.25',
        description: 'Roasted turkey, bacon, lettuce, tomato, and mayo on toast',
        image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        dietary: [],
      },
    ],
    pastries: [
      {
        name: 'Croissant',
        price: '$3.50',
        description: 'Buttery, flaky pastry made in-house daily',
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        dietary: ['Vegetarian'],
      },
      {
        name: 'Blueberry Muffin',
        price: '$3.95',
        description: 'Moist muffin loaded with fresh blueberries',
        image: 'https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg',
        dietary: ['Vegetarian'],
      },
      {
        name: 'Cinnamon Roll',
        price: '$4.50',
        description: 'Soft, swirled pastry with cinnamon sugar and vanilla glaze',
        image: 'https://images.pexels.com/photos/267308/pexels-photo-267308.jpeg',
        dietary: ['Vegetarian'],
      },
      {
        name: 'Cookie',
        price: '$2.95',
        description: 'Choose from chocolate chip, oatmeal raisin, or snickerdoodle',
        image: 'https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg',
        dietary: ['Vegetarian'],
      },
    ],
  }
  
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
              Our Menu
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg"
            >
              Handcrafted beverages and freshly prepared food
            </motion.p>
          </div>
        </div>
      </motion.section>
      
      {/* Category Navigation */}
      <section className="sticky top-16 bg-white z-20 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex overflow-x-auto space-x-4 pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                  activeCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Menu Items */}
      <section className="page-section">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              {categories.find(cat => cat.id === activeCategory).name}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuItems[activeCategory].map((item, index) => (
                <AnimatedSection
                  key={index}
                  animation="fade-in"
                  delay={0.1 * index}
                >
                  <MenuCard item={item} />
                </AnimatedSection>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </section>
      
      {/* Dietary Information */}
      <section className="bg-amber-100 py-10">
        <div className="page-section">
          <AnimatedSection animation="fade-in" className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">Dietary Information</h3>
            <p className="mb-4 text-gray-700">
              We understand the importance of catering to various dietary preferences and restrictions. Please inform our staff of any allergies or special requests.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-accent mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Vegetarian and vegan options available</span>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-accent mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Gluten-free alternatives for most items</span>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-accent mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Non-dairy milk options (almond, soy, oat)</span>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-accent mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Detailed allergen information available on request</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Special Offers */}
      <section className="page-section">
        <AnimatedSection animation="slide-up" className="text-center mb-8">
          <h3 className="text-2xl font-bold text-primary mb-2">Special Offers</h3>
          <p className="text-gray-700">
            Enjoy these deals during your visit
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatedSection animation="zoom-in" delay={0.1} className="bg-secondary p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-bold text-primary mb-2">Happy Hour</h4>
            <p className="text-gray-700 mb-2">
              50% off all coffee drinks from 3-5PM weekdays
            </p>
            <p className="font-medium text-accent">Monday - Friday</p>
          </AnimatedSection>
          
          <AnimatedSection animation="zoom-in" delay={0.2} className="bg-secondary p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-bold text-primary mb-2">Weekend Brunch</h4>
            <p className="text-gray-700 mb-2">
              Complimentary mimosa with any breakfast order
            </p>
            <p className="font-medium text-accent">Saturday & Sunday, 8AM-2PM</p>
          </AnimatedSection>
          
          <AnimatedSection animation="zoom-in" delay={0.3} className="bg-secondary p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-bold text-primary mb-2">Loyalty Program</h4>
            <p className="text-gray-700 mb-2">
              Buy 10 drinks, get 1 free of equal or lesser value
            </p>
            <p className="font-medium text-accent">Sign up in-store today!</p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

export default Menu
