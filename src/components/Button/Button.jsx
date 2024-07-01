/* eslint-disable react/prop-types */
import React from "react";

const Button = (props) => {
<<<<<<< HEAD
    const {className, children, onClick, type, data_aos, data_aos_offset} = props


    
    return(
        
            <button className={`bg-secondary w-hug h-hug p-3 gap-2 rounded-md font-sans ${className}`} onClick={onClick} type={type} data-aos={data_aos} data-aos-offset={data_aos_offset}>
                {children}
            </button>
    
    )
}
export default Button
=======
  const { className, children, onClick, type } = props;

  return (
    <button
      className={`bg-secondary text-white w-hug h-hug p-3 gap-2 rounded-md font-sans ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
export default Button;
>>>>>>> target/main
