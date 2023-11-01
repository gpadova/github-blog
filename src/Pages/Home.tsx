import styled from "styled-components";
import IssueBox from "../components/home/Issue/IssueBox";
import SearchBox from "../components/home/SearchBox/SearchBox";
import UserInfo from "../components/home/UserInfo/UserInfo";
import { useGlobalContext } from "../contexts/GlobalContext";

function Home() {
  const { issues } = useGlobalContext();
  return (
    <>
      <UserInfo />
      <SearchBox />
      <IssuesWrapper>
        {issues.map((issue, index) => {
          return (
            <IssueBox
              issueId={index + 1}
              key={issue.id}
              title={issue.title}
              description={issue.body}
              created_at={issue.created_at}
            />
          );
        })}
      </IssuesWrapper>
    </>
  );
}

export default Home;

const IssuesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 2em;
  width: min(964px, 90%);
`;
