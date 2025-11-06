import { FaCheck } from "react-icons/fa";
import arrow from "../assets/arrow.svg";
import { useConfigStore } from '../store/configStore';

export default function HorizontalStepper({
  steps = [],
  current = 0,
}) {

  const prevStep = useConfigStore((state) => state.prevStep);

  if (!Array.isArray(steps) || steps.length === 0) return null;

  return (
    <nav aria-label="Progress" className="w-full relative">
      {current > 0 && (
        <button
          onClick={prevStep}
          className="absolute z-1 left-4 top-1/2 -translate-y-1/2 cursor-pointer hover:opacity-70"
        >
          <img src={arrow} className="max-h-10 pointer-events-none" alt="Tillbaka" />
        </button>
      )}

      <ol className="flex items-center justify-between w-full relative">
        {steps.map((step, i) => {
          const isActive = i === current;
          const isDone = i < current;

          return (
            <li key={step.id ?? i} className="relative flex-1 flex items-center justify-center">
              {i < steps.length - 1 && (
                <div className="absolute top-1/2 left-1/2 w-full h-0.5 -translate-y-1/2 z-0">
                  <div className="absolute inset-0 bg-[#d2d5dc]" />
                  <div
                    className={`absolute inset-0 transition-all duration-300 origin-left ${i < current ? 'bg-[#043451] scale-x-100' : 'bg-[#043451] scale-x-0'
                      }`}
                  />
                </div>
              )}

              <div
                className={`relative z-10 flex items-center justify-center w-8 h-8 rounded-full border-2 ${isDone
                    ? 'border-[#043451] bg-[#043451]'
                    : isActive
                      ? 'border-[#043451] bg-white'
                      : 'border-gray-300 bg-white'
                  }`}
              >
                {isDone ? (
                  <FaCheck className="text-white" />
                ) : isActive ? (
                  <span className="w-2 h-2 bg-[#043451] rounded-full" />
                ) : null}
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}