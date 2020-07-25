import React from 'react';
import Nav from './Nav';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { MemoryRouter } from 'react-router-dom';

// basic tests
it('shallow renders without crashing', function() {
  shallow(<Nav />);
});

it('matches snapshot', function() {
  let wrapper = shallow(<Nav />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});
// end basic tests

// full mount
it('mounts without crashing', function() {
  mount(
    <MemoryRouter>
      <Nav />
    </MemoryRouter>
  );
});
