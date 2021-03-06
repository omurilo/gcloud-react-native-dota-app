import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import FastImage from 'react-native-fast-image';

export const Container = styled.TouchableHighlight`
  margin-vertical: 4px;
  margin-horizontal: 4px;
  flex-grow: 1;
  flex-basis: 0;
  height: 100px;
`;

export const Overlay = styled(LinearGradient).attrs({
  start: { x: 0.0, y: 0.4 },
  end: { x: 0.0, y: 1 },
  locations: [0, 0.6],
  colors: ['rgba(255,255,255,0)', 'rgba(0,0,0,.8)'],
})`
  flex: 1;
`;

export const Name = styled.Text`
  font-size: 17px;
  position: absolute;
  color: #fff;
  bottom: 0;
  left: 0;
  margin-left: 10px;
  margin-right: 5px;
  margin-bottom: 5px;
  text-align: left;
`;

export const Image = styled(FastImage)`
  height: 100%;
  width: 100%;
`;
