import { Outlet } from "react-router-dom";
import styled from "styled-components";

function DefaultLayout() {
  return (
    <>
      <LayoutWrapper>
        <div className="header">
          <img src="src/assets/Cover.png" alt="" />
        </div>
        <div className="body">
          <Outlet />
        </div>
      </LayoutWrapper>
    </>
  );
}

export default DefaultLayout;

export const LayoutWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center
  align-items: center;
  .header {
    width: 100%;
    display: flex;
    justify-content: center;
    height: 230px;
    img {
      object-fit: cover;
      width: 100%;
    }
  }
  .body {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh ;
    background-color: ${(props) => props.theme.base_background};
  }
`;
