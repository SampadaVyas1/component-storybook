import React from 'react';
import SearchIcon from '../../icons/SearchIcon';
import { Input as AdaInput } from '../Input/Input';
import styles from './SearchBar.module.scss';
import { ISearchBar } from './ISearchBar';
import { GREY_1000, GREY_900 } from '../../constants/colors';

export const SearchBar: React.FC<ISearchBar> = ({
  disabled,
  placeholder = 'Search',
  className,
  ...props
}) => {
  return (
    <AdaInput
      containerProps={{ className: styles.searchBarContainer }}
      disabled={disabled}
      placeholder={placeholder}
      className={[styles.searchBar, className].join(' ')}
      startAdornment={<SearchIcon color={disabled ? GREY_1000 : GREY_900} />}
      {...props}
    />
  );
};

export default SearchBar;
