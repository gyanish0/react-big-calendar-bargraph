import './index.css'
import { Provider } from 'react-redux'
import store from './store/store'
import CalendarView from './components/CalendarView'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header style={{ padding: 12 }}>
          <h1>ContactPoint360 — Calendar Bargraph</h1>
        </header>
        <main>
          <CalendarView />
        </main>
      </div>
    </Provider>
  )
}

export default App
