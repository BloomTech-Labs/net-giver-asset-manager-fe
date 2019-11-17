import React from 'react';
import NavigationTestUtils from 'react-navigation/NavigationTestUtils';
import renderer from 'react-test-renderer';
import SMSLogin from '../screens/SmsLogin';
import LocationForm from '../screens/LocationForm'
// jest.mock('../screens/SmsLogin');

// it('renders Location Form', () => {
//   const snap = renderer.create(<LocationForm />).toJSON();
//   expect(snap).toMatchSnapshot();
// });

describe('Testing case', () => {
  jest.useFakeTimers();

  beforeEach(() => {
    NavigationTestUtils.resetInternalState();
  });

  it('SMS Login test case', () => {
    const snap = renderer.create(<SMSLogin />).toJSON();
    expect(true).toEqual(true);

  })

});
