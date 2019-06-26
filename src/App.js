import React from 'react'
import logo from './logo.svg'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'

import routeStack from './routes'
import NavigationBar from './components/common/NavigationBar'

const renderRoutes = () => {
  return routeStack.map((route, key) => {
    return (
      <Route
        path={route.path}
        exact={route.exact}
        component={route.component}
        key={key}/>
    )
  })
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className='App'>
          {renderRoutes()}
          <NavigationBar />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App
