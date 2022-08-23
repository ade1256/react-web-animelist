import styled from "@emotion/styled";

export const WrapMenuBottom = styled.div`
  position: fixed;
  max-width: inherit;
  margin: 0 auto;
  bottom: 0;
  left: 0;
  right: 0;
  height: 64px;
  background-color: #f3f8ff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .menu {
    text-align: center;
    .icon {
      font-size: 18px;
    }
    span {
      font-size: 14px;
    }
  }
`