import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import FastImage from 'react-native-fast-image';

export const Container = styled.View`
  flex: 1;
`;

export const TileContainer = styled.View`
  height: 160px;
`;

export const List = styled.SectionList``;

export const Overlay = styled(LinearGradient).attrs({
  start: { x: 0.0, y: 0.7 },
  end: { x: 0.0, y: 1 },
  locations: [0.0, 0.7],
  colors: ['rgba(255,255,255,0)', 'rgba(0,0,0,1)'],
})`
  flex: 1;
`;

export const Name = styled.Text`
  font-size: 26px;
  position: absolute;
  color: #fff;
  bottom: 0;
  left: 0;
  margin-left: 15px;
  margin-bottom: 10px;
`;

export const Image = styled(FastImage)`
  height: 100%;
  width: 100%;
`;

export const Stats = styled.View`
  background: #000000;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`;

export const Text = styled.Text`
  color: ${({ color }) => (color ? color : '#ffffff')};
  font-size: ${({ size }) => (size ? `${size}px` : '15px')};
`;

export const Strong = styled(Text)`
  font-weight: bold;
  margin-right: 5px;
`;

export const BaseContainer = styled.View`
  flex-direction: row;
`;

export const Item = styled.View`
  padding: 10px 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ItemStat = styled.View``;

export const Matched = styled(Text)`
  color: #cccccc;
`;

export const SectionTitle = styled.View`
  background: #f59f98;
  padding: 10px;
`;
