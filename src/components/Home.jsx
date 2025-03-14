import { useEffect, useState } from 'react'

function Home() {
    console.log("app function initialized.")
      const [count, setCount ] = useState(0)
      function handleCount(){
        setCount((prev) => {
          return prev+1
        })
      }
      useEffect(()=>{
        console.log("useEffect called...")
    
        return () => {
          console.log("HOME component unmounted")
        }
      },[])
  return (
    <>
    <p>
      {count}
    </p>
    <button
      onClick={handleCount}
    >+</button>
  </>
  )
}

export default Home