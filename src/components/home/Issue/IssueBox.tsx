import { formatDistance } from "date-fns";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface IssueBoxProps {
    title: string;
    description: string;
    created_at: string;
    issueId: number; 
  }

function IssueBox({title, description,  created_at, issueId}: IssueBoxProps) {
    const timePassed = formatDistance(new Date(created_at),Date.now() , 
    {
        addSuffix: true
    })
  return (
    <>
    <NavLink style={{textDecoration: "none"}} to={`/${issueId}`}>
      <IssueWrapper>
        <div className="title">
          <h3>{title}</h3>
          <h4>{timePassed}</h4>
        </div>
        <div className="content">
          <p>{description}</p>
        </div>
      </IssueWrapper>
    </NavLink>
    </>
  );
}

export default IssueBox;

export const IssueWrapper = styled.div`
  width: 356px;
  height: 260px;
  flex-shrink: 0;
  border-radius: 10px;
  background: ${(props) => props.theme.base_post};
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 32px;
  gap: 1em;
  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .content {
    height: 80%;
    width: 100%;
    white-space: wrap;
    overflow: hidden;
  }
  h3 {
    color: ${(props) => props.theme.base_title};
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%; /* 32px */
  }
  h4 {
    color: ${(props) => props.theme.base_spam};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    width: 75px;
    line-height: 160%; 
  }
  p {
    color: ${(props) => props.theme.base_text};
    text-overflow: ellipsis;
    text-align: justify;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
  }

  @media (max-width:1000px) {
    width: 85%;

  }
`;
