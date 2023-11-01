import { useParams } from "react-router-dom";
import IssueTitle from "../components/issue/IssueTitle";
import { useEffect, useState } from "react";
import { GitHubIssue } from "../types/IssuesTypes";
import { api } from "../assets/axios";
import { AxiosResponse } from "axios";

function Issue() {
  const { issueId } = useParams();
  const [issue, setIssue] = useState<GitHubIssue>({} as GitHubIssue);
  useEffect(() => {
    async function getData() {
        const response: AxiosResponse<GitHubIssue> = await api.get(
          `repos/gpadova/github-blog/issues/${issueId}}`
        );
        setIssue(response.data)
      }
      getData();
  }, []);

  console.log(issue)
  return (
    <>
      <IssueTitle issue={issue}/>
      <p>{issueId}</p>
      {/* Content */}
    </>
  );
}



export default Issue;
