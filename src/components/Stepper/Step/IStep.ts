export interface IStep {
  id: string;
  stepNumber: string;
  label: string;
  status: StepStatus;
}

export type StepStatus = 'TODO' | 'IN_PROGRESS' | 'COMPLETED';
