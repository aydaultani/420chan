import Comment from './components/Comment';
import InfoBox from './components/InfoBox';
import { useEffect, useState } from 'react';

function App() {

  const [data , setData] = useState([])
  const [error, isError] = useState(false)

  useEffect(() => {
    let interval;
    setTimeout(() => {
      interval = setInterval(() => {
        fetch('/api/posts')
          .then(response => response.json())
          .then(d => {
            isError(false)
            setData(d.posts)
            console.log("Searching...")
          })
          .catch(err => {
            isError(true)
          })
      }, 500) // Every 5 seconds
    }, 1000)
    return () => {
    clearInterval(interval)
    }
  }, [])

  return (
    <div>
      <InfoBox />
      {
        error ? (
          <div className='error'>
            <h1>Looks like our API is having issues, come back later.</h1>
          </div>
        ) : (
          Object.entries(data).map(([key, val]) => <Comment nick={key} comment={val}/>
        ))
      }
    </div>
  );
}

export default App;
