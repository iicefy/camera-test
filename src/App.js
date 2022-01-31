import Camera from './components/Camera';
import PDFReader from './components/PDF';
import './App.css';

function App() {

  return (
    <div className='container'>
      <div className='content'>
        <Camera />
      </div>
      <div className='content'>
        <PDFReader />
      </div>

    </div>
  );
}

export default App;
