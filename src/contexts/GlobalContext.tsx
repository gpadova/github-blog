import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../assets/axios";
import { AxiosResponse } from "axios";
import { GitHubIssue, GitHubUser, GlobalContextType, Issue } from "../types/HomeTypes";



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
