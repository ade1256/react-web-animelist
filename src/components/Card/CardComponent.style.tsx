import styled from '@emotion/styled'
import { theme } from '../../configs/theme'

export const WrapCard = styled.div`
  position: relative;
  margin-bottom: 16px;
  margin-right: 8px;
  width: 145px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &:hover {
    cursor: pointer;
  }
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

  .remove {
    position: absolute;
    right: 4px;
    bottom: 30px;
    border-radius: 50px;
    width: 16px;
    height: 16px;
    padding: 8px;
    color: ${theme.gray};
    background: ${theme.darkGray};
    font-size: 12px;
    text-align: center;
    &:hover {
      color: #fff;
      background: ${theme.gradientPrimary};
    }
  }
`