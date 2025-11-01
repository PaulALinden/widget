//CardContainer
import Card from "./Card";
import img from '../assets/swopti.svg'
function CardContainer({title}) {
    const cards = [
        {
            imageSrc: img,
            title: 'Kort 1',
            description: 'Detta är en beskrivning för det första kortet.',
        },
        {
            imageSrc: img,
            title: 'Kort 2',
            description: 'Detta är en beskrivning för det andra kortet.',
        },
        {
            imageSrc: img,
            title: 'Kort 3',
            description: 'Detta är en beskrivning för det tredje kortet.',
        },
        {
            imageSrc: img,
            title: 'Kort 4',
            description: 'Detta är en beskrivning för det fjärde kortet.',
        },
    ];

    return (
        <article className="flex flex-col items-center justify-center flex">

            <h1 className="text-center; font-bold text-2xl mb-10">{title}</h1>

            <section className="flex flex-row flex-wrap justify-center gap-4 max-h-80">
                {cards.map((card, index) => (
                    <Card
                        key={index}
                        imageSrc={card.imageSrc}
                        title={card.title}
                        description={card.description}
                    />
                ))}
            </section>
        </article>
    )
}

export default CardContainer;