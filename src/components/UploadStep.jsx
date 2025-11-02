// src/components/UploadStep.jsx
import { useState } from 'react';
import { useConfigStore } from '../store/configStore';

function UploadStep() {
    const [file, setFile] = useState(null);
    const nextStep = useConfigStore((state) => state.nextStep);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = () => {
        // TODO: Upload till backend senare
        console.log('Upload file:', file);
        nextStep();
    };

    const handleSkip = () => {
        nextStep();
    };

    return (
        <article className="flex flex-col items-center justify-center">
            <h1 className="font-bold text-2xl mb-10">Ladda upp synstyrka</h1>

            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <input
                    type="file"
                    onChange={handleFileChange}
                    accept=".pdf,.jpg,.png"
                    className="mb-4"
                />

                {file && <p className="text-sm text-gray-600 mb-4">Vald fil: {file.name}</p>}

                <div className="flex gap-4">
                    <button
                        onClick={handleUpload}
                        disabled={!file}
                        className="cursor-pointer flex-1 bg-blue-600 text-white py-2 px-4 rounded disabled:bg-gray-300"
                    >
                        Ladda upp
                    </button>

                    <button
                        onClick={handleSkip}
                        className="cursor-pointer flex-1 bg-gray-200 py-2 px-4 rounded"
                    >
                        Hoppa över
                    </button>
                </div>
            </div>
        </article>
    );
}

export default UploadStep;