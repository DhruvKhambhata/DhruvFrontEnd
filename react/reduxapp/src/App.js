import { Link,BrowserRouter, Routes,Route} from 'react-router-dom'
import View_user from './Pages/User/View_user';
import Adduser from './Pages/User/Add_user';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<View_user/>} />
        <Route path='/add_user' element={<Adduser/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;