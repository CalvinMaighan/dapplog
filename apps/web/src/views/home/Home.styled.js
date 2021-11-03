import styled from 'styled-components';

export const _home = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const _phases = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 120px;
`;

export const _first = styled.div`
  min-width: 260px;
  width: 260px;
  min-height: 220px;
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadow['sphere']};
  background: ${({ theme }) => theme.highlight['background']};
  margin-right: 48px;
  display: flex;
  flex-direction: row;
`;

export const _second = styled.div`
  min-width: 260px;
  width: 260px;
  min-height: 220px;
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadow['sphere']};
  background: ${({ theme }) => theme.highlight['background']};
`;

export const _third = styled.div`
  min-width: 260px;
  width: 260px;
  min-height: 220px;
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadow['sphere']};
  background: ${({ theme }) => theme.highlight['background']};
  margin-left: 48px;
  display: flex;
  flex-direction: row;
`;

export const _projects = styled.div``;

export const _laddercaster = styled.div``;

export const _basketswap = styled.div``;

export const _theone = styled.div``;

export const _title = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.highlight['light']};
  text-shadow: ${({ theme, $last }) => ($last ? 'none' : theme.shadow['text'])};
  padding-bottom: 12px;
`;

export const _avala = styled.div``;

export const _container = styled.div`
  width: 100%;
  height: 100%;
  padding: 12px 24px 24px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const _item = styled.div`
  width: 100%;
  padding: 12px 20px;
  border-radius: 50px;
  background: ${({ theme, $last }) => theme.highlight[$last ? 'high' : 'low']};
  box-shadow: ${({ theme, $last }) => theme.shadow[$last ? 'glass' : 'cutout']};
  margin-bottom: 12px;
  white-space: nowrap;
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme, $last }) =>
    $last ? theme.highlight['text'] : theme.highlight['light']};
  text-shadow: ${({ theme, $last }) => ($last ? 'none' : theme.shadow['text'])};
  letter-spacing: 0.5px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const _right = styled.div`
  min-height: 230px;
  height: 100%;
  width: 0;
  max-width: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 4px 4px 4px 0;
`;

export const _left = styled.div`
  min-height: 230px;
  height: 100%;
  width: 0;
  max-width: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 4px 0 4px 4px;
`;

export const _bottom = styled.div`
  min-height: 100%;
  height: 100%;
  max-height: 0;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 8px;
  display: none;
`;

export const _side = styled.div`
  min-width: ${({ $right, $left }) => ($right || $left ? '160px' : '100%')};
  width: ${({ $right, $left }) => ($right || $left ? '160px' : '100%')};
  min-height: ${({ $right, $left }) => ($right || $left ? '230px' : '160px')};
  height: ${({ $right, $left }) => ($right || $left ? '230px' : '160px')};
  background: linear-gradient(
    ${({ $left }) => ($left ? '-90deg' : '90deg')},
    rgba(144, 45, 254, 1) 0%,
    rgba(66, 3, 160, 0.5) 100%
  );
  border-radius: ${({ $left }) => ($left ? '12px 0 0 12px' : '0 12px 12px 0')};
  perspective: 1000px;
  transform: perspective(1000px) rotateZ(0deg)
    rotateY(${({ $left }) => ($left ? '-80deg' : '80deg')});
  transform-style: preserve-3d;
  transform-origin: ${({ $left }) => ($left ? 'right' : 'left')};
  backface-visibility: visible;
`;
