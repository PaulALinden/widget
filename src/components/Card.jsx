// Card.jsx
//import PropTypes from 'prop-types';

function Card({ imageSrc, title, description }) {
    return (
        <div className="max-w-3xs rounded-lg shadow-md overflow-hidden bg-white">
            <img
                src={imageSrc}
                alt={title}
                className="w-full h-32 object-cover"
            />
            <div className="p-3">
                <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
                <p className="mt-1 text-sm text-gray-600">{description}</p>
            </div>
        </div>
    );
}

/*Card.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};*/

export default Card;