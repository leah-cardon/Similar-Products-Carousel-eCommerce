import styled from 'styled-components';

const SuggestedProductDetailsStyles = styled.div`
.brandName {
  font-weight: 700;
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
`;

export default SuggestedProductDetailsStyles;