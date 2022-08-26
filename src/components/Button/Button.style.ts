import styled from "@emotion/styled";

export const WrapButton = styled.button`
  position: relative;
  padding:0;
  margin:0;
  background: none;
  border: none;
  width: inherit;
  .button {
    border-radius: 4px;
    padding: 8px 16px;
    border: none;
    &:hover{
      cursor: pointer;
    }
    &.primary {
      background: rgb(131,58,180);
      background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 0%, rgba(252,176,69,1) 100%);
      color: #fff;
    }
  }
`