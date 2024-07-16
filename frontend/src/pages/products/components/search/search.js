import { useEffect, useState } from "react";
import styled from "styled-components";

const SearchContainer = ({
  className,
  searchPhrase,
  onSearchHandler,
  onResetSearch,
}) => {
  const [value, setValue] = useState(searchPhrase);

  useEffect(() => {
    setValue(searchPhrase);
  }, [searchPhrase]);

  const onChange = ({ target }) => {
    setValue(target.value);
  };

  return (
    <div className={className}>
      <input
        type="text"
        placeholder="Поиск по каталогу..."
        value={value}
        onChange={onChange}
      />
      <i className="fa fa-search" onClick={() => onSearchHandler(value)} />
      <i className="fa fa-refresh" onClick={onResetSearch} />
    </div>
  );
};

export const Search = styled(SearchContainer)`
  display: flex;
  justify-content: center;
  align-items: center;

  & input {
    width: 200px;
    padding: 5px;
    border: none;
    outline: none;
    border-radius: 4px;
    border-bottom: 1px solid #8019c8;
  }

  & .fa {
    margin-left: 5px;
    font-size: 18px;
    color: #8019c8;
    cursor: pointer;
  }
`;
