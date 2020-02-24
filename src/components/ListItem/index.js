import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Title, Subtitle } from './styles';

const ListItem = ({ item }) => (
  <Wrapper>
    <Title>{item.name}</Title>
    <Subtitle>{item.city}</Subtitle>
  </Wrapper>
);

ListItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  })
};

ListItem.defaultProps = {
  item: {
    name: 'Missing name',
    city: 'Missing city',
    id: 0
  }
};

export default ListItem;
