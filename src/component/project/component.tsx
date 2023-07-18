import styled from '@emotion/styled';
import theme from '../../styles/theme';

export const IndexContainer = styled.div`
  background-color: #000;
  height: 100vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Inner = styled.div`
  align-items: start;
  margin-top: 13rem;
  margin-bottom: 16.6rem;
  color: #fff;
`;

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.3rem;
  margin-top: 3rem;
`;
export const HeadTitle = styled.div`
  font-size: ${theme.textVariants.heading2.fontSizes};
  font-weight: ${theme.textVariants.heading2.fontWeight};
`;
export const Body = styled.div``;
export const BodyTitle = styled.div`
  display: flex;
`;

export const SelectBoxWrapper = styled.div`
  margin-right: 1rem;
`;
