import { useEffect, useState } from 'react';
import { IStepper } from './IStepper';
import { IStep, StepStatus } from './Step/IStep';
import Step from './Step/Step';
import styles from './Stepper.module.scss';
import { STEP_STATUS } from './constants';

const Stepper: React.FC<IStepper> = ({ stepDetails, activeStep }) => {
  const [steps, setSteps] = useState<IStep[]>();

  useEffect(() => {
    setSteps(stepDetails);
  }, [stepDetails]);

  useEffect(() => {
    if (steps) {
      const updatedSteps = steps.filter((step) => {
        if (step?.id == activeStep) {
          step.status = STEP_STATUS.IN_PROGRESS as StepStatus;
        }
        return step;
      });
      setSteps(updatedSteps);
    }
  }, [activeStep]);

  return (
    <section className={styles.stepperContainer}>
      {steps?.map((step, index) => {
        return (
          <div className={styles.step}>
            <Step key={`step-${index}`} {...step} />
            {index !== steps?.length - 1 && <div className={styles.stepSeperator}></div>}
          </div>
        );
      })}
    </section>
  );
};

export default Stepper;
