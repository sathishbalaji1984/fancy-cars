import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import AddToCart from './addToCart';

describe('Add to cart', () => {
  let wrapper;

  it('should show add to cart button', () => {
    wrapper = mount(<AddToCart stockStatus="In DealerShip" />);
    expect(wrapper.text()).to.equal('Buy Now');
  });

  it('should show add to cart button', () => {
    wrapper = mount(<AddToCart stockStatus="Out of Stock" />);
    expect(wrapper.text()).to.equal('Buy Now');
  });
});
