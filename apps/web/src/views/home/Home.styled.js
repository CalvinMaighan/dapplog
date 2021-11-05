import styled from 'styled-components';
import { media } from 'design';
import { bgTexture } from 'design/textures';
import { TextureFur } from 'design/textures/fur.texture';

export const _home = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const _hero = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 48px;
  ${media.desktop`
      justify-content: center;
      padding-top: 64px;
        padding-bottom: 64px;
      `}
`;

export const _hook = styled.div`
  min-width: ${({ $width }) => ($width ? `${$width}px` : '0')};
  width: ${({ $width }) => ($width ? `${$width}px` : '0')};
  display: flex;
  flex-direction: column;
  padding-bottom: 48px;
  ${media.desktop`
        padding-bottom: 100px;
      `}
`;

export const _text = styled.div`
  width: 100%;
  padding-bottom: 12px;
  > span {
    font-size: 36px;
    font-weight: 700;
    color: rgba(255, 255, 255, 1);
    ${media.desktop`
      padding-bottom: 0;
        font-size: 64px;
        font-weight: 700;
      `}
  }
`;

export const _subtext = styled.div`
  > span {
    font-size: 16px;
    font-weight: 700;
    color: rgba(255, 255, 255, 1);
    margin-right: 32px;
    &:last-child {
      margin-right: 0;
    }
    ${media.desktop`
        font-size: 24px;
        font-weight: 700;
      `}
  }
`;

export const _phases = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${media.desktop`
        flex-direction: row;
      `}
`;

export const _first = styled.div`
  position: relative;
  z-index: 5;
  min-width: 260px;
  width: 260px;
  min-height: 220px;
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadow['glass']};
  background: ${({ theme }) => theme.highlight['background']};
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
  ${media.desktop`
      flex-direction: row;
        margin-right: 32px;
        margin-bottom: 0;
      `}
`;

export const _second = styled.div`
  position: relative;
  z-index: 5;
  min-width: 260px;
  width: 260px;
  min-height: 220px;
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadow['glass']};
  background: ${({ theme }) => theme.highlight['background']};
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
  ${media.desktop`
        margin-bottom: 0;
      `}
`;

export const _third = styled.div`
  position: relative;
  z-index: 5;
  min-width: 260px;
  width: 260px;
  min-height: 220px;
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadow['glass']};
  background: ${({ theme }) => theme.highlight['background']};
  display: flex;
  flex-direction: column-reverse;
  margin-bottom: 32px;
  ${media.desktop`
        margin-left: 32px;
        margin-bottom: 0;
        flex-direction: row;
      `}
`;

export const _projects = styled.div`
  position: relative;
  z-index: 5;
  min-height: 100vh;
  width: 100%;
  background-color: #000;
  background-image: ${({ theme }) => bgTexture(TextureFur('#05060a', 0.04))};
  background-size: 24px;
  background-repeat: repeat;
  bottom: 80px;
`;

export const _shadow = styled.div`
  width: 100%;
  height: 0;
  display: flex;
  flex-direction: column;
`;

export const _gradient = styled.div`
  min-width: 100%;
  width: 100%;
  min-height: 80px;
  height: 80px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0) 100%
  );
`;

export const _title = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.highlight['text']};
  padding-bottom: 12px;
`;

export const _avala = styled.div``;

export const _container = styled.div`
  position: relative;
  z-index: 20;
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
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const _right = styled.div`
  position: relative;
  z-index: 10;
  height: 0;
  min-width: 256px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 4px 3px 4px;
  ${media.desktop`
      flex-direction: row;
      min-height: 230px;
      height: 100%;
      min-width: 0;
      width: 0;
      padding: 4px 4px 4px 0;
      `}
`;

export const _left = styled.div`
  position: relative;
  z-index: 10;
  height: 0;
  min-width: 256px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 4px 3px 4px;
  ${media.desktop`
      flex-direction: row;
      justify-content: flex-end;
      min-height: 230px;
      height: 100%;
      min-width: 0;
      width: 0;
      padding: 4px 0 4px 4px;
      `}
`;

export const _bottom = styled.div`
  position: relative;
  z-index: 10;
  height: 0;
  max-height: 0;
  min-width: 256px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 4px 3px 4px;
  ${media.desktop`
            display: none;
      `}
`;

export const _side = styled.div`
  position: relative;
  z-index: -1;
  display: flex;
  width: 100%;
  min-height: 240px;
  height: 240px;
  background: linear-gradient(
    0deg,
    rgba(66, 3, 160, 0.5) 0%,
    rgba(144, 45, 254, 1) 100%
  );
  border-radius: 0 0 12px 12px;
  perspective: 1000px;
  transform-style: preserve-3d;
  transform-origin: top;
  transform: perspective(1000px) rotateZ(0deg) rotateX(-82deg);
  backface-visibility: visible;
  ${media.desktop`
        display: ${({ $left, $right }) => ($left || $right ? 'flex' : 'none')};
        min-width: ${({ $right, $left }) =>
          $right || $left ? '160px' : '100%'};
        width: ${({ $right, $left }) => ($right || $left ? '160px' : '100%')};
        min-height: ${({ $right, $left }) =>
          $right || $left ? '230px' : '160px'};
        height: ${({ $right, $left }) => ($right || $left ? '230px' : '160px')};
        background: linear-gradient(
                ${({ $left }) => ($left ? '-90deg' : '90deg')},
                rgba(144, 45, 254, 1) 0%,
                rgba(66, 3, 160, 0.5) 100%
              );
              transform-origin: ${({ $left }) => ($left ? 'right' : 'left')};
        transform: perspective(1000px) rotateZ(0deg) rotateY(${({ $left }) =>
          $left ? '-80deg' : '80deg'});
        border-radius: ${({ $left }) =>
          $left ? '12px 0 0 12px' : '0 12px 12px 0'};
      `}
`;

export const _scroll = styled.div`
  position: relative;
  z-index: 40;
  width: 100%;
  height: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  > svg {
    min-width: 36px;
    width: 36px;
    min-height: 36px;
    height: 36px;
    color: white;
    position: relative;
    bottom: 16px;
  }
`;
