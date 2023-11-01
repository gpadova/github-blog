import styled from "styled-components";

function IssueBody({ body }: { body: string }) {
  return (
    <>
      <IssueBodyWrapper>
        <p>{body}</p>
      </IssueBodyWrapper>
    </>
  );
}

export default IssueBody;

export const IssueBodyWrapper = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
  p {
    max-width: min(864px, 90%);
    color: ${(props) => props.theme.base_text};
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%;
  }
`;
