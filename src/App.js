import './App.css';
import Homepage from  "./pages/homepage";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Notes from './pages/notes';
import Form from './components/form';
import AddNote from './pages/add_note';
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/notes" element={<Notes />} />
      <Route path="/addnote" element={<AddNote />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
