import styled from "styled-components";
import UserInfoBoxComponent from "./UserTextInfo";

function UserInfo() {
  return (
    <>
      <UserInfoBox>
        <div className="image-wrapper">
          <img src="src/assets/Cover.png" alt="Profile Picture" />
        </div>
        <UserInfoBoxComponent />
      </UserInfoBox>
    </>
  );
}

export default UserInfo;

export const UserTextInfo = styled.div`
  width: 80%;
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
    gap: 10px ;
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

export const UserInfoBox = styled.div`
  max-width: 864px;
  height: 212px;
  flex-shrink: 0;
  background-color: ${(props) => props.theme.base_profile};
  border-radius: 10px;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  transform: translateY(-70px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.base_text};
  .image-wrapper {
    width: 100px;
    height: 100px;
    display: flex;
    position: relative;
    justify-content: center;
    border-radius: 10px;
    background-color: aliceblue;
    margin-left: 20px;
    img {
      top: 0;
      left: 0;
      position: absolute;
      border-radius: 8px;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
`;
