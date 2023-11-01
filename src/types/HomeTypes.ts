import { Dispatch, SetStateAction } from "react";

export interface GlobalContextType {
    gitHubUser: GitHubUser;
    setGitHubUser: Dispatch<SetStateAction<GitHubUser>>;
    gitHubIssue: GitHubIssue;
    setGitHubIssue: Dispatch<SetStateAction<GitHubIssue>>;
    issues: Issue[];
    setIssues: Dispatch<SetStateAction<Issue[]>>;
    search: string;
    setSearch: Dispatch<SetStateAction<string>>;
  }
  
  export interface GitHubIssue {
    total_count: number;
    incomplete_results: false;
    items: Issue[];
  }
  
  export interface Issue {
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
  
  export interface GitHubUser {
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

  