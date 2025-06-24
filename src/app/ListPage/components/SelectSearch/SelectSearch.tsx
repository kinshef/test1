'use client';

import {
  SelectWrapper,
  HiddenInput,
  OutputWrap,
  Output,
  SearchContainer,
  SearchInput,
  OptionList,
  OptionItem,
  ErrorText,
} from './SelectSearch.styled';
import { Dispatch, SetStateAction, useState } from 'react';

interface ISelectOption {
  value: string;
  text: string;
}

interface ISelectSearchProps {
  items: ISelectOption[];
  err?: boolean;
  setErr?: Dispatch<SetStateAction<boolean>>;
  selected: ISelectOption;
  setSelected: Dispatch<SetStateAction<boolean>>;
}

export const SelectSearch = ({
  items,
  selected,
  setSelected,
  err,
  setErr,
}: ISelectSearchProps) => {
  const [search, setSearch] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const filtered = items.filter((country) =>
    country.text.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (country) => {
    setSelected(country);
    setIsOpen(false);
    setSearch('');

    if (err && country.value) {
      setErr(false);
    }
  };
  return (
    <SelectWrapper className={err ? 'error-class' : ''}>
      <HiddenInput name="test" type="hidden" value={selected?.value || ''} />
      <OutputWrap onClick={() => setIsOpen(!isOpen)}>
        <Output data-placeholder="Ваша страна проживания">
          {selected?.text || ''}
        </Output>
      </OutputWrap>

      {isOpen && (
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="Поиск..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            autoFocus
          />
          <OptionList>
            {filtered.map((country) => (
              <OptionItem
                key={country.value}
                data-value={country.value}
                onClick={() => handleSelect(country)}
              >
                {country.text}
              </OptionItem>
            ))}
          </OptionList>
        </SearchContainer>
      )}
      <ErrorText>Error message</ErrorText>
    </SelectWrapper>
  );
};
