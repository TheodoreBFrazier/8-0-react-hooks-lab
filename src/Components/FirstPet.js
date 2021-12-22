import React, {useState} from "react"; //import the useState
import "./FirstPet.css";





const FirstPet = () => {

  const [firstPet, setFirstPet] = useState(false); //set the state to false as we are asking if this is the first pet. Initial state of both the firstPet & checkPet event.


  const checkPet = (event) => {
    setFirstPet(event.target.checked) //setting the checkmark event 
  }

  return (
    <section className="first-pet">
      <h4>Is this your first pet?</h4>
      <br />
      <form>
        <input type="checkbox" onClick={checkPet} />
      </form>
      <h5>{firstPet ? "Yes" : "No"}</h5>
    </section>
  );

};

export default FirstPet;