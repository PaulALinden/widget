//CardContainer
import Card from "./Card";

function CardContainer() {
    const cards = [
        {
            imageSrc: 'https://via.placeholder.com/300x200?text=Card+1',
            title: 'Kort 1',
            description: 'Detta är en beskrivning för det första kortet.',
        },
        {
            imageSrc: 'https://via.placeholder.com/300x200?text=Card+2',
            title: 'Kort 2',
            description: 'Detta är en beskrivning för det andra kortet.',
        },
        {
            imageSrc: 'https://via.placeholder.com/300x200?text=Card+3',
            title: 'Kort 3',
            description: 'Detta är en beskrivning för det tredje kortet.',
        },
        {
            imageSrc: 'https://via.placeholder.com/300x200?text=Card+4',
            title: 'Kort 4',
            description: 'Detta är en beskrivning för det fjärde kortet.',
        },
    ];

    return (
        <article class="flex flex-col items-center justify-center flex">

            <h1 class="text-align: center; font-bold text-2xl mb-10">Välj glastyp</h1>

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