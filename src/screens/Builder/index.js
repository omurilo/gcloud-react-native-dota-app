import React, { useState, useContext } from 'react';
import HeroTile from '../../components/HeroTile';
import { store, types } from '../../store/context';

import * as Styled from './styles';

const Builder = () => {
  const globalState = useContext(store);
  const { dispatch, reducer } = globalState;

  const [modalOpen, setModalOpen] = useState(false);
  const [selectHeroesOf, setSelectHeroesOf] = useState(null);

  const handleModalOpen = (type) => {
    setSelectHeroesOf(type);
    setModalOpen(!modalOpen);
  };

  const addOrRemoveHero = {
    myTeam: {
      add: (hero) => {
        dispatch({
          type: types.ADD_TEAM_HERO,
          payload: hero,
        });
        setModalOpen(false);
      },
      remove: (hero) => {
        dispatch({
          type: types.REMOVE_TEAM_HERO,
          payload: hero,
        });
      },
    },
    enemyTeam: {
      add: (hero) => {
        dispatch({
          type: types.ADD_ENEMY_HERO,
          payload: hero,
        });
        setModalOpen(false);
      },
      remove: (hero) => {
        dispatch({
          type: types.REMOVE_ENEMY_HERO,
          payload: hero,
        });
      },
    },
  };

  const normalizeHeroesDate = () => {
    return reducer.heroes.filter(
      (hero) =>
        reducer.enemyHeroes.indexOf(hero) < 0 &&
        reducer.teamHeroes.indexOf(hero) < 0,
    );
  };

  return (
    <Styled.Container>
      {modalOpen && (
        <Styled.HeroesModal animated visible={modalOpen}>
          <>
            <Styled.Container>
              <Styled.Title>Olá jogador!</Styled.Title>
            </Styled.Container>
            <Styled.List
              data={normalizeHeroesDate()}
              keyExtractor={({ id }) => String(id)}
              renderItem={({ item }) => (
                <HeroTile
                  hero={item}
                  onPress={() => addOrRemoveHero[selectHeroesOf].add(item)}
                />
              )}
            />
          </>
        </Styled.HeroesModal>
      )}
      <Styled.EnemiesContainer>
        <Styled.Title>Enemy Team</Styled.Title>
        <Styled.ButtonsContainer>
          {reducer &&
            reducer.enemyHeroes &&
            reducer.enemyHeroes.map((enemy) => (
              <Styled.HeroButton
                key={enemy.id}
                onPress={() => addOrRemoveHero.enemyTeam.remove(enemy)}
              >
                <Styled.HeroImg source={{ uri: enemy.imageUrl }} />
                <Styled.HeroIcon warning>
                  <Styled.HeroIconText warning>X</Styled.HeroIconText>
                </Styled.HeroIcon>
              </Styled.HeroButton>
            ))}
          {reducer && reducer.enemyHeroes && reducer.enemyHeroes.length < 5 && (
            <Styled.HeroButton onPress={() => handleModalOpen('enemyTeam')}>
              <Styled.HeroIcon>
                <Styled.HeroIconText>+</Styled.HeroIconText>
              </Styled.HeroIcon>
            </Styled.HeroButton>
          )}
        </Styled.ButtonsContainer>
      </Styled.EnemiesContainer>
      <Styled.TeamContainer>
        <Styled.Title>My Team</Styled.Title>
        <Styled.ButtonsContainer>
          {reducer &&
            reducer.teamHeroes &&
            reducer.teamHeroes.map((myTeamHero) => (
              <Styled.HeroButton
                key={myTeamHero.id}
                onPress={() => addOrRemoveHero.myTeam.remove(myTeamHero)}
              >
                <Styled.HeroImg source={{ uri: myTeamHero.imageUrl }} />
                <Styled.HeroIcon warning>
                  <Styled.HeroIconText warning>X</Styled.HeroIconText>
                </Styled.HeroIcon>
              </Styled.HeroButton>
            ))}
          {reducer && reducer.teamHeroes && reducer.teamHeroes.length < 5 && (
            <Styled.HeroButton onPress={() => handleModalOpen('myTeam')}>
              <Styled.HeroIcon>
                <Styled.HeroIconText>+</Styled.HeroIconText>
              </Styled.HeroIcon>
            </Styled.HeroButton>
          )}
        </Styled.ButtonsContainer>
      </Styled.TeamContainer>
      <Styled.RecomendationsContainer>
        <Styled.Title>Recommended Picks</Styled.Title>
        <Styled.ButtonsContainer>
          {Array(3)
            .fill(0)
            .map(() => (
              <Styled.HeroButton key={1 + Math.random() * 10}>
                <Styled.Title>{1 + Math.random() * 10}</Styled.Title>
              </Styled.HeroButton>
            ))}
        </Styled.ButtonsContainer>
      </Styled.RecomendationsContainer>
    </Styled.Container>
  );
};

export default Builder;
