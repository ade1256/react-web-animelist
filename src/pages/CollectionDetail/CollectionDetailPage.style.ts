import styled from "@emotion/styled";

export const WrapCollectionDetailPage = styled.div`
  position: relative;
  padding: 16px 0px;
  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 8px;
    .title {
      h2 {
        font-size: 14px;
        letter-spacing: 1px;
      }
    }
  }
  .card-list {
    position: relative;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: 0 auto;
    left: 7px;
    right: 0;
    bottom: 0;
    margin-top: 20px;
  }
`