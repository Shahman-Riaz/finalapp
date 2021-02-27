import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  // const [nayoks,setNayoks] = useState(0)
//  const [ persons, setPersons] = useState([])
//   useEffect(() => 
//   {
//     fetch('https://randomuser.me/api/?results=5')
//     .then(res => res.json())
//     .then(data => setPersons(data.results))
//   }, [])
//https://randomuser.me/api/?results=5
//https://jsonplaceholder.typicode.com/users
  
  return (
    <div className="App">
      <header className="App-header">
        <MovieCounter></MovieCounter>
        <Counter></Counter>
        <Users></Users>
        
        {/* {
          persons.map(usr => <ProfileCard name={usr.name.title}
             firstName={usr.name.first}
            lastName={ usr.name.last} 
            picture={usr.picture.large} 
            state={usr.location.state} 
            country={usr.location.country} 
            email={usr.email} 
            phone={usr.phone}></ProfileCard>)
        }
        */}
        
      </header>
    </div>
  );
}


  function ProfileCard(props){
      // const profCard = {
      //   backgroundColor:'gray',
      //   borderRadius:'20px',
      //   margin:'10px',
      //   height: '400px',
      //   width: '350px',
      //   overflow:'hidden'
      // }
      // const nameStyle={
      //   padding:'3px',
      //   color:'blue'
      // }
    return(
      // 
      <h2>Hello world</h2>
    )
  }

 
  function Counter() { 
    
    // const [count, setCount] = useState(0)
    // const handleIncrease = () => {
    //     let newCount = count + 1;
        
    //     if(newCount > 5){
    //       newCount = 5;
    //       alert('Huge number is not allowed')
    //     }
       
    //     setCount(newCount);
    // };
    

    const [count, setCount] = useState(0)
    const handleIncrease = () => setCount(count+1)
    

    
    return (
      <div>
        <h1>Count: {count}</h1>
        <button onClick={handleIncrease} style={{backgroundColor:'yellow',
      height:'50px', width:'120px', fontSize:'20px',borderRadius:'20px', cursor:'pointer'}}>Increase</button>
      
      <button onClick={() => {
        let newCount = count - 1;
        if(newCount < 0){
          newCount = 0;
          alert('Minimum is reached')
        }
      setCount(newCount)
      }} style={{backgroundColor:'yellow',
      height:'50px', width:'120px', fontSize:'20px',borderRadius:'20px', cursor:'pointer'}}>Decrease</button>
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



function MovieCounter(){
  const [movie, setMovie] = useState(5)

  return(
    <div>
      <button onClick={() => setMovie(movie+5)}>Add Movies: </button>
      <h3>Numbers of Movies: {movie}</h3>
    </div>
  )
}


// useEffect in API ..........
 
function Users(){
  const [users, setUsers] = useState([]);
  useEffect (() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      {
        users.map(user => <p>{user.name}</p>)
      }
    </div>
  )
}

 
export default App;
