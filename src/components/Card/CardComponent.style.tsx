import styled from '@emotion/styled'

export const WrapCard = styled.div`
  position: relative;
  margin-bottom: 16px;
  margin-right: 8px;
  width: 150px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  .image {
    width: inherit;
    border-radius: 4px;
    height: 200px;
    img {
      width: inherit;
      height: inherit;
      border-radius: inherit;
    }
  }
  span {
    font-size: 14px;
  }
  .score {
    position: absolute;
    right: 4px;
    top: 4px;
    border-radius: 50px;
    width: 16px;
    height: 16px;
    padding: 8px;
    color: #fff;
    &.green {
      background-color: #479647;
    }
    &.orange {
      background-color: #d69112;
    }
    span {
      position: relative;
      bottom: 4px;
    }
  }
`