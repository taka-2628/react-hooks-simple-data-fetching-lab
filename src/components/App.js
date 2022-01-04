import React, { useState, useEffect} from "react";

function App(){
  const [dog, setDog] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then(data => {
        setDog(data);
        setIsLoaded(true);
      })
  }, [])

  if(!isLoaded){return <p>Loading...</p>}

  return (
    <div>
      <img src={dog.message} alt="A Random Dog"></img>
    </div>
  )
}

export default App;