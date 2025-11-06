// src/components/UploadStep.jsx
import { useRef } from 'react';
import { useConfigStore } from '../store/configStore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
import { getTranslations } from '../utils/translations';

function UploadStep() {
    const fileInputRef = useRef(null);
    const { file, setFile, currency } = useConfigStore();
    const t = getTranslations(currency).uploadStep;

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleCardClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <article className="flex flex-col items-center justify-center">
            <h1 className="font-bold text-2xl mb-10">{t.title}</h1>
            <div
                onClick={handleCardClick}
                className="p-8 rounded-lg border-2 w-96 cursor-pointer hover:bg-white"
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
                        className="text-[#043451] text-5xl"
                        icon={faArrowUpFromBracket}
                    />
                    <p className="text-[#043451] font-semibold">
                        {file ? file.name : t.uploadPrompt}
                    </p>
                    <p className="text-sm text-gray-500">{t.fileTypes}</p>
                </div>
            </div>
        </article>
    );
}

export default UploadStep;