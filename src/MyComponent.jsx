import React, {useState} from 'react'; 

function MyComponent() {
 
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(25);
    const [isEmployed, setIsEmployed] = useState(false);


    const updateName = () => {
        setName("Tanjir Hasan");
        console.log("Name has been set to Tanjir Hasan");
    }
    const incrementAge = () => {
        setAge(age + 1);
        console.log("Age has been incremented");
    }
    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
        console.log("Employed status has been toggled");        
    }

    return(<div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>
        <p>Age: {age}</p>
        <button onClick={incrementAge}>Increment Age</button>
        <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
        <button onClick={toggleEmployedStatus}>Toggle Status</button>
    </div>);
}

export default MyComponent;