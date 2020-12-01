import styled from 'styled-components';

const CompositeProductImageStyles = styled.div`
  .quickLookButton {
    display: inline-block;
    border-image: initial;
    color: rgb(232, 230, 227);
    background-color: rgb(0, 0, 0);
    cursor: pointer;
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    text-align: center;
    line-height: 1;
    font-weight: 500;
    padding-top: 8px;
    padding-bottom: 8px;
    font-size: 11px;
    text-transform: uppercase;
    border-radius: 0;
    margin-left: auto;
    margin-right: auto;
  }
  .compositeImage {
    position: relative;
    display: grid;
    width: 151.75px;
    margin-left: auto;
    margin-right: auto;
    padding: 0;
  }
`;

export default CompositeProductImageStyles;