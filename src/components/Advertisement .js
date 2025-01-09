import React from 'react'
import { motion } from 'framer-motion';
const Advertisement  = () => {
  return (
    <motion.div className='motion_adertise'
    style={{
   color:"black",
   padding:"14px",
   width:"max-content",
   height:"20px",
   zIndex:"10000000000000000000",
      backgroundColor: "red",
      fontSize:"25px",
      display:"flex",
      alignItems:"center",
      justifyContent:"center",fontFamily:"sans-serif",fontWeight:"bold",fontStyle:"italic"
    }}
    animate={{
        x: ["300%", "-100%"], // تبدأ من 100% من العرض وتتحرك إلى -100% لتخرج من الشاشة
      }}
      transition={{
        repeat: Infinity, // التكرار اللانهائي
        duration: 18, // مدة الحركة بالكامل
        ease: "linear", // حركة مستمرة بدون توقف أو تسارع
      }}
    
  >
version has mor advantage for you ,to help you to buy what you want

  </motion.div>
  )
}

export default Advertisement 