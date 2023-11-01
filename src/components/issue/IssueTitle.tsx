import {
  ArrowBendUpLeft,
  ArrowSquareOut,
  Calendar,
  ChatCircle,
  GithubLogo,
} from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { GitHubIssue } from "../../types/IssuesTypes";
import { formatDistance } from "date-fns";

interface IssueTitleProps {
    issue: GitHubIssue
}

function IssueTitle({issue}: IssueTitleProps) {
    const daysPassed = formatDistance(new Date(issue.created_at), new Date(), {
        addSuffix: true
    })
  return (
    <>
      <IssueTitleWrapper>
        <div className="top">
          <NavLink style={{ color: "inherit", textDecoration: "none" }} to="/">
            <div className="back">
              <ArrowBendUpLeft weight="fill" />
              <p>BACK</p>
            </div>
          </NavLink>
          <a style={{ color: "inherit", textDecoration: "none" }} href={issue.html_url} target="_blank">
            <div className="github-link">
              <p>SEE ON GITHUB</p>
              <ArrowSquareOut weight="fill" />
            </div>
          </a>
        </div>
        <div className="title">{issue.title}</div>
        <div className="icons">
          <div className="icon">
            <GithubLogo />
            <p>{issue.user.login}</p>
          </div>
          <div className="icon">
            <Calendar />
            <p>{daysPassed}</p>
          </div>
          <div className="icon">
            <ChatCircle />
            <p>{issue.comments} comments</p>
          </div>
        </div>
      </IssueTitleWrapper>
    </>
  );
}

export default IssueTitle;

export const IssueTitleWrapper = styled.div`
  width: min(864px, 90%);
  height: 212px;
  padding: 0 1em;
  background-color: ${(props) => props.theme.base_profile};
  border-radius: 10px;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  transform: translateY(-50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-evenly; */
  color: ${(props) => props.theme.base_text};
  /* gap: 2em; */
  .top {
    width: 90%;
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    margin-top: 32px;
    margin-bottom: 37px;
    color: ${(props) => props.theme.blue};
    .back {
      display: flex;
      align-items: center;
      gap: 0.5em;
    }
    .github-link {
      display: flex;
      align-items: center;
      gap: 0.5em;
    }
  }
  .title {
    color: ${(props) => props.theme.base_text};
    width: 90%;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; 
    margin-bottom: 16px;
  }
  .icons {
    width: 90%;
    display: flex;
    color: ${(props) => props.theme.base_spam};
    font-size: 16px;
    font-style: normal;
    gap: 2em;
    .icon {
      display: flex;
      align-items: center;
      gap: 0.5em;
    }
  }
`;
