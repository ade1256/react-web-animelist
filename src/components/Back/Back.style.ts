import styled from "@emotion/styled";

export const WrapBack = styled.div`
  position: relative;
  max-width: inherit;
  height: 45px;
  z-index: 1;
  background-color: #fff;
  margin: 0 auto;
  left: 0;
  right: 0;
  .btn {
    position: relative;
    padding: 0px 8px;
    top: 8px;
    width: fit-content;
    display: inline;
    span {
      margin-left: 8px;
    }
    &:hover {
      cursor: pointer;
    }
  }
`