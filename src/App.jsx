import './index.css'
import { Provider } from 'react-redux'
import store from './store/store'
import CalendarView from './components/CalendarView'

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 flex flex-col items-center">
        <header className="w-full bg-white shadow-sm border-b border-gray-100 py-4 px-6 flex items-center justify-center">
          <h1 className="text-2xl md:text-3xl font-semibold text-indigo-600 tracking-tight">
            📅 ContactPoint360 – Calendar Bar Graph
          </h1>
        </header>
        <main className="w-full max-w-6xl mt-8 px-4">
          <CalendarView />
        </main>
      </div>
    </Provider>
  )
}

export default App
