import PropTypes from 'prop-types';
import uid from '../uid';

describe('attrs/uid', () => {
  it('when a validater is provided should return it', () => {
    const validater = () => {};
    expect(uid(validater)).toBe(validater);
  });

  it('when a validater is not provided should return prop-types.any.isRequired', () => {
    expect(uid()).toBe(PropTypes.any.isRequired);
  });
});
