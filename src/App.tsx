import { Employees } from './components/features/employees/Employees'
import { Footer } from './components/layout/footer/Footer'
import { Header } from './components/layout/header/Header'
import { Form } from './components/features/form/Form'

function App() {

  return (
    <>
      <Header />
      <Employees />
      <Form />
      <Footer />
    </>
  )
}

export default App
