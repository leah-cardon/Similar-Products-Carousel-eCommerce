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
    padding: 0px;
  }
  .heartContainer {
    position: absolute;
    top: 12px;
    right: 10px;
    transition: opacity 0.15s ease 0s;
    padding: 0px;
  }
  .lovedButton {
    display: inline-block;
    text-align: center;
    line-height: 0;
    width: 24px;
    height: 24px;
    padding: 0px;
  }
  .lovedSvg {
    display: inline-block;
    width: 1em;
    height: 1em;
    position: absolute;
    vertical-align: text-bottom;
    fill: currentcolor;
    flex-shrink: 0;
    font-size: 20px;
    color: rgb(207, 17, 44);
    padding: 0;
  }
  .unlovedSvg {
    display: inline-block;
    width: 1em;
    height: 1em;
    position: absolute;
    vertical-align: text-bottom;
    fill: currentcolor;
    flex-shrink: 0;
    font-size: 20px;
    color: rgb(0, 0, 0);
    padding: 0;
  }
`;

export default CompositeProductImageStyles;