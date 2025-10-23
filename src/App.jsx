import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store/Store'
import UserForm from './UserForm'
import User from './User'
import './App.css';



export default function App() {
  return (
    <>
      <Provider store={store}>
        <div class="container py-5 my-5 shadow-lg bg-light rounded-4">
          <UserForm></UserForm>
          <User></User>
        </div>

      </Provider>

    </>
  )
}
