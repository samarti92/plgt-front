import React from 'react';
import PropTypes from 'prop-types';

import ListItem from '../ListItem';
import { List as StyledList } from './styles';

const List = ({ items }) => (
  <StyledList>
    {items.map((item, index) => (
      <ListItem key={index} item={item} />
    ))}
  </StyledList>
);

List.propTypes = {
  items: PropTypes.array
};

List.defaultProps = {
  items: []
};

export default List;
