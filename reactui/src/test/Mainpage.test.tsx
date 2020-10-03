import React from 'react';
import { act, cleanup, fireEvent, getByText, render, waitForElement } from '@testing-library/react';
import Mainpage from '../components/Mainpage';

import services from '../api/server';

import * as mainpage from '../components/Mainpage';


// const mockpush=jest.fn();
// jest.mock('react-router-dom', () => ({
  
//   ...jest.requireActual('react-router-dom') as any,
//   useHistory: () => ({
    
//     push:mockpush,
//   })
// }));


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


describe('should get secret', () => {

 
  it('should get url', async () => {
    // arrange
    const { getByText, getByLabelText, getByTestId } = render(<Mainpage />);
   
    const postSecret = jest.spyOn(services, 'postSecret').mockImplementation(async ()=>{
      return Promise.resolve({
        headers:'Connection',
        config:{},
        status: 200,
        statusText: 'Ok',
        data:'guid'
      });
    });

    
    // act
    await act(async () => {
      fireEvent.change(getByLabelText('Your Secret'),{target:{value:'test'}});
      //(getByLabelText('Your Secret') as HTMLInputElement).value = 'test';
     
    });
    await act(async () => {
      const button = getByText('Submit Secret');
      fireEvent.click(button);
    });

    // assert
    expect(postSecret).toHaveBeenCalledTimes(1);
    postSecret.mockClear();
    expect(getByTestId('res')).toHaveTextContent('http://localhost:3000/secret/guid');
  });

 it('should redirect',async()=>{
    const { getByText, getByLabelText, getByTestId } = render(<Mainpage />);
    const button = getByText('Submit Secret');
   
    

    const postSecret = jest.spyOn(services, 'postSecret').mockImplementation(async ()=>{
      return Promise.resolve({
        headers:'Connection',
        config:{},
        status: 200,
        statusText: 'Ok',
        data:'guid'
      });
    });
  
    
    await act(async () => {
      fireEvent.change(getByLabelText('Your Secret'),{target:{value:'test'}});
      //(getByLabelText('Your Secret') as HTMLInputElement).value = 'test';
      

      
    });
    await act(async () => {
     
      fireEvent.click(button);
      
    });
    await act(async () => {
     
      
      const link=getByTestId('res');
      fireEvent.click(link);

    });

    expect(getByTestId('res').closest('a')).toHaveAttribute('href', 'http://localhost:3000/secret/guid')

  })

 });

afterEach(cleanup);
it("should validate textbox",async ()=>{
  const { getByText, getByLabelText, getByTestId } = render(<Mainpage />);
  const button = getByText('Submit Secret');
  await act(async () => {
    fireEvent.click(button);
  });
  const postSecret = jest.spyOn(services, 'postSecret').mockImplementation(async ()=>{
    return Promise.resolve({
      headers:'Connection',
      config:{},
      status: 200,
      statusText: 'Ok',
      data:'guid'
    });
  });
  expect(postSecret).toHaveBeenCalledTimes(1); 
  postSecret.mockClear();

})

it('server not up err test', async ()=>{
  const { getByText,getByLabelText } = render(<Mainpage />);
  const button = getByText('Submit Secret');
  const alert=jest.spyOn(window, 'alert').mockImplementation(() => {});
  const testMock=jest.spyOn(mainpage,'testMock').mockImplementation(() => {});
  const postSecret = jest.spyOn(services, 'postSecret').mockImplementation(()=>{
    throw new Error('no response');
   });

     
  await act(async () => {
    fireEvent.change(getByLabelText('Your Secret'),{target:{value:'test'}});
    //(getByLabelText('Your Secret') as HTMLInputElement).value = 'test';

  });

  await act(async () => {
    fireEvent.click(button);
  });

  
  expect( postSecret).toBeCalledTimes(1);
  expect(testMock).toBeCalledTimes(1);
  expect(alert).toBeCalledTimes(1);
  expect( alert).toBeCalledWith('no response');
  postSecret.mockClear();
})

// Timeout

// Interruption

// API cannot persist the material



