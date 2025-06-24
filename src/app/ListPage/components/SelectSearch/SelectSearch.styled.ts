import styled from 'styled-components';

export const ErrorText = styled.span`
  color: red;
  font-size: 12px;
  margin-top: 4px;
  display: none;
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const OutputWrap = styled.div`
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 12px;
  cursor: pointer;
  position: relative;
  background-color: #fff;
  user-select: none;
  transition: border 0.5s;
  z-index: 1;

  &:after {
    content: '';
    position: absolute;
    right: 12px;
    top: 50%;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid #333;
    transform: translateY(-50%);
  }
`;

export const SelectWrapper = styled.div`
  position: relative;
  &.error-class {
    ${ErrorText} {
      display: block;
    }
    ${OutputWrap} {
      border-color: red;
      &:after {
        border-top: 6px solid red;
      }
    }
  }
`;

export const Output = styled.div`
  font-size: 14px;
  color: #333;

  &:empty:before {
    content: attr(data-placeholder);
    color: #999;
  }
`;

export const SearchContainer = styled.div`
  padding-top: 4px;
  margin-top: -4px;
  border: 1px solid #ccc;
  border-radius: 0 0 6px 6px;
  max-height: 300px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: absolute;
  width: calc(100% - 2px);
`;

export const SearchInput = styled.input`
  width: calc(100% - 16px);
  margin: 8px;
  padding: 10px;
  border: none;
  outline: none;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-sizing: border-box;
`;

export const OptionList = styled.ul`
  max-height: 200px;
  overflow-y: auto;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const OptionItem = styled.li`
  padding: 10px;
  cursor: pointer;
  font-size: 14px;
  padding: 8px 10px;
  border-bottom: 1px solid #f5f5f5;

  &:hover {
    background-color: #f5f5f5;
  }
`;
