import styled from "@emotion/styled";
import { theme } from "../../configs/theme";

export const WrapPagination = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  padding: 24px 0px;
  width: max-content;
  margin: 0 auto;
  .item {
    border: 1px solid #cdcdcd;
    padding: 4px 8px;
    /* border-radius: 4px; */
    &.active {
      background-color: ${theme.purple};
      color: #fff;
      border: 1px solid ${theme.purple};
    }
    &:first-of-type {
      border-bottom-left-radius: 4px;
      border-top-left-radius: 4px;
    }
    &:last-child {
      border-bottom-right-radius: 4px;
      border-top-right-radius: 4px;
    }
  }
`