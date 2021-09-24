import { render, screen, fireEvent } from '@testing-library/react';
import Search from './SearchBar';


test('check button render', ()=> {
    render(<Search />);
});


test('all searchbar', ()=> {
    const {queryByTitle} = render(<Search />);
    let search = queryByTitle('mySearch');
    expect(search).toBeDefined();
    expect(search.value).toBe('');
    fireEvent.change(search, {target: {value: 'new value'}});
    expect(search.value).toBe('new value');
});


test('renders learn react link', () => {
    render(<Search />);
    const linkElement = screen.getByText(/Some random text/i);
    expect(linkElement).toBeInTheDocument();
  });