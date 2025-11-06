// src/App.jsx
import { useEffect } from 'react';
import CardContainer from './components/CardContainer';
import HorizontalStepper from './components/HorizontalStepper';
import PriceBar from './components/PriceBar';
import UploadStep from './components/UploadStep';
import SummaryStep from './components/SummaryStep';
import { useConfigStore } from './store/configStore';
import { getTranslations } from './utils/translations';

function App() {
  const { config, loadConfig, currentStep, currency } = useConfigStore();

  useEffect(() => {
    loadConfig();
  }, []);

  if (!config)
    return (
      <div className="min-h-screen w-screen bg-[#f1e4de] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#043451]"></div>
          <p className="text-[#043451] font-semibold">
            {currency === 'sek' ? 'Laddar...' : 'Loading...'}
          </p>
        </div>
      </div>
    );

  const t = getTranslations(currency);
  const steps = [
    { title: t.steps[0].title, data: config.glassTypes, key: 'glassType' },
    { title: t.steps[1].title, data: config.tints, key: 'tint' },
    { title: t.steps[2].title, data: config.frames, key: 'frame' },
    { title: t.steps[3].title, type: 'upload' },
    { title: t.steps[4].title, type: 'summary' },
  ];

  const currentStepData = steps[currentStep];

  return (
    <div className="min-h-screen w-screen bg-[#f1e4de] flex flex-col justify-between gap-6">
      <section className="h-24 w-full flex items-center justify-center">
        <HorizontalStepper steps={steps} current={currentStep} />
      </section>
      {currentStepData.type === 'upload' ? (
        <UploadStep />
      ) : currentStepData.type === 'summary' ? (
        <SummaryStep />
      ) : (
        <CardContainer
          title={currentStepData.title}
          data={currentStepData.data}
          selectionKey={currentStepData.key}
        />
      )}
      <PriceBar />
    </div>
  );
}

export default App;