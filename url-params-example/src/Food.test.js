import React from 'react';
import Food from './Food';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

// mock the route "match" prop
const routeMatch = { params: { name: 'grapefruit' } };

it('renders without crashing', function() {
  shallow(<Food match={routeMatch} />);
});

it('matches snapshot', function() {
  let wrapper = shallow(<Food match={routeMatch} />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});

// end basic tests
