
import './App.css';
import Add_User from './Redux/user/Add_User';
import View_user from './Redux/user/View_user';
import { Link,BrowserRouter, Routes,Route} from 'react-router-dom'
import Edit_user from './Redux/user/Edit_user';
function App() {
  return (
    <div className='container'>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<View_user/>} />
      <Route path='/add_user' element={<Add_User/>} />
      <Route path='/edit_user/:id' element={<Edit_user/>}/>
    </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;
