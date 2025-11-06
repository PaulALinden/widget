// src/App.jsx
import { useEffect } from 'react';
import CardContainer from './components/CardContainer';
import HorizontalStepper from './components/HorizontalStepper';
import PriceBar from './components/PriceBar';
import UploadStep from './components/UploadStep';
import SummaryStep from './components/SummaryStep';
import Spinner from './components/Spinner';
import { useConfigStore } from './store/configStore';
import { getTranslations } from './utils/translations';

function App() {
  const { config, loadConfig, currentStep } = useConfigStore();

  useEffect(() => {
    loadConfig();
  }, []);

  if (!config)
    return (
      <Spinner/>
    );

  const t = getTranslations(import.meta.env.VITE_LANGUAGE);
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
      <PriceBar/>
    </div>
  );
}

export default App;