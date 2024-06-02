import React, { useState, useEffect, useRef, ChangeEvent, useMemo, useLayoutEffect } from 'react';
import { IDropdownOption, IDropdown, dropdownPositions } from './interfaces';
import styles from './Dropdown.module.scss';
import useOutsideClick from '../../hooks/useOutsideClick';
import Checkbox from '../Checkbox/Checkbox';
import ChevronDownIcon from '../../icons/ChevronDownIcon';
import { Typography } from '../Typography/Typography';
import Chip from '../Chip/Chip';
import useOverlayPosition, { OverlayPosition } from '../../hooks/useOverlayPosition';
import { Input } from '../Input/Input';
import { Tooltip } from 'react-tooltip';

const Dropdown: React.FC<IDropdown> = ({
  options,
  isMulti = false,
  displayOptionLimit = 5,
  chipsLimit = 4,
  placeholder = 'Select',
  showSelectAll = false,
  value,
  disabled = false,
  hasTooltip = false,
  containerProps,
  defaultPosition,
  inputProps,
  inputContainerProps,
  optionContainerProps,
  dropdownItemClassName,
  tooltipClassName,
  checkboxIconProps,
  renderSelectedValue,
  renderDropdownOption,
  onChange,
  onSearch
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedOptions, setSelectedOption] = useState<
    IDropdownOption[] | IDropdownOption | undefined
  >();
  const [searchText, setSearchText] = useState('');
  const [totalHeight, setTotalHeight] = useState(0);
  const [showInput, setShowInput] = useState(false);
  const [overlayPosition, setOverlayPosition] = useState<dropdownPositions>('Bottom');
  const [autoFocusEnabled, setAutoFocusEnabled] = useState(false);

  const dropdownElementRef = useRef<HTMLDivElement>(null);
  const optionElementRef = useRef<HTMLDivElement[]>([]);
  const optionsContainerRef = useRef<HTMLDivElement>(null);

  const dropdownId = Math.random().toString(36).substring(2, 15);

  const { position } = useOverlayPosition(dropdownElementRef, optionsContainerRef, {
    defaultPosition: 'Bottom',
    open: isMenuOpen
  });

  const {
    ref: inputRef,
    readOnly: readOnlyInput,
    className: inputClassName,
    ...restInputProps
  } = inputProps || {};
  const { className: inputContainerClass, ...restInputContainerProps } = inputContainerProps || {};
  const { className: optionContainerClass, ...restOptionContainerProps } =
    optionContainerProps || {};
  const { className: dropdownContainerClass, ...restDropdownContainerProps } = containerProps || {};

  useLayoutEffect(() => {
    if (isMenuOpen) {
      const totalHeight = optionElementRef?.current
        ?.slice(0, displayOptionLimit)
        ?.reduce((total: number, option: HTMLDivElement) => {
          if (option) {
            return total + option.offsetHeight;
          }
          return total;
        }, 0);
      setTotalHeight(totalHeight || 0);
    } else {
      optionElementRef.current = [];
    }
  }, [isMenuOpen, displayOptionLimit, options]);

  useEffect(() => {
    const newValue = value || (isMulti ? [] : undefined);
    setSelectedOption(newValue);
    setShowInput(!Array.isArray(newValue) || !newValue.length);
  }, [value]);

  useEffect(() => {
    if (renderSelectedValue && Array.isArray(selectedOptions) && selectedOptions.length > 0) {
      setShowInput(false);
    } else {
      setShowInput(!Array.isArray(selectedOptions) || !selectedOptions.length);
    }
  }, [isMenuOpen, selectedOptions]);

  useEffect(() => {
    if (defaultPosition) {
      setOverlayPosition(defaultPosition);
    } else {
      setOverlayPosition(position ?? 'Bottom');
    }
  }, [defaultPosition, position]);

  useOutsideClick(dropdownElementRef, () => setIsMenuOpen(false));

  const dropdownOptions = useMemo(() => {
    if (searchText.length) {
      return onSearch
        ? onSearch(searchText)
        : options.filter((option) => option.label.toLowerCase().includes(searchText.toLowerCase()));
    }

    return options;
  }, [searchText, options]);

  const handleSelectAllChange = () => {
    setSelectedOption((prev) => {
      const isAllSelected = Array.isArray(prev) && prev.length === dropdownOptions.length;
      const options = isAllSelected ? [] : [...dropdownOptions];
      onChange?.(options);
      setShowInput(isAllSelected);
      return options;
    });
  };

  const checkSelectedOptions = (option: IDropdownOption) =>
    Array.isArray(selectedOptions)
      ? selectedOptions.some((selectedItem) => selectedItem.id === option.id)
      : selectedOptions?.id === option.id;

  const handleDiscardChip = (option: IDropdownOption, event: React.MouseEvent) => {
    event.stopPropagation();
    setSelectedOption((prev) => {
      const newOptions = Array.isArray(prev) ? prev.filter((item) => item.id !== option.id) : [];
      setShowInput(!newOptions.length);
      onChange?.(newOptions);
      return newOptions;
    });
  };

  const handleOnSelect = (option: IDropdownOption) => {
    setSelectedOption((prev) => {
      if (!isMulti) {
        setIsMenuOpen(false);
        onChange?.(option);
        return option;
      } else if (Array.isArray(prev)) {
        const updatedOptions = checkSelectedOptions(option)
          ? prev.filter((item) => item.id !== option.id)
          : [...prev, option];
        setShowInput(!updatedOptions.length);
        onChange?.(updatedOptions);
        return updatedOptions;
      }
    });

    setSearchText('');
  };

  const toggleInput = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    if (disabled) return;
    if (isMenuOpen && isMulti) {
      setShowInput(true);
      setAutoFocusEnabled(true);
    } else {
      setIsMenuOpen((prevMenuOpen) => !prevMenuOpen);
      setShowInput(false);
      setAutoFocusEnabled(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  return (
    <div
      ref={dropdownElementRef}
      className={[
        styles.dropdownContainer,
        dropdownContainerClass,
        disabled ? styles.disabled : ''
      ].join(' ')}
      {...restDropdownContainerProps}
    >
      {showInput ? (
        <Input
          disabled={disabled}
          autoFocus={autoFocusEnabled}
          onFocus={(event) => {
            event.stopPropagation();
            if (!isMenuOpen) {
              setIsMenuOpen(true);
            }
          }}
          placeholder={
            !Array.isArray(selectedOptions) ? selectedOptions?.label || placeholder : placeholder
          }
          containerProps={{ className: [styles.input, inputContainerClass].join(' ') }}
          onMouseDown={(event) => {
            event.stopPropagation();
            toggleMenu();
          }}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setSearchText(event?.currentTarget?.value);
          }}
          className={[
            styles.nativeInput,
            selectedOptions && !Array.isArray(selectedOptions) ? styles.selectedSingleOption : '',
            inputClassName
          ].join(' ')}
          value={searchText}
          aria-autocomplete="list"
          aria-haspopup="listbox"
          readOnly={readOnlyInput}
          endAdornment={
            <div
              className={styles.dropdownArrowIcon}
              onClick={(event) => {
                event.stopPropagation();
                toggleMenu();
              }}
              role="button"
              tabIndex={0}
              onKeyDown={() => setIsMenuOpen((prevMenuOpen) => !prevMenuOpen)}
              aria-label={isMenuOpen ? 'Close dropdown' : 'Open dropdown'}
            >
              <ChevronDownIcon
                className={[
                  styles.arrowIcon,
                  !isMenuOpen || disabled ? styles.arrowOpen : styles.arrowClose
                ].join(' ')}
              />
            </div>
          }
          {...restInputProps}
        />
      ) : (
        <div
          className={[styles.chipContainer, inputContainerClass].join(' ')}
          role="button"
          tabIndex={0}
          onKeyDown={() => toggleInput}
          onClick={toggleInput}
          {...restInputContainerProps}
        >
          {isMulti &&
            Array.isArray(selectedOptions) &&
            selectedOptions.slice(0, chipsLimit).map((option) => (
              <>
                {renderSelectedValue ? (
                  renderSelectedValue(option, handleDiscardChip)
                ) : (
                  <Chip
                    key={`chip-${option.id}`}
                    isRemovable={!disabled}
                    variant="Rounded"
                    subVariant="Filled"
                    active={false}
                    onRemoveIconClick={(event) => {
                      handleDiscardChip(option, event);
                    }}
                  >
                    {option.label}
                  </Chip>
                )}
              </>
            ))}
          {Array.isArray(selectedOptions) && selectedOptions.length > chipsLimit && (
            <>
              {hasTooltip && (
                <Tooltip
                  id={`chips-tooltip-${dropdownId}`}
                  place="bottom"
                  className={[styles.tooltipWrapperContainer, tooltipClassName].join(' ')}
                  clickable
                >
                  {selectedOptions.slice(chipsLimit, selectedOptions.length).map((chipOption) => (
                    <Chip
                      className={styles.chip}
                      key={`filter-chip-${chipOption.id}`}
                      isRemovable={!disabled}
                      onRemoveIconClick={(event) => {
                        handleDiscardChip(chipOption, event);
                      }}
                    >
                      {chipOption.label}
                    </Chip>
                  ))}
                </Tooltip>
              )}
              <Typography
                data-tooltip-id={`chips-tooltip-${dropdownId}`}
                className={[styles.chipCount, hasTooltip ? styles.hasTooltip : ''].join(' ')}
              >
                +{selectedOptions?.length - chipsLimit}
              </Typography>
            </>
          )}

          {!isMulti &&
            renderSelectedValue &&
            !Array.isArray(selectedOptions) &&
            selectedOptions &&
            renderSelectedValue(selectedOptions)}
        </div>
      )}
      {isMenuOpen && !disabled && (
        <div
          ref={optionsContainerRef}
          className={[
            styles.optionContainer,
            overlayPosition === OverlayPosition.Top ? styles.topAlign : styles.bottomAlign,
            optionContainerClass
          ].join(' ')}
          style={{ maxHeight: totalHeight }}
          {...restOptionContainerProps}
        >
          {showSelectAll &&
            isMulti &&
            Boolean(dropdownOptions.length) &&
            Array.isArray(selectedOptions) && (
              <div className={[styles.option, dropdownItemClassName, styles.selectAll].join(' ')}>
                <Checkbox
                  id="select-all"
                  checked={selectedOptions.length === dropdownOptions.length}
                  onChange={handleSelectAllChange}
                  icons={checkboxIconProps}
                />
                <label htmlFor="select-all" className={styles.label}>
                  <Typography variant="b3-regular">Select All</Typography>
                </label>
              </div>
            )}
          {dropdownOptions?.length ? (
            dropdownOptions?.map((option) => {
              return renderDropdownOption ? (
                renderDropdownOption(
                  option,

                  (ref: HTMLDivElement) => {
                    optionElementRef.current = [...optionElementRef.current, ref];
                  },
                  handleOnSelect
                )
              ) : (
                <div
                  ref={(divRef) => {
                    optionElementRef.current = [...optionElementRef.current, divRef!];
                  }}
                  onKeyDown={() => handleOnSelect(option)}
                  tabIndex={0}
                  role="button"
                  className={[
                    styles.option,
                    dropdownItemClassName,
                    option.disabled ? styles.disabled : '',
                    checkSelectedOptions(option) ? styles.selectedOption : ''
                  ].join(' ')}
                  key={`option-${option.id}`}
                  onClick={() => {
                    handleOnSelect(option);
                  }}
                >
                  {!isMulti ? (
                    <Typography variant="b3-regular">{option.label}</Typography>
                  ) : (
                    <div className={styles.checkboxOption}>
                      <Checkbox checked={checkSelectedOptions(option)} icons={checkboxIconProps} />
                      <label className={styles.label}>
                        <Typography variant="b3-regular">{option.label}</Typography>
                      </label>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className={styles.noMatches}>
              <Typography variant="b3-regular">No items found</Typography>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
