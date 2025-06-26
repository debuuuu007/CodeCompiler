import React from 'react'
import {motion} from 'framer-motion'

const Companies = () => {

    const companies = [
        'express.svg',
        'react.svg',
        'nodejs.svg',
        'mongodb.svg',
        'vercel.svg',
        'vscode.svg',
        'javascript.svg',
  ];

   const scrollItems = [...companies, ...companies];

  return (
    <div className="overflow-hidden bg-white py-4 w-full h-30 flex items-center justify-center">
      <motion.div
        className="flex gap-20 items-center whitespace-nowrap w-full"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ ease: 'linear', duration: 20, repeat: Infinity }}
      >
        {scrollItems.map((logo, index) => (
          <img
            key={index}
            src={`/logos/${logo}`}
            alt={logo.split('.')[0]}
            className="h-16 w-auto object-contain"
          />
        ))}
      </motion.div>
    </div>
  )
}

export default Companies