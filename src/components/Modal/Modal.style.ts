import styled from "@emotion/styled";

export const WrapModal = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background: rgba(84,84,84,0.5);
  left: 0;
  bottom: 0;
  z-index: 999;
  .modal {
    position: absolute;
    background: #fff;
    width: 100%;
    max-width: 480px;
    margin: 0 auto;
    left: 0;
    right: 0;
    border-radius: 4px;
    .content-title {
      padding: 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #f7f7f7;
      h4 {
        font-size: 14px;
        letter-spacing: 1px;
      }
      .close {
        position: relative;
        font-size: 12px;
        &:hover {
          cursor: pointer;
        }
      }
    }
    .content-body {
      padding: 8px;
      .content-collection {
        display: flex;
        flex-wrap: wrap;
      }
    }
  }
`