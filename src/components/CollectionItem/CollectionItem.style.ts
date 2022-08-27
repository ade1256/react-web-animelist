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
    width: 75%;
    overflow-wrap: break-word;
    text-overflow: ellipsis;
  }
  &:hover {
    cursor: pointer;
  }
  .removeIcon, .editIcon {
    position: relative;
    top: 9px;
    font-size: 14px;
    height: 100%;
    overflow: hidden;
    margin-right: 8px;
    width: 16px;
  }
  .info-collection {
    display: flex;
    overflow: hidden;
  }
`