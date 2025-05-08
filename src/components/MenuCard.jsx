// src/components/MenuCard.jsx
import { motion } from 'framer-motion'

const MenuCard = ({ item }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      {item.image && (
        <div className="h-48 overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
      )}
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-bold text-primary">{item.name}</h3>
          <span className="font-medium text-accent">{item.price}</span>
        </div>
        {item.description && (
          <p className="mt-2 text-gray-600 text-sm">{item.description}</p>
        )}
        {item.dietary && (
          <div className="mt-3 flex flex-wrap gap-2">
            {item.dietary.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs rounded-full bg-amber-100 text-amber-800"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default MenuCard
