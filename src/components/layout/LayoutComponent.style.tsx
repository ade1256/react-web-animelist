import { css } from '@emotion/react';
import styled from '@emotion/styled'

function createMarginTopIteration() {
  let styles = '';

  for (let i = 0; i < 100; i += 4) {
     styles += `
       .mt-${i} {
         margin-top: ${i}px;
       }
     `
  }

  return css`${styles}`;
}

function createMarginIteration() {
  let styles = '';

  for (let i = 0; i < 100; i += 4) {
     styles += `
       .m-${i} {
         margin: ${i}px 0px;
       }
     `
  }

  return css`${styles}`;
}

function createPaddingIteration() {
  let styles = '';

  for (let i = 0; i < 100; i += 4) {
     styles += `
       .p-${i} {
         padding: ${i}px 0px;
       }
     `
  }

  return css`${styles}`;
}

export const WrapperLayout = styled.div`
  background-color: #eef5ff;
  .content {
    position: relative;
    max-width: 480px;
    background-color: #fff;
    width: 480px;
    margin: 0 auto;
    left: 0;
    right: 0;
    min-height: 100vh;
    height: 100%;
    padding-bottom: 64px;
    .content-body {
      padding: 0px 8px;
    }
  }

  ${createMarginTopIteration()}
  ${createMarginIteration()}
  ${createPaddingIteration()}
`