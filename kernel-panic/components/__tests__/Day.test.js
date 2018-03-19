import React from 'react';
import Day from '../Day';

import renderer from 'react-test-renderer';

let day = 'MON'
let date = 1
let selectDay = jest.fn()

describe('Day Component', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<Day day={day} date={date} selectDay={selectDay}/>).toJSON();
    expect(rendered).toBeTruthy();
  }); 

  it('renders component with correct props', () => {
    const rendered = renderer.create(<Day day={day} date={date} selectDay={selectDay}/>);
    const testInstance = rendered.root
    expect(testInstance.props).toEqual({
      day,
      date,
      selectDay
    })
  }); 

  it('renders component with correct props', () => {
    const rendered = renderer.create(<Day day={day} date={date} selectDay={selectDay}/>);
    const testInstance = rendered.root
    expect(testInstance.type).toBe(Day)
  }); 
})

