import CrossIcon from 'icons/CrossIcon';
import { isEmpty } from 'lodash';
import { forwardRef, memo } from 'react';
import { MAX_CHIP_TOOLTIP_LENGTH, MAX_FILTER_CHIP_LENGTH, MAX_FILTER_CHIP_LENGTH_FOR_SMALL_SCREEN } from './constant';
import styles from './FilterChip.module.scss';
import { Typography } from 'components/Typography/Typography';
import { IFilterChipProps } from './IFilterChip';
import TooltipWrapper from 'components/Tooltip/TooltipWrapper';

const FilterChip = forwardRef<HTMLDivElement, IFilterChipProps>(
  ({ showToolTip, onRemove, selectedFilter, screenSize, showMoreOptions, handleShowMore }) => {
    if (isEmpty(selectedFilter)) return <></>;

    const chipsCountToDisplay =
      screenSize && screenSize <= 1280 ? MAX_FILTER_CHIP_LENGTH_FOR_SMALL_SCREEN : MAX_FILTER_CHIP_LENGTH;

    const chipsData =
      selectedFilter?.length > MAX_FILTER_CHIP_LENGTH ? selectedFilter.slice(0, chipsCountToDisplay) : selectedFilter;

    const showMoreCount =
      screenSize && screenSize <= 1280
        ? selectedFilter?.length - MAX_FILTER_CHIP_LENGTH_FOR_SMALL_SCREEN
        : selectedFilter?.length - MAX_FILTER_CHIP_LENGTH;

    const renderShowMore = () => (
      <div className={styles.showMore} onClick={handleShowMore}>
        <Typography className={styles.showMore}>+{showMoreCount}</Typography>
      </div>
    );

    const renderFilterValue = (value: string) => <Typography className={styles.filter}>{value}</Typography>;

    return (
      <div className={styles.filterChipWrapper}>
        {chipsData?.map(({ key, value }, index) => (
          <div key={`filter-chip-${index}`} className={styles.filterChip} onClick={(event) => event.stopPropagation()}>
            {value?.length > MAX_CHIP_TOOLTIP_LENGTH ? (
              <div data-tooltip-id={`${chipsData.values}${`filter-chip-${index}`}`} className={styles.chipTooltip}>
                <Typography> {renderFilterValue(value)}</Typography>
                <TooltipWrapper
                  id={`${chipsData.values}${`filter-chip-${index}`}`}
                  className={styles.chipTooltip}
                  anchorElement={undefined}
                >
                  {value}
                </TooltipWrapper>
              </div>
            ) : (
              <Typography className={styles.filter}>{renderFilterValue(value)}</Typography>
            )}
            <div onClick={() => onRemove(key, value)} className={styles.crossIcon}>
              <CrossIcon height={16} width={16} color="#707070" />
            </div>
          </div>
        ))}

        {selectedFilter?.length > MAX_FILTER_CHIP_LENGTH &&
          (showToolTip ? (
            <div className={styles.tooltipWrapper}>
              <div data-tooltip-id="show-more-filters" className={styles.tooltipContainer}>
                <Typography variant="b3-regular">{renderShowMore()}</Typography>
              </div>
              <div id="show-more-filters" className={showMoreOptions ? styles.showChipTooltip : styles.chipTooltip}>
                <div className={styles.filterChipWrapperTooltip}>
                  {selectedFilter
                    .slice(
                      screenSize && screenSize <= 1280
                        ? MAX_FILTER_CHIP_LENGTH_FOR_SMALL_SCREEN
                        : MAX_FILTER_CHIP_LENGTH,
                    )
                    ?.map((filter, index) => {
                      return (
                        <div
                          className={styles.filterChipTooltip}
                          key={`chip-${index}`}
                          onClick={(event) => event.stopPropagation()}
                        >
                          <div>
                            <Typography>{renderFilterValue(filter.value)}</Typography>
                          </div>

                          <div onClick={() => onRemove(filter.key, filter.value)} className={styles.crossIcon}>
                            <CrossIcon />
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          ) : (
            renderShowMore()
          ))}
      </div>
    );
  },
);

export default memo(FilterChip);
