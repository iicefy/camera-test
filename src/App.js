import { useState, useRef } from 'react';

function App() {

  const [file, setFile] = useState()
  const cameraRef = useRef(null)

  const onChange = (e) => {
    const file = e.target.files[0];
    setFile(file)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <input
        accept='image/*'
        id='icon-button-file'
        type='file'
        capture='environment'
        onChange={(e) => onChange(e)}
        ref={cameraRef}
      />
      {
        file &&
        <img src={URL.createObjectURL(file)} alt='imgFromCamera' width='360px' />
      }
      <button
        onClick={() => {
          cameraRef.current.value = "";
          setFile()
        }}
      >
        delete media
      </button>
    </div>
  );
}

export default App;
