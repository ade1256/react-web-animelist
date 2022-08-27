import styled from "@emotion/styled";

export const WrapCollectionItem = styled.div`
  position: relative;
  width: 46%;
  border-radius: 4px;
  border: 1px solid #dce8fa;
  margin: 8px;
  .cover {
    overflow: hidden;
    height: 213px;
  }
  img {
    width: 100%;
  }
  .name {
    padding: 8px 16px;
  }
  &:hover {
    cursor: pointer;
  }
`