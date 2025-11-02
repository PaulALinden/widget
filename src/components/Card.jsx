// Card.jsx
function Card({ imageSrc, title, description, onClick, selected }) {
    return (
        <div
            onClick={onClick}
            className={`min-h-[280px] w-[229px] rounded-lg border-2 overflow-hidden hover:bg-[#fafafb] cursor-pointer text-center ${selected ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                }`}
        >
            {imageSrc && (
                <img src={imageSrc} alt={title} className="w-full h-32 object-cover" />
            )}
            <div className="p-3">
                <h2 className="text-lg font-semibold">{title}</h2>
                <p className="mt-1 text-sm text-gray-600">{description}</p>
            </div>
        </div>
    );
}

export default Card;