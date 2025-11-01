import React from 'react';
import CardContainer from './components/CardContainer'
import HorizontalStepper from './components/HorizontalStepper';
function App() {
let a = 10;
  const [idx, setIdx] = React.useState(1);
  const steps = [
    { title: 'Välj glastyp', subtitle: 'Steg 1' },
    { title: 'Välj toning', subtitle: 'Steg 2' },
    { title: 'Välj glas', subtitle: 'Steg 3' },
    { title: 'Vilken typ av båge har du?', subtitle: 'Steg 4' },
    { title: 'Lägg till dina styrkor', subtitle: 'Steg 5' },
    { title: 'Vänligen gå igenom din order', subtitle: 'Klart' },
  ];

  return (
    <div className="min-h-screen w-screen bg-[#f1e4de] flex flex-col justify-between gap-6">
      <section className="h-24 w-full  flex items-center justify-center">
        <HorizontalStepper steps={steps} current={idx} onChange={setIdx}></HorizontalStepper>
      </section>

      <CardContainer title={steps[idx].title}></CardContainer>

      <section className="h-10 w-full flex items-center justify-center shadow-[0_-4px_10px_rgba(0,0,0,0.1)]">
        <button className="cursor-pointer">{`Dina glas ${a}kr  ^`}</button>
      </section>
    </div>
  );
}

export default App
