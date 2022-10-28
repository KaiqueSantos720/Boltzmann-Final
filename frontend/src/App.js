import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from './pages/Home/Home';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useAuth } from './hooks/useAuth';
import EditProflie from './pages/EditProfile/EditProflie';
import Profile from './pages/Profile/Profile';
import Photo from './pages/Photo/Photo';
import Search from './pages/Search/Search';


function App() {
  const {auth, loading} = useAuth()
  if(loading){
    return <p>Carregando...</p>
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path='/' element={auth ? <Home /> : <Navigate to='/login' />} />
            <Route path='/login' element={!auth ? <Login /> : <Navigate to='/' />} />
            <Route path='/register' element={!auth ? <Register /> : <Navigate to='/' />} />
            <Route path='/profile' element={auth ? <EditProflie /> : <Navigate to='/login' />} />
            <Route path='/users/:id' element={auth ? <Profile /> : <Navigate to='/login' />} />
            <Route path='/photos/:id' element={auth ? <Photo /> : <Navigate to='/login' /> } />
            <Route path='/search' element={auth ? <Search /> : <Navigate to='/login' /> } />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
