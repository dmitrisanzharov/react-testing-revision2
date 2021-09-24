import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

test('check button render', ()=> {
    render(<Button />);
});

test('check button', ()=> {
    const {queryByTitle} = render(<Button />);
    let btn = queryByTitle('dummyButton');
    expect(btn.innerHTML).toEqual('Press Here'); 
    fireEvent.click(btn);
    expect(btn.innerHTML).toEqual('You clicked'); 
});






