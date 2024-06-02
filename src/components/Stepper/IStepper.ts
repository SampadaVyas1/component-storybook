import { IStep } from './Step/IStep';

export interface IStepper {
  stepDetails: IStep[];
  activeStep: string;
}
