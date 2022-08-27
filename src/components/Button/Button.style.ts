import styled from "@emotion/styled";
import { theme } from '../../configs/theme'

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
      background: ${theme.gradientPrimary};
      color: #fff;
    }
    &.secondary {
      background: ${theme.gradientSecondary};
      color: #fff;
    }
  }
  &:disabled {
    .button {
      &.primary {
        background: #cdcdcd;
      }
    }
  }
`