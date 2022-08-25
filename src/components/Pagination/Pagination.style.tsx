import styled from "@emotion/styled";

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
      background-color: blue;
      color: #fff;
      border: 1px solid blue;
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