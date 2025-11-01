import { FaCheck } from "react-icons/fa";

export default function HorizontalStepper({
  steps = [],
  current = 0,
  onChange = () => { },
  clickable = true,
}) {
  if (!Array.isArray(steps) || steps.length === 0) return null;


  const handleClick = (i) => {
    if (!clickable) return;
    onChange(i);
  };


  return (
    <nav aria-label="Progress" className="w-full">
      <ol className="flex items-center justify-between w-full relative">
        {steps.map((step, i) => {
          const isActive = i === current;
          const isDone = i < current;


          return (
            <li key={step.id ?? i} className="relative flex-1 flex items-center justify-center">
              {/* connector line */}
              {i < steps.length - 1 && (
                <div className="absolute top-1/2 left-1/2 w-full h-0.5 -translate-y-1/2 z-0">
                  {/* Grå baslinje */}
                  <div className="absolute inset-0 bg-[#d2d5dc]" />
                  {/* Aktiv/färdig del */}
                  <div
                    className={`absolute inset-0 transition-all duration-300 origin-left ${i < current
                      ? 'bg-[#043451] scale-x-100':'bg-[#043451] scale-x-0'
                      }`}
                  />
                </div>
              )}

              {/* step circle */}
              <button
                type="button"
                onClick={() => handleClick(i)}
                className={`relative z-10 flex items-center justify-center w-8 h-8 rounded-full border-2 ${isDone ? 'border-[#043451]  bg-[#043451]' : isActive ? 'border-[#043451]  bg-white' : 'border-gray-300 bg-white'
                  } ${clickable ? 'cursor-pointer' : 'cursor-default'}`}
              >
                {isDone ? (
                  <FaCheck className="text-white"/>
                ) : isActive ? (
                  <span className="w-2 h-2 bg-[#043451] rounded-full" />
                ) : null}
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
/*
// Demo usage as a named export (optional)
export function StepperDemo() {
  const [idx, setIdx] = React.useState(1);
  const steps = [
    { title: 'Välj', subtitle: 'Steg 1' },
    { title: 'Information', subtitle: 'Steg 2' },
    { title: 'Sammanfattning', subtitle: 'Steg 3' },
    { title: 'Klart', subtitle: 'Slutför' },
  ];

  return (
    <div className="p-4 max-w-3xl">
      <HorizontalStepper steps={steps} current={idx} onChange={setIdx} />
      <div className="mt-6 flex gap-2">
        <button onClick={() => setIdx(Math.max(0, idx - 1))} className="px-3 py-1 border rounded">Föregående</button>
        <button onClick={() => setIdx(Math.min(steps.length - 1, idx + 1))} className="px-3 py-1 border rounded">Nästa</button>
      </div>
    </div>
  );
}
*/