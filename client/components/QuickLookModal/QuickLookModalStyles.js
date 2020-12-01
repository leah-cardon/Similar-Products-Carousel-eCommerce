import styled from 'styled-components';

const QuickLookModalStyles = styled.div`
.modalOverlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .15);
  z-index: 1000;
}
.modalContainer {
  display: grid;
  grid-template-rows: 324px auto;
  max-width: 1012px;
  position: relative;
  color: rgb(0, 0, 0);
  background-color: rgb(255, 255, 255);
  width: 100%;
  outline: 0px;
  font-size: 14px;
  line-height: 1.5;
  pointer-events: auto;
  border-radius: 6px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 16px 16px 32px;
  z-index: 1001;
  height: auto;
}
.modalX {
  position: absolute;
  right: 20px;
  top: 15px;
  font-weight: 700;
  font-size: 16px;
}
.photoAndDetailsModal {
  margin-bottom: 24px;
  display: grid;
  grid-template-columns: 324px auto;
}
.brandName {
  font-weight: 700;
}
.detailsSizeAndItem {
  font-size: 12px;
  margin-top: 4px;
  color: rgb(117, 117, 117);
  display: block;
}
.linkDiv {
  text-align: right;
  display: block;
}
.seeProductDetailsLink {
  cursor: pointer;
  outline: 0;
  color: #1470f5;
  display: inline-block;
}
.footerModal {
  display: grid;
  grid-template-columns: 324px auto;
  width: 100%;
}
.star-ratings-css {
  display: inline-block;
  unicode-bidi: bidi-override;
  color: #c5c5c5;
  font-size: 12px;
  height: 1em;
  width: calc(5em + 0.668em);
  margin: 0 auto;
  position: relative;
  padding: 0;
}
.star-ratings-css-top {
  color: #000;
  padding: 0;
  position: absolute;
  z-index: 1;
  display: block;
  top: 0;
  left: 0;
  overflow: hidden;
}
.star-ratings-css-bottom {
  padding: 0;
  display: block;
  z-index: 0;
}
.boldText {
  font-weight: 700;
}
.dividerText {
  margin-left: 5px;
  margin-right: 5px;
  color: #ccc;
}
.modalHeart {
  display: inline-block;
  width: 1em;
  height: 1em;
  position: relative;
  vertical-align: text-bottom;
  fill: currentColor;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  font-size: 1.125em;
  margin-right: 5px;
}
.modalBuy {
  display: grid;
  grid-template-columns: auto 226px;
}
.modalBuyButtons {
  display: grid;
  grid-template-columns: 58px 168px;
}
.modalPrice {
  font-size: 16px;
  line-height: 1.25;
  margin-bottom: 8px;
  min-height: 44px;
  display: block;
}
.modalDropdown {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-family: inherit;
  font-size: 14px;
  width: 100%;
  vertical-align: middle;
  height: 44px;
  padding-left: 16px;
  padding-right: 24px;
  color: #000;
  background-color: #fff;
  text-transform: none;
  border-width: 1px;
  border-color: #ccc;
  border-radius: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  -moz-appearance: none;
  -webkit-appearance: none;
  min-width: 54px;
}
.modalDropdownArrow {
  display: inline-block;
  border-left: .375em solid transparent;
  border-right: .375em solid transparent;
  border-top: .4375em solid;
  border-bottom: 0;
  font-size: 12px;
  position: absolute;
  top: 27%;
  right: 8px;
  -webkit-transform: translate(0,-50%);
  -ms-transform: translate(0,-50%);
  transform: translate(0,-50%);
  pointer-events: none;
}
.relative {
  position: relative;
}
.addToBasketButtonDiv {
  margin-left: 8px;
  width: 160px;
  display: block;
  padding: 0px;
}
.addToBasketButton {
  font-size: 14px;
  padding: 0.25em 1.125em;
  min-height: 44px;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  line-height: 1;
  border-style: solid;
  border-width: 2px;
  border-color: transparent;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  font-weight: 700;
  outline: 0px;
  box-sizing: border-box;
  border-radius: 99999px;
  appearance: none;
  color: rgb(255, 255, 255);
  transition: background-color 0.2s ease 0s;
  background-color: rgb(207, 17, 44);
  display: flex;
  width: 100%;
  min-width: 5.5em;
}
`;

export default QuickLookModalStyles;