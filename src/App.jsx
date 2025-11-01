import { useState } from 'react'
import CardContainer from './components/CardContainer';

function App() {

  

  return (
    <div className="min-h-screen w-screen bg-[#f1e4de] flex flex-col justify-between gap-6 p-4">
      <section className="h-24 w-full bg-gray-200 flex items-center justify-center">
        <h2 className="text-2xl font-semibold text-gray-800">Toppsektion</h2>
      </section>

      <CardContainer></CardContainer>

      <section className="h-24 w-full bg-gray-200 flex items-center justify-center">
        <h2 className="text-2xl font-semibold text-gray-800">Bottenssektion</h2>
      </section>
    </div>
  );
}

export default App
