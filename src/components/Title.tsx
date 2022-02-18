import styled from 'styled-components';

interface ITitle {
  fontSize: number;
}

const Title = styled.h1<ITitle>`
  color: blueviolet;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: ${({ fontSize }) => fontSize};
  span {
    font-size: 1.5rem;
  }
`;

export default Title;
