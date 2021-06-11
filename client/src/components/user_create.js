import React from 'react'
import {Create, SimpleForm, TextInput, } from 'react-admin'

const UserCreate = (props ) => {
    return ( 
  <Create title='Добавить сотрудника' {...props}>
      <SimpleForm>
          <TextInput source = 'Имя' />
          <TextInput source = 'Фамилия' />
      </SimpleForm> 
  </Create>
    )
}

export default UserCreate