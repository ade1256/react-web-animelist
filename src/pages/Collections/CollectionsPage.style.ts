import styled from "@emotion/styled";

export const WrapCollectionsPage = styled.div`
  position: relative;
  padding: 16px 0px;
  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
      h2 {
        font-size: 14px;
        letter-spacing: 1px;
      }
    }
  }
  .content-collection {
    display: flex;
    flex-wrap: wrap;
  }
`