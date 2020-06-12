import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

const initialState = {
  heroes: [],
  enemyHeroes: [],
  teamHeroes: [],
};
const store = createContext(initialState);
const { Provider } = store;

const types = {
  REGISTER_HEROES: 'register_heroes',
  ADD_ENEMY_HERO: 'add_enemy_hero',
  ADD_TEAM_HERO: 'add_team_hero',
  REMOVE_ENEMY_HERO: 'remove_enemy_hero',
  REMOVE_TEAM_HERO: 'remove_team_hero',
  ORDER_HEROES: 'order_heroes',
};

const StateProvider = ({ children }) => {
  const [reducer, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case types.REGISTER_HEROES:
        return { ...state, heroes: action.payload };
      case types.ADD_ENEMY_HERO:
        return {
          ...state,
          enemyHeroes: [...state.enemyHeroes, action.payload],
        };
      case types.REMOVE_ENEMY_HERO:
        return {
          ...state,
          enemyHeroes: state.enemyHeroes.filter(
            (enemy) => enemy.id !== action.payload.id,
          ),
        };
      case types.ADD_TEAM_HERO:
        return {
          ...state,
          teamHeroes: [...state.teamHeroes, action.payload],
        };
      case types.REMOVE_TEAM_HERO:
        return {
          ...state,
          teamHeroes: state.teamHeroes.filter(
            (myTeamHero) => myTeamHero.id !== action.payload.id,
          ),
        };
      case types.ORDER_HEROES:
        return {
          ...state,
          heroes: state.heroes.sort((a, b) => {
            if (action.payload.orderType === 'rank') {
              return a.rank - b.rank;
            }

            return a.name.localeCompare(b.name);
          }),
        };
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ reducer, dispatch }}>{children}</Provider>;
};

StateProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export { store, types, StateProvider };
