import React from 'react';
import { act, cleanup, fireEvent, getByText, render, waitForElement } from '@testing-library/react';
import Mainpage from '../components/Mainpage';
import service from '../api/server';
import { AxiosResponse } from 'axios';


it('test post method', () => {
  const { getByText, getByLabelText } = render(<Mainpage />);

  const button = getByText('Submit Secret');
  const inputBox = getByLabelText('Your Secret');
  expect(button).toBeInTheDocument();
  expect(inputBox).toBeInTheDocument();

}
);

it('test post method', () => {
  const { getByLabelText } = render(<Mainpage />);
  expect((getByLabelText('Your Secret') as HTMLInputElement).value).toEqual('')
}
);

it('test post method', () => {
  const { getByText, getByLabelText } = render(<Mainpage />);

  (getByLabelText('Your Secret') as HTMLInputElement).value = 'test';
  expect((getByLabelText('Your Secret') as HTMLInputElement).value).toEqual('test')


});

it('textbox receives text', () => {
  // arrange
  const { getByLabelText } = render(<Mainpage />);
  (getByLabelText('Your Secret') as HTMLInputElement).value = 'test';

  // act
  const text = (getByLabelText('Your Secret') as HTMLInputElement).value;

  // assert
  expect(text).toEqual('test');

});

describe('test', () => {
  afterEach(cleanup);
 
  it('test post method', async () => {
    // arrange
    const { getByText, getByLabelText, getByTestId } = render(<Mainpage />);
    const button = getByText('Submit Secret');
   
    const postSecret = jest.spyOn(service, 'postSecret').mockImplementation(async ()=>{
      return Promise.resolve({
        headers:'Connection',
        config:{},
        status: 200,
        statusText: 'Ok',
        data: {
          id: "guid"
        }
      });
    });

    
    // act
    await act(async () => {
      fireEvent.change(getByLabelText('Your Secret'),{target:{value:'test'}});
      //(getByLabelText('Your Secret') as HTMLInputElement).value = 'test';
      fireEvent.click(button);
    });

    // assert
    expect(postSecret).toHaveBeenCalledTimes(1);
    expect(getByTestId('res')).toHaveTextContent('{"id":"guid"}');
  });
});
