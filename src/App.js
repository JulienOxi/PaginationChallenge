import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Pagination from './Pagination';

function App() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then((response) => {
      setTodos(response.data)
    })
  }, []);


  return <Pagination data={todos} />;
}

export default App;
