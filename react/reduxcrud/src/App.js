import { Link, Routes,Route} from 'react-router-dom'
import Adduser from './Pages/Adduser';
import Edituser from './Pages/Edituser';
import View_user from './Pages/Viewuser';

function App() {
  return (
    
      <Routes>
        <Route path='/'  element={<View_user/>} />
        <Route path='/add_user' element={<Adduser/>} />
        <Route path='/edit_user/:id' element={<Edituser/>}/>
      </Routes>
  );
}

export default App;

