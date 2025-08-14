import React, { useRef, forwardRef, useImperativeHandle } from 'react';

const FileUpload = forwardRef(({ onDataReady }, ref) => {
const inputRef = useRef(null);

useImperativeHandle(ref, () => ({
    clickFileInput: () => {
    inputRef.current?.click();
    }
}));

const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) {
return;
}

    // Aqui você coloca a análise real
    console.log(`Arquivo ${file.name} recebido`);
    onDataReady?.({ name: file.name, type: file.type });
};

return (
    <input
    type="file"
    ref={inputRef}
    style={{ display: 'none' }}
    onChange={handleFileChange}
    />
);
});

export default FileUpload;
