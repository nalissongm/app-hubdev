import P from 'prop-types';
import * as Styled from './styles';

export const Text = ({ children }) => {
  return <Styled.Paragraf>{children}</Styled.Paragraf>;
};

Text.propTypes = {
  children: P.node.isRequired,
};
