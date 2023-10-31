import styled from "styled-components";
import { useGlobalContext } from "../../../contexts/GlobalContext";



function SearchBox() {
  const { gitHubIssue, setSearch, search } = useGlobalContext();
  return (
    <>
      <SearchBoxWrapper>
        <div className="publications">
          <h3>Issues</h3>
          <p>{gitHubIssue.total_count} {gitHubIssue.total_count !== 1 ? "issues" : "issue"}</p>
        </div>
        <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search for specific content" />
      </SearchBoxWrapper>
    </>
  );
}

export default SearchBox;

export const SearchBoxWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateY(-50px);
  .publications {
    width: min(90%, 864px);
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
    width: min(90%, 864px);
    display: flex;
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
