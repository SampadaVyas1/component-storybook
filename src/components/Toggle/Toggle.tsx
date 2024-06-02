import React, { useEffect, useState } from 'react';
import { IToggle } from './IToggle';
import style from './Toggle.module.scss';

const Toggle: React.FC<IToggle> = ({
  defaultChecked = false,
  disabled = false,
  toggleSize = 'small',
  onChange,
  renderThumb,
  renderTrack,
  toggleThumbProps,
  toggleTrackProps,
  ...toggleProps
}) => {
  const [isSelected, setIsSelected] = useState<boolean>(defaultChecked);

  const { className: thumbClass, ...restThumbProps } = toggleThumbProps || {};

  const { className: trackClass, ...restTrackProps } = toggleTrackProps || {};

  const handleToggle = () => {
    if (!disabled) {
      setIsSelected((prev) => {
        onChange(!prev);
        return !prev;
      });
    }
  };

  useEffect(() => {
    setIsSelected(defaultChecked);
  }, [defaultChecked]);

  return (
    <div className={style.mainContainer}>
      <div
        className={[
          style.toggleSwitch,
          style[toggleSize.toLowerCase()],
          isSelected ? style.checked : '',
          disabled ? style.disabled : ''
        ].join(' ')}
        tabIndex={0}
        role="button"
        onKeyDown={(event) => {
          if (event.code === 'Enter' || event.code === 'Space') {
            handleToggle();
          }
        }}
      >
        <input
          type="checkbox"
          checked={isSelected}
          disabled={disabled}
          onChange={handleToggle}
          defaultChecked={true}
          className={style.checkbox}
          aria-disabled={disabled}
          aria-label={toggleProps?.toString()}
          aria-describedby={toggleProps?.toString()}
          {...toggleProps}
        />
        {renderTrack?.(isSelected) || (
          <div className={[style.track, trackClass].join(' ')} {...restTrackProps} />
        )}
        {renderThumb?.(isSelected) || (
          <div className={style.thumbContainer}>
            <div className={[style.thumb, thumbClass].join(' ')} {...restThumbProps} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Toggle;
