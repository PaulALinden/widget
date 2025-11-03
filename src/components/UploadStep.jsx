// src/components/UploadStep.jsx
import { useRef } from 'react';
import { useConfigStore } from '../store/configStore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';

function UploadStep() {
    const fileInputRef = useRef(null);
    const { file, setFile } = useConfigStore();

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleCardClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <article className="flex flex-col items-center justify-center">
            <h1 className="font-bold text-2xl mb-10">Ladda upp synstyrka</h1>

            <div
                onClick={handleCardClick}
                className="p-8 rounded-lg border-2 border-dashed border-gray-300 w-96 cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition"
            >
                <input
                    ref={fileInputRef}
                    type="file"
                    onChange={handleFileChange}
                    accept=".pdf,.jpg,.png"
                    className="hidden"
                />

                <div className="flex flex-col items-center gap-4">
                    <FontAwesomeIcon
                        className='text-[#043451] text-5xl'
                        icon={faArrowUpFromBracket}
                    />
                    <p className='text-[#043451] font-semibold'>
                        {file ? file.name : 'Klicka för att ladda upp fil'}
                    </p>
                    <p className="text-sm text-gray-500">PDF, JPG eller PNG</p>
                </div>
            </div>
        </article>
    );
}

export default UploadStep;