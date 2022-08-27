import styled from "@emotion/styled";

export const StyledTextField = styled.input`
  position: relative;
  padding: 6px 8px;
  width: fill;
  width: -webkit-fill-available;
`

export const WrapTextField = styled.div`
  position: relative;
  width: 100%;
  .error {
    p {
      font-size: 12px;
      color: red;
    }
  }
`