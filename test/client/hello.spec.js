import { Hello } from '../../src/client/hello'
import React from "react"
import { expect } from 'chai'
import { shallow } from 'enzyme';

describe('react test sample', () => {
  it('rendering <div>Hello React!</div>', () => {
    const result = shallow(<Hello />).contains(<div>Hello React!</div>)
    console.log(result)
    expect(result).to.be.true
  });
});