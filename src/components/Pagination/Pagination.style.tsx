import styled from "@emotion/styled";

export const WrapPagination = styled.div`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  padding: 24px 0px;
  .item {
    border: 1px solid #cdcdcd;
    padding: 4px;
    border-radius: 4px;
    &.active {
      background-color: blue;
      color: #fff;
    }
  }
`