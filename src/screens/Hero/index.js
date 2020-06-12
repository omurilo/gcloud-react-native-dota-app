import React, { memo } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';

const normalizeHero = ({
  id,
  imageUrl,
  name,
  rank,
  winRate,
  bestHeroes,
  worstHeroes,
}) => {
  const bestHeroesList = [];
  const worstHeroesList = [];

  Object.keys(bestHeroes).forEach((hero) => {
    bestHeroesList.push(bestHeroes[hero]);
  });

  Object.keys(worstHeroes).forEach((hero) => {
    worstHeroesList.push(worstHeroes[hero]);
  });

  return {
    id,
    imageUrl,
    name,
    rank,
    winRate,
    list: [
      {
        title: 'Best Heroes',
        data: bestHeroesList.sort((a, b) => b.winRate - a.winRate),
      },
      {
        title: 'Worst Heroes',
        data: worstHeroesList.sort((a, b) => b.winRate - a.winRate),
      },
    ],
  };
};

const Hero = ({
  route: {
    params: { hero: heroData },
  },
}) => {
  const heroNormalized = normalizeHero(heroData);

  return (
    <Styled.Container>
      <Styled.TileContainer>
        <Styled.Image source={{ uri: heroNormalized.imageUrl }}>
          <Styled.Overlay />
          <Styled.Name>{heroNormalized.name}</Styled.Name>
        </Styled.Image>
      </Styled.TileContainer>
      <Styled.Stats>
        <Styled.BaseContainer>
          <Styled.Strong>Rank:</Styled.Strong>
          <Styled.Text>{`${heroNormalized.rank}º`}</Styled.Text>
        </Styled.BaseContainer>
        <Styled.BaseContainer>
          <Styled.Strong>WinRate:</Styled.Strong>
          <Styled.Text>{`${heroNormalized.winRate.toFixed(2)}%`}</Styled.Text>
        </Styled.BaseContainer>
      </Styled.Stats>
      <Styled.List
        sections={heroNormalized.list}
        keyExtractor={({ id }) => String(id)}
        renderItem={({ item }) => (
          <Styled.Item>
            <Styled.ItemStat>
              <Styled.Text color="#585858" size="16">
                {item.name}
              </Styled.Text>
              <Styled.Text color="#999999" size="14">
                {`${item.matches} Matches`}
              </Styled.Text>
            </Styled.ItemStat>
            <Styled.Text color="#585858">
              {`${item.winRate.toFixed(2)}%`}
            </Styled.Text>
          </Styled.Item>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Styled.SectionTitle>
            <Styled.Strong>{title}</Styled.Strong>
          </Styled.SectionTitle>
        )}
        stickySectionHeadersEnabled
      />
    </Styled.Container>
  );
};

Hero.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      hero: PropTypes.shape({
        id: PropTypes.string,
        imageUrl: PropTypes.string,
        name: PropTypes.string,
        rank: PropTypes.number,
        winRate: PropTypes.number,
        bestHeroes: PropTypes.objectOf(
          PropTypes.shape({
            id: PropTypes.string,
            advantage: PropTypes.number,
            matches: PropTypes.number,
            name: PropTypes.string,
            winRate: PropTypes.number,
          }),
        ),
        worstHeroes: PropTypes.objectOf(
          PropTypes.shape({
            id: PropTypes.string,
            advantage: PropTypes.number,
            matches: PropTypes.number,
            name: PropTypes.string,
            winRate: PropTypes.number,
          }),
        ),
      }),
    }),
  }).isRequired,
};

export default memo(Hero);
