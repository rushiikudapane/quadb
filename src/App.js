import react, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import BookingForm from './components/BookingForm/BookingForm';
import Movies from './components/MoviesAPI/Movies';
import Summary from './components/Summary/Summary';


function App() {
  const [parentBackground, setParentBackground] = useState();
  const [parentSummary, setParentSummary] = useState();
  const [formDataName, setFormDataName] = useState();
  const [formDataTime, setFormDataTime] = useState();


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Movies setParentBackground={setParentBackground} setParentSummary={setParentSummary} setFormDataName={setFormDataName} setFormDataTime={setFormDataTime} />} />
          <Route path='/summary' element={<Summary data={parentBackground} parentSummary={parentSummary} formName={formDataName} formTime={formDataTime} />} />
        </Routes>
      </BrowserRouter>
      {/* <BookingForm /> */}
    </div>
  );
}

export default App;
