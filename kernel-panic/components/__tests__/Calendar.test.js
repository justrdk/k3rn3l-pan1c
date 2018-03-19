import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Calendar from '../Calendar'
import weeks from '../../weeks'
import renderer from 'react-test-renderer'
Enzyme.configure({adapter: new Adapter()})

let options = {}
let getWeeks = jest.fn()

describe('Calendar Component', () => {
  it('renders without crashing', () => {
    const wrapper = renderer.create(<Calendar weeks={weeks.weeks} asyncWeeks={false}
        serviceCall={getWeeks} url={"/foo"} options={options} />).toJSON();
    expect(wrapper).toBeTruthy();
  }); 

  it('should increase weekindex on state when calling next', () => {
    const wrapper = shallow(<Calendar weeks={weeks.weeks} asyncWeeks={false}
        serviceCall={getWeeks} url={"/foo"} options={options} />);
    wrapper.instance().next()
    expect(wrapper.instance().state.weekIndex).toBe(1)
  }); 

  it('should decrease weekindex on state when calling next', () => {
    const wrapper = shallow(<Calendar weeks={weeks.weeks} asyncWeeks={false}
        serviceCall={getWeeks} url={"/foo"} options={options} />);
    wrapper.setState({ weekIndex: 1 })
    wrapper.instance().back()
    expect(wrapper.instance().state.weekIndex).toBe(0)
  }); 
})

