import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store/Store'


export default function App() {
  return (
      <>
          <Provider store={store}>
              <div className='container justify-content-center align-items-center d-flex'>
                  <App></App>
                  
              </div>
              
          </Provider>
      
    </>
  )
}
