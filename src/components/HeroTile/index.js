import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';

const HeroTile = ({ hero, onPress }) => {
  return (
    <Styled.Container onPress={onPress}>
      <Styled.Image source={{ uri: hero.imageUrl }}>
        <Styled.Overlay />
        <Styled.Name>{hero.name}</Styled.Name>
      </Styled.Image>
    </Styled.Container>
  );
};

HeroTile.propTypes = {
  hero: PropTypes.shape({
    name: PropTypes.string,
    imageUrl: PropTypes.string,
  }).isRequired,
  onPress: PropTypes.func.isRequired,
};

export default HeroTile;
