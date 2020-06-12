import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';

export const Container = styled.ScrollView``;

export const Title = styled.Text``;
export const HeroButton = styled.TouchableOpacity`
  height: 72px;
  width: 48%;
  margin: 5px 2px;
  background-color: #ccc;
  padding: 0;
  elevation: 0;
  align-items: center;
  justify-content: center;
`;

export const HeroImg = styled(FastImage)`
  height: 100%;
  width: 100%;
  position: relative;
`;

export const HeroIconText = styled.Text`
  font-size: 22px;
  color: ${({ warning }) => (warning ? '#fff' : '#585858')};
`;
export const HeroIcon = styled.View`
  position: absolute;
  align-items: center;
  justify-content: center;
  flex: 1;
  background-color: ${({ warning }) =>
    warning ? 'rgba(255, 173, 173, 0.65)' : 'transparent'};
  width: 100%;
  height: 100%;
`;

export const EnemiesContainer = styled.View``;
export const RecomendationsContainer = styled.View``;
export const ButtonsContainer = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-flow: row wrap;
  align-content: stretch;
  padding: 10px;
`;

export const TeamContainer = styled.View``;

export const HeroesModal = styled.Modal``;

export const List = styled.FlatList.attrs({
  numColumns: 2,
})``;
