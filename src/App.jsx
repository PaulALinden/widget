import React from 'react';
import CardContainer from './components/CardContainer'
import HorizontalStepper from './components/HorizontalStepper';
function App() {
let a = 10;
  const [idx, setIdx] = React.useState(1);
  const steps = [
    { title: 'Välj', subtitle: 'Steg 1' },
    { title: 'Information', subtitle: 'Steg 2' },
    { title: 'Sammanfattning', subtitle: 'Steg 3' },
    { title: 'Klart', subtitle: 'Slutför' },
  ];

  return (
    <div className="min-h-screen w-screen bg-[#f1e4de] flex flex-col justify-between gap-6">
      <section className="h-24 w-full  flex items-center justify-center">
        <HorizontalStepper steps={steps} current={idx} onChange={setIdx}></HorizontalStepper>
      </section>

      <CardContainer></CardContainer>

      <section className="h-10 w-full flex items-center justify-center shadow-[0_-4px_10px_rgba(0,0,0,0.1)]">
        <button className="cursor-pointer">{`Dina glas ${a}kr  ^`}</button>
      </section>
    </div>
  );
}

export default App
