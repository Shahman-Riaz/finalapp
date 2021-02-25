import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  // const [nayoks,setNayoks] = useState(0)
 const [ persons, setPersons] = useState([])
  useEffect(() => 
  {
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => setPersons(data.results))
  }, [])
//https://randomuser.me/api/?results=5
//https://jsonplaceholder.typicode.com/users
  
  return (
    <div className="App">
      <header className="App-header">
        
        
        {
          persons.map(usr => <ProfileCard name={usr.name.title}
             firstName={usr.name.first}
            lastName={ usr.name.last} 
            picture={usr.picture.large} 
            state={usr.location.state} 
            country={usr.location.country} 
            email={usr.email} 
            phone={usr.phone}></ProfileCard>)
        }
       
        
      </header>
    </div>
  );
}


  function ProfileCard(props){
      const profCard = {
        backgroundColor:'gray',
        borderRadius:'20px',
        margin:'10px',
        height: '400px',
        width: '350px',
        overflow:'hidden'
      }
      const nameStyle={
        padding:'3px',
        color:'blue'
      }
    return(
      <div style={profCard}>  
        <div>
        <div><img src={props.picture} style={{borderRadius:'50%', marginTop:'30px'}}></img></div>
        <div style={nameStyle}><h2><u style={{cursor:'pointer'}}>{props.name} {props.firstName} {props.lastName}</u></h2></div>
        
        <p>{props.email}</p>
        <p>{props.phone}</p>
        </div>
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
