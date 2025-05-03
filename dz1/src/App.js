import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
function App() {
  return (
    <div>
      {/* <h1>Привет, мир!</h1>
      <p>Это мое первое React-приложение.</p> */}
      <BrowserRouter>
      <div>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user/:id/:name/:description" element={<UserPage />} />
        </Routes>
        </div>
        </BrowserRouter>
    </div>
  );
}

export default App;

// function App2() {
//   return (
//     <BrowserRouter>
//       <div>
//         <nav>
//           <Link to="/">Главная</Link> | <Link to="/users">Пользователи</Link>
//         </nav>
//         <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/user/:id" element={<UserPage />} />
//         </Routes>
//         </div>
//         </BrowserRouter>
//   )
// }
// export default App2;
