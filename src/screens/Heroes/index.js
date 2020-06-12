import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import database from '@react-native-firebase/database';
import * as Styled from './styles';

import { store, types } from '../../store/context';
import HeroTile from '../../components/HeroTile';

const Heroes = ({ navigation }) => {
  const globalState = useContext(store);
  const { dispatch, reducer } = globalState;

  useEffect(() => {
    database()
      .ref('/heroes')
      .on('value', (snapshot) => {
        const heroesData = snapshot.toJSON();

        const heroesArray = [];
        Object.keys(heroesData).forEach((hero) => {
          heroesArray.push(heroesData[hero]);
        });

        if (heroesArray.length) {
          const heroesSorted = heroesArray.sort((a, b) => {
            return a.name.localeCompare(b.name);
          });

          dispatch({ type: types.REGISTER_HEROES, payload: heroesSorted });
        }
      });
  }, []);

  const handleSelectHero = (hero) => navigation.navigate('Hero', { hero });

  return (
    <Styled.Container>
      <Styled.List
        data={reducer.heroes}
        keyExtractor={({ id }) => String(id)}
        renderItem={({ item }) => (
          <HeroTile hero={item} onPress={() => handleSelectHero(item)} />
        )}
      />
    </Styled.Container>
  );
};

Heroes.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Heroes;
