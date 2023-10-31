import styled from "styled-components";
import UserInfoBoxComponent from "./UserTextInfo";
import { useGlobalContext } from "../../../contexts/GlobalContext";

function UserInfo() {
  const { gitHubUser} = useGlobalContext();
  return (
    <>
      <UserInfoBox>
        <div className="image-wrapper">
          <img src={gitHubUser.avatar_url} alt="Profile Picture" />
        </div>
        <UserInfoBoxComponent />
      </UserInfoBox>
    </>
  );
}

export default UserInfo;


export const UserInfoBox = styled.div`
  width: min(864px, 90%);
  height: 212px;
  padding: 0 1em;
  background-color: ${(props) => props.theme.base_profile};
  border-radius: 10px;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  transform: translateY(-100px);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: ${(props) => props.theme.base_text};
  gap: 2em;
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
