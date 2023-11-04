import React, {useId ,forwardRef} from 'react'

const Input = forwardRef(function Input({
  placeholder,
  type='text',
  width = '[70%]',
  className="",
  ...props
}, ref){

  const id = useId();

  return (
      <input type={type} 
       placeholder={placeholder}
       className={`bg-gray-700 px-10 py-3 mb-4 text-gray-100 rounded-md ${width}`}
       {...props}
       id={id}
       ref={ref}
      />
  )

})

export default Input
