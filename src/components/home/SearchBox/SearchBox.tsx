import styled from "styled-components";

function SearchBox() {
  return (
    <>
      <SearchBoxWrapper>
        <div className="publications">
          <h3>Publicações</h3>
          <p>6 pubs</p>
        </div>
        <input type="text" placeholder="Search for specific content" />
      </SearchBoxWrapper>
    </>
  );
}

export default SearchBox;

export const SearchBoxWrapper = styled.div`
  width: 100%;
  .publications {
    display: flex;
    justify-content: space-between;
    p {
      color: ${(props) => props.theme.base_spam};
      text-align: right;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 160%; /* 22.4px */
    }
  }
  h3 {
    color: var(--base-subtitle, #c4d4e3);
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%; /* 28.8px */
  }
  input {
    width: 100%;
    display: flex;
    width: 864px;
    padding: 12px 16px;
    align-items: center;
    gap: 8px;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme.base_border};
    background: ${(props) => props.theme.base_input};
  }
  ::placeholder {
    font-family: "Nunito";
  }
`;
