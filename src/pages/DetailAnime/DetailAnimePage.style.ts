import styled from "@emotion/styled";

export const WrapDetailAnimePage = styled.div`
  position: relative;

  .content-head {
    position: relative;
    width: 100%;
    .cover {
      width: 100%;
      overflow: hidden;
      height: 200px;
      border-radius: 4px;
      img {
        width: 100%;
      }
    }
    .detail-title {
      padding-top: 8px;
      width: 100%;
      h2 {
        font-size: 18px;
        letter-spacing: 1px;
      }
      .genres {
        padding-top: 8px;
        span {
          margin-right: 8px;
          padding: 4px;
          border-radius: 4px;
          background-color: #e1e8f3;
          color: #8b99af;
          font-size: 12px;
          margin-bottom: 8px;
        }
      }
    }

    .counting {
      position: relative;
      display: flex;
      padding-top: 16px;
      .item {
        border-radius: 4px;
        border: 1px solid #e1e8f3;
        padding: 8px 4px;
        margin-right: 8px;
        width: 100%;
        text-align: center;
        span {
          display: block;
          &:first-of-type {
            color: #8b99af;
            font-size: 12px;
          }
          &:last-child {
            font-size: 14px;
            font-weight: bold;
          }
        }
      }
    }

    .additional-information {
      padding: 16px 0px;
      display: flex;
      justify-content: space-between;
      .time {
      font-size: 12px;
      .svg-inline--fa {
        color: #8b99af;
      }
      span { margin-left: 4px;}
      }
    }

    .description {
      text-align: justify;
      font-size: 14px;
      letter-spacing: 0.5px;
    }
  }
`