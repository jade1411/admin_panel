import React from 'react'
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import UserList from './components/user_list'
import UserCreate from './components/user_create'
import UserEdit from './components/user_edit'

function App() {
  return ( 
  <Admin dataProvider={restProvider('http://localhost:3000')}>
  <Resource name='users' list={UserList} create={UserCreate} edit={UserEdit} />
  </Admin>
  )
}

export default App;
