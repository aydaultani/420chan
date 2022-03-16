import { useState,useEffect } from "react"
import '../styles/index.css'

export default function AdminPanel() {

    const [num , setNum] = useState(0)
    const [deleteResult , setRes] = useState('Click the above button to wipe')

  useEffect(() => {
    let interval;
    setTimeout(() => {
      interval = setInterval(() => {
        fetch('/api/num')
          .then(response => response.json())
          .then(d => {
            setNum(d.result)
          })
      }, 500) // Every 5 seconds
    }, 1000)
    return () => {
    clearInterval(interval)
    }
  }, [])
    
    const handleDelete = () => {
        fetch('/hahaimagine?key=meow')
        .then(response => response.json())
        .then(d=> {
            setRes(d.result)
        })
    }
    return (
        <div className="admin">
            <h1>Number of posts: {num}</h1>
            <button onClick={handleDelete} className='wipe_button'>Wipe all data</button>
            <h1>{deleteResult}</h1>
        </div>
    )
}
