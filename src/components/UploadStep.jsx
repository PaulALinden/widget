// src/components/UploadStep.jsx
import { useState } from 'react';
import { useConfigStore } from '../store/configStore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';


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

            <div className="p-8 rounded-lg border-2 w-96">
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
                        className="cursor-pointer flex-1 text-white py-2 px-4 rounded"
                    >
                        <FontAwesomeIcon className='text-[#043451]' icon={faArrowUpFromBracket} />
                        <p className='text-[#043451]'>Upload</p>
                        
                    </button>
                </div>
            </div>
        </article>
    );
}

export default UploadStep;