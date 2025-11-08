// Card.jsx — enkel presentational-komponent för ett alternativ (glas, toning eller båge)
// Props: imageSrc, title, description, onClick
function Card({ imageSrc, title, description, onClick, price }) {
    return (
        <div
            onClick={onClick}
            className={`min-h-[280px] w-[229px] rounded-lg border-2 border-[#043451] overflow-hidden hover:bg-[#fafafb] cursor-pointer text-center '
                }`}
        >
            {imageSrc && (
                <img src={imageSrc} alt={title} className="w-full h-32 object-cover" />
            )}
            <div className="p-3">
                <h2 className="text-lg font-semibold text-[#043451]">{title}</h2>
                <p className="mt-1 text-sm text-gray-600">{description}</p>

                <p className="mt-10 font-semibold text-[#043451]">{`${price}:-`}</p>
            </div>
        </div>
    );
}

export default Card;