import React, { useState } from 'react'
import Layout from './components/Layout'
import Form from './components/Form';
import Display from './components/Display';

const App = () => {
  const [dark, setDark] = useState(false);
  const [todos, setTodos] = useState([]);
  return (
      <Layout dark={dark} setDark={setDark}>
        <Form setTodos={setTodos}/>
        <Display todos={todos} setTodos={setTodos}/>
      </Layout>
  )
}

export default App