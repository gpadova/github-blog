import {
  ArrowSquareUpRight,
  Buildings,
  GithubLogo,
  Person,
} from "@phosphor-icons/react";
import { styled } from "styled-components";
import { useGlobalContext } from "../../../contexts/GlobalContext";
import { NavLink } from "react-router-dom";

function UserInfoBoxComponent() {
  const { gitHubUser } = useGlobalContext();

  return (
    <>
      <UserTextInfo>
        <div className="title">
          <h2>{gitHubUser.name}</h2>
          <div className="github">
            <NavLink style={{textDecoration: "none", color: "inherit"}} to={gitHubUser.blog}>
              <p>GITHUB</p>
            </NavLink>
            <ArrowSquareUpRight />
          </div>
        </div>
        <div className="description">
          <p>{gitHubUser.bio}</p>
        </div>
        <Icons>
          <div className="icon">
            <GithubLogo weight="fill" />
            <p>{gitHubUser.login}</p>
          </div>
          {gitHubUser.company !== null && (
            <div className="icon">
              <Buildings weight="fill" />
              <p>{gitHubUser.company}</p>
            </div>
          )}
          <div className="icon">
            <Person weight="fill" />
            <p>{gitHubUser.followers} followers</p>
          </div>
        </Icons>
      </UserTextInfo>
    </>
  );
}

export default UserInfoBoxComponent;

export const Icons = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  .icon {
    display: flex;
    align-items: center;
    gap: 3px;
    color: ${(props) => props.theme.base_label};
    p {
      color: ${(props) => props.theme.base_sub_title};
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
    }
  }
`;

export const UserTextInfo = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  .descrition {
    font-size: 16px;
  }
  .title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .github {
    display: flex;
    justify-content: space-between;
    color: ${(props) => props.theme.blue};
    gap: 10px;
    a {
      font-size: 12px;
      font-style: normal;
      font-weight: 700;
      text-transform: uppercase;
    }
  }

  h2 {
    color: ${(props) => props.theme.base_title};
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
  }
`;
