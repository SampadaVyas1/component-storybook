import { ChangeEvent, forwardRef, useMemo } from 'react';
import style from './Checkbox.module.scss';
import { ICheckbox } from './ICheckbox';
import { CHECKBOX_ICONS } from './constant';
import { SVG_COLOR_GREY } from '../../utils/svg/constant';

const Checkbox = forwardRef<HTMLInputElement, ICheckbox>(({ icons = {}, ...props }, ref) => {
  const { checked, intermediate, disabled = false, className, onChange } = props;

  const {
    Checked = CHECKBOX_ICONS.Checked,
    Intermediate = CHECKBOX_ICONS.Intermediate,
    Unchecked = CHECKBOX_ICONS.Unchecked
  } = icons;

  const renderIcon = useMemo(() => {
    return intermediate ? (
      <Intermediate color={disabled ? SVG_COLOR_GREY : ''} />
    ) : checked ? (
      <Checked color={disabled ? SVG_COLOR_GREY : ''} />
    ) : (
      <Unchecked color={disabled ? SVG_COLOR_GREY : ''} />
    );
  }, [disabled, checked, intermediate]);

  const handleCheckboxClick = () => {
    if (!disabled)
      onChange?.({
        target: {
          type: 'checkbox',
          checked: !checked
        } as HTMLInputElement
      } as ChangeEvent<HTMLInputElement>);
  };

  return (
    <div
      className={[style.checkbox, disabled ? style.disabledCheckbox : '', className].join(' ')}
      onClick={handleCheckboxClick}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if ((event.code === 'Enter' || event.code === 'Space') && !disabled) {
          handleCheckboxClick();
        }
      }}
    >
      <input
        {...props}
        ref={ref}
        type="checkbox"
        className={[style.checkboxInput, className].join(' ')}
        tabIndex={-1}
      />
      <div className={style.icon}>{renderIcon}</div>
    </div>
  );
});

Checkbox.displayName = 'CheckBox';

export default Checkbox;
