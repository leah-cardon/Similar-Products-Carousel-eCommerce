import styled from 'styled-components';

const IndexStyles = styled.div`
* {
  border-width: 0;
  border-style: solid;
  margin: 0;
  padding: 0;
  background-color: transparent;
  color: inherit;
  font: inherit;
  text-transform: inherit;
  letter-spacing: inherit;
  text-align: inherit;
  text-decoration: none;
  align-items: normal;
  min-width: 0;
  font-family: 'Helvetica Neue';
}

*, ::after, ::before {
  box-sizing: border-box;
}

div {
  padding: .5em;
}

.body {
  box-sizing: content-box;
  width: 980px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
}
`;

export default IndexStyles;