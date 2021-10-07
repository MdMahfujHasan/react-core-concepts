import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadUsers></LoadUsers>
      <Component name="Mahfuj" age="15"></Component>
      <Component name="Hasan" age="19"></Component>
      <Component name="Munna" age="23"></Component>
    </div>
  );
}

function LoadUsers(props) {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h1>users loaded: {users.length}</h1>
      {
        users.map(user => <Users name={user.name} email={user.email} street={user.address.street} city={user.address.city}></Users>)
      }
    </div >
  );
}

function Users(props) {
  return (
    <div className="user">
      <h3>Name: {props.name}</h3>
      <h4>Email: {props.email}</h4>
      <p>Address: {props.street} {props.city}</p>
    </div>
  );
}

function Component(props) {
  const [points, setPoints] = useState(1);
  const myStyle = {
    border: '1px solid black',
    padding: '10px'
  }
  function handleAddPoints(props) {
    const newPoints = points * 2;
    setPoints(newPoints);
  }
  return (
    <div style={{ backgroundColor: 'lightblue' }}>
      <h3 className="heading-style" style={myStyle}>this is a component</h3>
      <button onClick={handleAddPoints}>Add Points</button>
      <p><strong>Name: {props.name}</strong> ipsum dolor sit, <strong>Age: {props.age}</strong> amet consectetur adipisicing elit <strong>Points: {points}</strong>. Deleniti fugit voluptate doloribus excepturi, corrupti rem facere laborum harum? Excepturi dolorum corrupti tempore fuga, hic autem rerum cumque officia distinctio voluptate.</p>
    </div>
  );
}
export default App;
