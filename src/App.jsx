import { useEffect } from 'react';
import CardContainer from './components/CardContainer';
import HorizontalStepper from './components/HorizontalStepper';
import PriceBar from './components/PriceBar';
import UploadStep from './components/UploadStep'
import SummaryStep from './components/SummaryStep'
import { useConfigStore } from './store/configStore';

function App() {
  const { config, loadConfig, currentStep } = useConfigStore();

  useEffect(() => {
    loadConfig('store_1');
  }, []);

  if (!config) return <div>Loading...</div>;

  const steps = [
    { title: 'Välj glastyp', data: config.glassTypes, key: 'glassType' },
    { title: 'Välj toning', data: config.tints, key: 'tint' },
    { title: 'Vilken typ av båge?', data: config.frames, key: 'frame' },
    { title: 'Ladda upp synstyrka', type: 'upload' },
    { title: 'Granska din order', type: 'summary' },
  ];

  const currentStepData = steps[currentStep];

  return (
    <div className="min-h-screen w-screen bg-[#f1e4de] flex flex-col justify-between gap-6">
      <section className="h-24 w-full flex items-center justify-center">
        <HorizontalStepper
          steps={steps}
          current={currentStep}
          clickable={false}  // Disable clicking på stepper
        />
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