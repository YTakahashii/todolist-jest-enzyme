import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import App from './App';

enzyme.configure({ adapter: new Adapter() });

it('App renders without crashing', () => {
    const component = enzyme.shallow(<App />);
    expect(component.exists()).toEqual(true);
});
