import { useState } from "react"

function useForm(initialState){
  if(typeof initialState !== 'object') {
    throw new Error('parameter should be at least an empty object')
  }
  if(initialState instanceof Array) {
    throw new Error('parameter should be at least an empty object')
  }

  const [formValues, setFormValues] = useState(initialState)

  const updateValues = (newState) => {
    setFormValues(newState)
  }

  const reset = () => {
    setFormValues(initialState)
  }

  return {formValues, updateValues, reset}
}

export default useForm