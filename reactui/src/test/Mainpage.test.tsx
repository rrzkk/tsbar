import React from 'react';
import { act, cleanup, fireEvent, getByTestId, render, waitForElement } from '@testing-library/react';


import services from '../api/server';

import main from '../components/Mainpage';
import { Secret } from '../components/Secret';
import { callbackify } from 'util';
import { resolve } from 'path';
import { rejects } from 'assert';



// const mockpush=jest.fn();
// jest.mock('react-router-dom', () => ({

//   ...jest.requireActual('react-router-dom') as any,
//   useHistory: () => ({

//     push:mockpush,
//   })
// }));


it('test post method', () => {
  const { getByText, getByLabelText } = render(<main.Mainpage />);

  const button = getByText('Submit Secret');
  const inputBox = getByLabelText('Your Secret');
  expect(button).toBeInTheDocument();
  expect(inputBox).toBeInTheDocument();

}
);

it('test post method', () => {
  const { getByLabelText } = render(<main.Mainpage />);
  expect((getByLabelText('Your Secret') as HTMLInputElement).value).toEqual('')
}
);

it('test post method', () => {
  const { getByText, getByLabelText } = render(<main.Mainpage />);

  (getByLabelText('Your Secret') as HTMLInputElement).value = 'test';
  expect((getByLabelText('Your Secret') as HTMLInputElement).value).toEqual('test')


});

it('textbox receives text', () => {
  // arrange
  const { getByLabelText } = render(<main.Mainpage />);
  (getByLabelText('Your Secret') as HTMLInputElement).value = 'test';

  // act
  const text = (getByLabelText('Your Secret') as HTMLInputElement).value;

  // assert
  expect(text).toEqual('test');

});




  // it('should get url', async () => {
  
  //   expect(getByTestId('res')).toHaveTextContent('http://localhost:3000/secret/guid');
  // });

  // it('should redirect', async () => {
  

  //   expect(getByTestId('res').closest('a')).toHaveAttribute('href', 'http://localhost:3000/secret/guid')



afterEach(cleanup);
it("should validate textbox", async () => {
  const { getByText, getByLabelText, getByTestId } = render(<main.Mainpage />);
  const button = getByText('Submit Secret');
  await act(async () => {
    fireEvent.click(button);
  });
  const postSecret = jest.spyOn(services, 'postSecret').mockImplementation(async () => {
    return Promise.resolve({
      headers: 'Connection',
      config: {},
      status: 200,
      statusText: 'Ok',
      data: 'guid'
    });
  });
  expect(postSecret).toHaveBeenCalledTimes(0);
  postSecret.mockClear();

})

it('post server not up err test', async () => {
  const { getByText, getByLabelText, getByTestId } = render(<main.Mainpage />);
  const button = getByText('Submit Secret');
  //const alert = jest.spyOn(window, 'alert').mockImplementation(() => { });
  //const testMock = jest.spyOn(main, 'testMock').mockImplementation(() => { });
  const postSecret = jest.spyOn(services, 'postSecret').mockImplementation(() => {
    throw new Error('no response');
  });


  await act(async () => {
    fireEvent.change(getByLabelText('Your Secret'), { target: { value: 'test' } });


  });

  await act(async () => {
    fireEvent.click(button);
  });

  expect(postSecret).toBeCalledTimes(1);
  // expect(alert).toBeCalledTimes(1);
  // expect(alert).toBeCalledWith('Your Error Type is : Connection Error/nYour Error is : no response');
  postSecret.mockClear();
  // alert.mockClear();
  const err = getByTestId('err');
  expect(err.textContent).toBe('Something seems wrong...')


})

it('should handle other post error', async () => {
  const { getByText, getByLabelText, getByTestId } = render(<main.Mainpage />);
  const button = getByText('Submit Secret');
  // const alert = jest.spyOn(window, 'alert').mockImplementation(() => { });
  // const testMock = jest.spyOn(main, 'testMock').mockImplementation(() => { });

  //act
  const postSecret = jest.spyOn(services, 'postSecret').mockImplementation(() => {
    return Promise.resolve({
      headers: 'Connection',
      config: {},
      status: 418,
      statusText: 'I\'m a teapot',
      data: ''
    });
  });

  await act(async () => {
    fireEvent.change(getByLabelText('Your Secret'), { target: { value: 'test' } });
  });

  await act(async () => {
    fireEvent.click(button);
  });
  expect(postSecret).toBeCalledTimes(1);
  // expect(testMock).toBeCalledTimes(1);
  // expect(alert).toBeCalledTimes(1);
  // expect(alert).toBeCalledWith('Your Error Type is : Connection Error/nYour Error is : I\'m a teapot');
  postSecret.mockClear();
  const err = getByTestId('err');
  expect(err.textContent).toBe('Something seems wrong...')
  // alert.mockClear();
  // testMock.mockClear();
})

it('should handle all get error', async () => {
  //act
  const getSecret = jest.spyOn(services, 'getSecret').mockImplementation(async () => {
    return Promise.resolve({
      headers: 'Connection',
      config: {},
      status: 418,
      statusText: 'I\'m a teapot',
      data: ''
    });
  });

    const { getByTestId } = render(<Secret text='' />);
    const err = await waitForElement(()=> getByTestId('err'))

    expect(getSecret).toBeCalledTimes(1);
    expect(err.textContent).toBe('Something seems wrong...');

    getSecret.mockClear();
  })

  it('should copy to clipboard',async()=>{
    const { getByText, getByLabelText, getByTestId } = render(<main.Mainpage />);
    await act(async () => {
      fireEvent.change(getByLabelText('Your Secret'), { target: { value: 'test' } });
    });
    const copyURL = jest.spyOn(main, 'copyURL').mockImplementation(() => {});
    const postSecret = jest.spyOn(services, 'postSecret').mockImplementation(async () => {
      return Promise.resolve({
        headers: 'Connection',
        config: {},
        status: 200,
        statusText: 'Ok',
        data: 'guid'
      });
    });
    await act(async () => {
      fireEvent.click(getByText('Submit Secret'));
    });
    const copyBtn = await waitForElement(()=> getByTestId('copyBtn'));
     await act(async () => {
       fireEvent.click(copyBtn);
    });

    expect(postSecret).toBeCalledTimes(1);
    expect(copyURL).toBeCalledTimes(1);
    expect(copyURL).toBeCalledWith('http://localhost/secret/guid');
    postSecret.mockClear();
    copyURL.mockClear();
  })




