import styled from 'styled-components';

const SuggestedProductsCarouselStyles = styled.div`
.carouselAndPgIndicator {
  display: grid;
  grid-template-rows: 100% 20px;
}
.suggestedProductsCarousel {
  display: grid;
  grid-template-columns: 5% 18% 18% 18% 18% 18% 5%;
}
.arrowContainer {
  display: flex;
  align-items: center;
  height: 220px;
  width: 32px;
}
`;

export default SuggestedProductsCarouselStyles;