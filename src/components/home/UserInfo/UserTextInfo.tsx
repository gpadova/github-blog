import {
  ArrowSquareUpRight,
  Buildings,
  GithubLogo,
  Person
} from "@phosphor-icons/react";
import { styled } from "styled-components";

function UserInfoBoxComponent() {
  return (
    <>
      <UserTextInfo>
        <div className="title">
          <h2>Cameron Williamson</h2>
          <div className="github">
            <p>GITHUB</p>
            <ArrowSquareUpRight />
          </div>
        </div>
        <div className="description">
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
        </div>
        <Icons>
          <div className="icon">
            <GithubLogo weight="fill" />
            <p>username</p>
          </div>
          <div className="icon">
            <Buildings weight="fill" />
            <p>company</p>
          </div>
          <div className="icon">
            <Person weight="fill" />
            <p>32 followers</p>
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
  padding: 0 30px;
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
    p {
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
