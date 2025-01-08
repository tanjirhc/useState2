import React, {useState} from 'react'; 

function MyComponent() {
 
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(25);


    const updateName = () => {
        setName("Tanjir Hasan");
        console.log("Name has been set to Tanjir Hasan");
    }
    const incrementAge = () => {
        setAge(age + 1);
        console.log("Age has been incremented");
    }

    return(<div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>
        <p>Age: {age}</p>
        <button onClick={incrementAge}>Increment Age</button>
    </div>)
}

export default MyComponent;