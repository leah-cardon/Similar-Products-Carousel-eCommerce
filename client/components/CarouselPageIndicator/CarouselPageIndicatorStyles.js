import styled from 'styled-components';

const CarouselPageIndicatorStyles = styled.div`
  .dotsContainer {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
  }
  .dotButton {
    margin-left: 1px;
    margin-right: 1px;
    line-height: 0;
    font-size: 45px;
    opacity: 20%;
  }
  .currentDot {
    opacity: 100%;
  }
`;

export default CarouselPageIndicatorStyles;