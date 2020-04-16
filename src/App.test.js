import React from 'react';
import { render, fireEvent, screen} from '@testing-library/react';
import App from './App';
import PortFolio from './components/Portfolio'
import ProjectsContext from './components/ProjectsContext'

test('renders home link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders projects', async () => {

  // assemble
  const {container, getByText} = await render(<App />)

  // act
  // await fireEvent.click(getByText('Portfolio'))
  console.log(container)

  // assert
  expect(getByText('Make Change')).toBeInTheDocument()

})
