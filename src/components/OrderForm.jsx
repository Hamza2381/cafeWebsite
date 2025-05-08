// src/components/OrderForm.jsx
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const OrderForm = () => {
  const [cart, setCart] = useState([])
  const [activeCategory, setActiveCategory] = useState('coffee')
  const [isCheckout, setIsCheckout] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    paymentMethod: 'credit',
    pickupOption: 'pickup',
    pickupTime: '',
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const categories = [
    { id: 'coffee', name: 'Coffee' },
    { id: 'tea', name: 'Tea' },
    { id: 'breakfast', name: 'Breakfast' },
    { id: 'lunch', name: 'Lunch' },
    { id: 'pastries', name: 'Pastries' },
  ]
  
  const menuItems = {
    coffee: [
      { id: 'c1', name: 'Espresso', price: 2.95, image: 'https://images.unsplash.com/photo-1510707577719-ae7eeae9283d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
      { id: 'c2', name: 'Cappuccino', price: 4.50, image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
      { id: 'c3', name: 'Latte', price: 4.75, image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
      { id: 'c4', name: 'Cold Brew', price: 4.25, image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
      { id: 'c5', name: 'Mocha', price: 5.25, image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
      { id: 'c6', name: 'Americano', price: 3.50, image: 'https://images.unsplash.com/photo-1551030173-122aabc4489c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    ],
    tea: [
      { id: 't1', name: 'Earl Grey', price: 3.50, image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
      { id: 't2', name: 'Green Tea', price: 3.25, image: 'https://images.unsplash.com/photo-1556682851-c4580c583e23?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
      { id: 't3', name: 'Chai Latte', price: 4.75, image: 'https://images.unsplash.com/photo-1589888116214-9e9323951c95?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
      { id: 't4', name: 'Herbal Infusion', price: 3.75, image: 'https://images.unsplash.com/photo-1563911892507-2240a37e9445?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    ],
    breakfast: [
      { id: 'b1', name: 'Avocado Toast', price: 8.95, image: 'https://images.unsplash.com/photo-1603046891744-76f2624a6e2e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
      { id: 'b2', name: 'Breakfast Burrito', price: 9.75, image: 'https://images.unsplash.com/photo-1584178638332-7069f6ebb93f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
      { id: 'b3', name: 'Granola Bowl', price: 7.50, image: 'https://images.unsplash.com/photo-1565885685429-a8a9bac28ba3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
      { id: 'b4', name: 'Breakfast Sandwich', price: 8.25, image: 'https://images.unsplash.com/photo-1600628421055-4d30de868b8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    ],
    lunch: [
      { id: 'l1', name: 'Grilled Cheese', price: 8.50, image: 'https://images.unsplash.com/photo-1582479429421-321922cae76d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
      { id: 'l2', name: 'Caprese Sandwich', price: 9.25, image: 'https://images.unsplash.com/photo-1565599837634-889288bf8aac?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
      { id: 'l3', name: 'Quinoa Bowl', price: 10.95, image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
      { id: 'l4', name: 'Turkey Club', price: 11.25, image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    ],
    pastries: [
      { id: 'p1', name: 'Croissant', price: 3.50, image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
      { id: 'p2', name: 'Blueberry Muffin', price: 3.95, image: 'https://images.unsplash.com/photo-1619985632461-f8d773145fbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
      { id: 'p3', name: 'Cinnamon Roll', price: 4.50, image: 'https://images.unsplash.com/photo-1583529726967-0560f6a96cf6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
      { id: 'p4', name: 'Cookie', price: 2.95, image: 'https://images.unsplash.com/photo-1590080875243-39a13e82f0f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    ],
  }
  
  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id)
    
    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      )
    } else {
      setCart([...cart, { ...item, quantity: 1 }])
    }
  }
  
  const removeFromCart = (id) => {
    const existingItem = cart.find((item) => item.id === id)
    
    if (existingItem.quantity === 1) {
      setCart(cart.filter((item) => item.id !== id))
    } else {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
      )
    }
  }
  
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }
  
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      })
    }
  }
  
  const validateCheckoutForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address'
    }
    
    if (formData.pickupOption === 'delivery' && !formData.address.trim()) {
      newErrors.address = 'Address is required for delivery'
    }
    
    if (!formData.pickupTime) {
      newErrors.pickupTime = 'Please select a pickup/delivery time'
    }
    
    return newErrors
  }
  
  const handleCheckout = (e) => {
    e.preventDefault()
    
    const newErrors = validateCheckoutForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }
  
  const getPickupTimes = () => {
    const times = []
    const now = new Date()
    const currentHour = now.getHours()
    const currentMinute = now.getMinutes()
    
    // Round to nearest 15 minutes and add 30 minutes for preparation
    let startMinute = Math.ceil(currentMinute / 15) * 15 + 30
    let startHour = currentHour
    
    if (startMinute >= 60) {
      startMinute -= 60
      startHour += 1
    }
    
    // Generate times for the next 3 hours in 15-minute intervals
    for (let h = 0; h < 3; h++) {
      const hour = (startHour + h) % 24
      
      // Skip if outside operating hours (7AM-8PM)
      if (hour < 7 || hour >= 20) continue
      
      const startMin = h === 0 ? startMinute : 0
      
      for (let m = startMin; m < 60; m += 15) {
        const timeString = `${hour % 12 || 12}:${m.toString().padStart(2, '0')} ${hour < 12 ? 'AM' : 'PM'}`
        const value = `${hour.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`
        times.push({ display: timeString, value })
      }
    }
    
    return times
  }
  
  const pickupTimes = getPickupTimes()
  
  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
      >
        <svg
          className="w-16 h-16 text-green-500 mx-auto mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="text-2xl font-bold text-green-800 mb-2">Order Confirmed!</h3>
        <p className="text-green-700 mb-4">
          Thank you for your order. We have sent a confirmation email with the details.
        </p>
        <p className="text-green-700 mb-6">
          {formData.pickupOption === 'pickup' 
            ? `Your order will be ready for pickup at ${formData.pickupTime.replace(/(\d+):(\d+)/, (match, h, m) => {
                const hour = parseInt(h);
                return `${hour % 12 || 12}:${m} ${hour < 12 ? 'AM' : 'PM'}`;
              })}.`
            : `Your order will be delivered around ${formData.pickupTime.replace(/(\d+):(\d+)/, (match, h, m) => {
                const hour = parseInt(h);
                return `${hour % 12 || 12}:${m} ${hour < 12 ? 'AM' : 'PM'}`;
              })}.`
          }
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => {
              setCart([])
              setIsSubmitted(false)
              setIsCheckout(false)
              setFormData({
                name: '',
                phone: '',
                email: '',
                address: '',
                paymentMethod: 'credit',
                pickupOption: 'pickup',
                pickupTime: '',
              })
            }}
            className="btn btn-primary"
          >
            Place Another Order
          </button>
        </div>
      </motion.div>
    )
  }
  
  return (
    <div>
      <AnimatePresence mode="wait">
        {!isCheckout ? (
          <motion.div
            key="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Category Navigation */}
            <div className="mb-6 overflow-x-auto">
              <div className="flex space-x-2 pb-2">
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
            
            {/* Menu Items */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <h3 className="text-2xl font-bold text-primary mb-4">
                  {categories.find(cat => cat.id === activeCategory).name}
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {menuItems[activeCategory].map((item) => (
                    <motion.div
                      key={item.id}
                      whileHover={{ scale: 1.02 }}
                      className="bg-white rounded-lg shadow-md overflow-hidden"
                    >
                      <div className="h-40 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex justify-between items-center mb-3">
                          <h4 className="font-bold">{item.name}</h4>
                          <span className="text-accent font-medium">${item.price.toFixed(2)}</span>
                        </div>
                        <button
                          onClick={() => addToCart(item)}
                          className="w-full py-2 bg-primary text-white rounded-md hover:bg-accent transition-colors"
                        >
                          Add to Order
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Cart Summary */}
            {cart.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-amber-50 rounded-lg p-6 shadow-md"
              >
                <h3 className="text-xl font-bold text-primary mb-4">Your Order</h3>
                
                <div className="space-y-3 mb-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between items-center">
                      <div className="flex items-center">
                        <span className="font-medium">{item.name}</span>
                        <span className="text-gray-600 mx-2">×</span>
                        <div className="flex items-center">
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-gray-500 hover:text-red-500"
                          >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                            </svg>
                          </button>
                          <span className="mx-2">{item.quantity}</span>
                          <button
                            onClick={() => addToCart(item)}
                            className="text-gray-500 hover:text-green-500"
                          >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-amber-200 pt-3 mb-4">
                  <div className="flex justify-between items-center font-bold">
                    <span>Total:</span>
                    <span>${calculateTotal().toFixed(2)}</span>
                  </div>
                </div>
                
                <button
                  onClick={() => setIsCheckout(true)}
                  className="w-full py-2 bg-primary text-white rounded-md hover:bg-accent transition-colors"
                >
                  Proceed to Checkout
                </button>
              </motion.div>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="checkout"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-6 flex items-center">
              <button
                onClick={() => setIsCheckout(false)}
                className="text-primary hover:text-accent mr-3"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <h3 className="text-2xl font-bold text-primary">Checkout</h3>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Order Summary */}
              <div>
                <div className="bg-amber-50 rounded-lg p-6 shadow-md mb-6">
                  <h4 className="text-lg font-bold text-primary mb-3">Order Summary</h4>
                  
                  <div className="space-y-2 mb-4">
                    {cart.map((item) => (
                      <div key={item.id} className="flex justify-between items-center">
                        <div>
                          <span className="font-medium">{item.name}</span>
                          <span className="text-gray-600 ml-1">×{item.quantity}</span>
                        </div>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t border-amber-200 pt-3">
                    <div className="flex justify-between items-center font-bold">
                      <span>Total:</span>
                      <span>${calculateTotal().toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                
                {/* Pickup Options */}
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="text-lg font-bold text-primary mb-3">Pickup Options</h4>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="pickupOption"
                          value="pickup"
                          checked={formData.pickupOption === 'pickup'}
                          onChange={handleInputChange}
                          className="h-4 w-4 text-primary focus:ring-accent"
                        />
                        <span className="ml-2">Store Pickup</span>
                      </label>
                      <p className="text-sm text-gray-600 mt-1 ml-6">
                        Pick up your order at our store
                      </p>
                    </div>
                    
                    <div>
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="pickupOption"
                          value="delivery"
                          checked={formData.pickupOption === 'delivery'}
                          onChange={handleInputChange}
                          className="h-4 w-4 text-primary focus:ring-accent"
                        />
                        <span className="ml-2">Delivery</span>
                      </label>
                      <p className="text-sm text-gray-600 mt-1 ml-6">
                        Delivered to your address (within 5 miles radius)
                      </p>
                    </div>
                    
                    {formData.pickupOption === 'delivery' && (
                      <div className="mt-4">
                        <label htmlFor="address" className="block text-gray-700 font-medium mb-2">
                          Delivery Address*
                        </label>
                        <textarea
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          rows="2"
                          className={`input-field ${errors.address ? 'border-red-500 ring-red-100' : ''}`}
                          placeholder="Enter your full address"
                        ></textarea>
                        {errors.address && (
                          <p className="mt-1 text-red-500 text-sm">{errors.address}</p>
                        )}
                      </div>
                    )}
                    
                    <div>
                      <label htmlFor="pickupTime" className="block text-gray-700 font-medium mb-2">
                        {formData.pickupOption === 'pickup' ? 'Pickup Time*' : 'Delivery Time*'}
                      </label>
                      <select
                        id="pickupTime"
                        name="pickupTime"
                        value={formData.pickupTime}
                        onChange={handleInputChange}
                        className={`input-field ${errors.pickupTime ? 'border-red-500 ring-red-100' : ''}`}
                      >
                        <option value="">Select a time</option>
                        {pickupTimes.map((time, index) => (
                          <option key={index} value={time.value}>
                            {time.display} {formData.pickupOption === 'delivery' ? '(Estimated)' : ''}
                          </option>
                        ))}
                      </select>
                      {errors.pickupTime && (
                        <p className="mt-1 text-red-500 text-sm">{errors.pickupTime}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Checkout Form */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h4 className="text-lg font-bold text-primary mb-3">Contact Information</h4>
                
                <form onSubmit={handleCheckout} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Full Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`input-field ${errors.name ? 'border-red-500 ring-red-100' : ''}`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="mt-1 text-red-500 text-sm">{errors.name}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                      Phone Number*
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`input-field ${errors.phone ? 'border-red-500 ring-red-100' : ''}`}
                      placeholder="(555) 123-4567"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-red-500 text-sm">{errors.phone}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`input-field ${errors.email ? 'border-red-500 ring-red-100' : ''}`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
                    )}
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="text-lg font-bold text-primary mb-3">Payment Method</h4>
                    
                    <div className="space-y-3">
                      <div>
                        <label className="flex items-center cursor-pointer">
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="credit"
                            checked={formData.paymentMethod === 'credit'}
                            onChange={handleInputChange}
                            className="h-4 w-4 text-primary focus:ring-accent"
                          />
                          <span className="ml-2">Pay at Pickup</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-600 mt-4">
                    <p>* Required fields</p>
                  </div>
                  
                  <div className="mt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting || cart.length === 0}
                      className={`btn btn-primary w-full ${
                        (isSubmitting || cart.length === 0) ? 'opacity-75 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg
                            className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        'Place Order'
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default OrderForm
