import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import TrackDetail from './components/TrackDetail/TrackDetail'
import PageNotFound from './components/PageNotFound/PageNotFound'
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/track/:id' element={<TrackDetail />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>

      </div>
    </BrowserRouter >

  );
}

export default App;
