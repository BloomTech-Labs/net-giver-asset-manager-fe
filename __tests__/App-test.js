import React from 'react';
import NavigationTestUtils from 'react-navigation/NavigationTestUtils';
import renderer from 'react-test-renderer';
import * as SMSLogin from '../screens/SmsLogin';
import LocationForm from '../screens/LocationForm'
jest.mock('../screens/SmsLogin');

it('renders SMS login page', () => {
  const snap = renderer.create(<LocationForm />).toJSON();
  expect(snap).toMatchSnapshot();
});


describe('Location Form', () => {
  jest.useFakeTimers();

  beforeEach(() => {
    NavigationTestUtils.resetInternalState();
  });

});
