import React from 'react'
import {Edit, SimpleForm, TextInput, } from 'react-admin'

const UserEdit = (props ) => {
    return ( 
  <Edit title='Добавить email' {...props}>
      <SimpleForm>
          <TextInput disabled source = 'id' />
          <TextInput source = 'email' />
      </SimpleForm>

  </Edit>
    )
}

export default UserEdit