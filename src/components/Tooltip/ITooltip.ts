import { ITooltip as IReactTooltip } from 'react-tooltip';

export interface ITooltip extends Omit<IReactTooltip, 'anchorSelect'> {
  anchorElement: IReactTooltip['anchorSelect'];
}
