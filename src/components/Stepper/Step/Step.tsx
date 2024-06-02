import appendClasses from 'utils/appendClasses';
import { IStep } from './IStep';
import styles from './Step.module.scss';
import { STEP_STATUS } from '../constants';

const Step: React.FC<IStep> = ({ id, stepNumber, label, status }) => {
  const computedClass = status == STEP_STATUS.COMPLETED ? styles.completedSteps : styles.inProgressStep;

  return (
    <div id={id} className={styles.step}>
      <span className={appendClasses(styles.stepNumber, computedClass)}>{stepNumber}</span>
      <span className={appendClasses(styles.stepLabel, computedClass)}>{label}</span>
    </div>
  );
};

export default Step;
