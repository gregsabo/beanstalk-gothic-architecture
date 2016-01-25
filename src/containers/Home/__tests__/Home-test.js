import { expect } from 'chai';
import React from 'react';
import Home from '../Home';

describe('Home', () => {
  it('should display the header', () => {
    const output = decodeURI(React.renderToStaticMarkup(<Home />));
    expect(output).to.contains('A list of things that aren&#x27;t Gothic Architecture:');
  });
});
