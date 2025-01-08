import React, {useState} from 'react'; 

function MyComponent() {
 
    const [name, setName] = useState("Guest");

    const updateName = () => {
        setName("Tanjir Hasan");
        console.log("Name has been set to Tanjir Hasan");
    }

    return(<div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>
    </div>)
}

export default MyComponent;