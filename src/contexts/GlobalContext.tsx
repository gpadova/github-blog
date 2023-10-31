import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../assets/axios";
import { AxiosResponse } from "axios";

interface GlobalContextType {
  gitHubUser: GitHubUser;
  setGitHubUser: Dispatch<SetStateAction<GitHubUser>>;
  gitHubIssue: GitHubIssue;
  setGitHubIssue: Dispatch<SetStateAction<GitHubIssue>>;
  issues: Issue[];
  setIssues: Dispatch<SetStateAction<Issue[]>>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}

interface GitHubIssue {
  total_count: number;
  incomplete_results: false;
  items: Issue[];
}

interface Issue {
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  id: number;
  node_id: string;
  number: number;
  title: string;
  user: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
  };
  labels: unknown[];
  state: "open" | "closed";
  locked: boolean;
  assignee: null | unknown;
  assignees: unknown[];
  milestone: null | unknown;
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at: null | string;
  author_association:
    | "OWNER"
    | "MEMBER"
    | "CONTRIBUTOR"
    | "COLLABORATOR"
    | "NONE";
  active_lock_reason: null | string;
  body: string;
  reactions: {
    url: string;
    total_count: number;
    "+1": number;
    "-1": number;
    laugh: number;
    hooray: number;
    confused: number;
    heart: number;
    rocket: number;
    eyes: number;
  };
  timeline_url: string;
  performed_via_github_app: null;
  state_reason: null | string;
  score: number;
}

interface GitHubUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: string | null;
  blog: string;
  location: string;
  email: string | null;
  hireable: boolean | null;
  bio: string;
  twitter_username: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}
interface Issue {
  title: string;
}

const GlobalContext = createContext<GlobalContextType>({
  gitHubUser: {} as GitHubUser,
  setGitHubUser: () => {},
  gitHubIssue: {} as GitHubIssue,
  setGitHubIssue: () => {},
  issues: [],
  setIssues: () => {},
  search: "",
  setSearch: () => {},
});

export function GlobalProvider({ children }: { children: ReactNode }) {
  const [gitHubUser, setGitHubUser] = useState<GitHubUser>({} as GitHubUser);
  const [gitHubIssue, setGitHubIssue] = useState<GitHubIssue>(
    {} as GitHubIssue
  );
  const [issues, setIssues] = useState<Issue[]>([]);
  const [search, setSearch] = useState("")
  useEffect(() => {
    async function getData() {
      const responseUser: AxiosResponse<GitHubUser> = await api.get(
        "/users/gpadova"
      );
      const responseIssues: AxiosResponse<GitHubIssue> = await api.get(
        `/search/issues?q=${search}%20repo:gpadova/github-blog`
      );

      setGitHubIssue(responseIssues.data);
      setIssues(responseIssues.data.items);
      setGitHubUser(responseUser.data);
    }
    getData();
  }, [search]);

  return (
    <GlobalContext.Provider
      value={{
        gitHubUser,
        setGitHubUser,
        gitHubIssue,
        issues,
        setGitHubIssue,
        setIssues,
        search,
        setSearch
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobalContext = () => useContext(GlobalContext);
