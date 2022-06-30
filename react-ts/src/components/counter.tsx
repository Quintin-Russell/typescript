import React, { useState } from 'react'

interface CounterProps {
  name: string;
}

type CounterState = number

let Counter: React.FC<CounterProps> = (props) => {
  let [count, setCount] = useState<CounterState>(0)

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>++</button>
      <button onClick={() => setCount(count - 1)}>--</button>
    </>
  )
}

export default Counter
