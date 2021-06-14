// create your App component here
import { useState, useEffect } from 'react';

function App() {
    const [image, setImage] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        console.log("Fetching data...");
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((data) => {
            setImage(data.message)
            setIsLoaded(true)
        });
    }, []);

    return (
        <div>
            <img 
                alt="A Random Dog" 
                src={image}
            />
            {!isLoaded ? "Loading..." : null}
        </div>
    )

}

export default App;