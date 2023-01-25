import { useState } from 'react'

const useHeader = () => {
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    setIsActive(!isActive)
  }

  return { isActive, setIsActive, handleClick }
}

export default useHeader
