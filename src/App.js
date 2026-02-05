import Header from './header';
import Footer from './footer';
import Login from './login';
import Registration from './registration';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>

      <Header />

      <nav>
        <Link to="/login">Login</Link> |{" "}
        <Link to="/registration">Registration</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;

