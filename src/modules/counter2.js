import React, {useState, useRef, useEffect, useReducer} from 'react';

export default function Counter() {
  const [count, setCount] = useState(0)
  const late = useRef(0)
  function handleAlertClick() {
      setTimeout(() => {
          alert('You clicked on: ' + late.current)
      }, 3000)
  }
  // once setCount()
  useEffect(() => {
    console.log('once ')
    late.current = count;

  })
  return (
      <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>Click me</button>
          <button onClick={handleAlertClick}>Show alert</button>
      </div>
  )
}
