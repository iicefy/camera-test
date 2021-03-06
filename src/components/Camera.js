import { useState, useRef } from 'react';

export default function Camera() {
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
                <img src={URL.createObjectURL(file)} alt='imgFromCamera' width='100%' />
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
    )
}