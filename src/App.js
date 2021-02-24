import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  // const [nayoks,setNayoks] = useState(0)
 const [ persons, setPersons] = useState([])
  useEffect(() => 
  {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setPersons(data))
  }, [])
//https://randomuser.me/api/?results=5
//https://jsonplaceholder.typicode.com/users
  
  return (
    <div className="App">
      <header className="App-header">
        
        
        {
          persons.map(usr => <ProfileCard gender={usr.gender} postcode={usr.postcode}></ProfileCard>)
          
        }
       
        
      </header>
    </div>
  );
}


  function ProfileCard(props){
    
      const wordSpacing= {
        wordSpacing:'80px'
      }
      const profCard = {
        backgroundColor:'gray',
        borderRadius:'20px'

      }
      const nameStyle={
        padding:'3px',
        color:'blue'
      }
    return(
      <div style={profCard}>
        <div ><img src="picture.thumbnail"></img></div>
        <h6>  location.city location.state location.country</h6>
        <div style={nameStyle}><h3></h3></div>
        <div style={wordSpacing}><p>dob.email cell</p></div>
        <p>Gender: {props.gender} </p>
        <p> Age: registered.age {props.postcode}</p>


      </div>
    )
  }

// function MovieCounter() { 
//   const [ count,setCount ] = useState(5);
//   const handleClick = () => setCount(count+1);
//   const handleDeClick = () => setCount(count-1);
//   return(
//     <div>
//       <button  onClick={handleClick}>Add Movie</button>
//       <button  onClick={handleDeClick}>Remove Movie</button>
//       <h5>Number of Movies: {count}</h5>
      
//     </div>
//   )
//  }

 


 
export default App;
