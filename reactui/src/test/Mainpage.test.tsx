import React from 'react';
//import { shallow } from 'enzyme';
import { act, fireEvent, getByText, render, waitForElement } from '@testing-library/react';
import Mainpage from '../components/Mainpage';
import fetchMock from 'fetch-mock';

/*it('renders welcome message', () => {
  const wrapper = shallow(<App />);
  const welcome = <a>Learn React!</a>;
  // expect(wrapper.contains(welcome)).toBe(true);
  expect(wrapper.contains(welcome)).toEqual(true);
});

it('renders welcome message', () => {
  const { getByText } = render(<App />);
  expect(getByText('Learn React')).toBeInTheDocument();
});
*/


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
  const button = getByText('Submit Secret');

  (getByLabelText('Your Secret') as HTMLInputElement).value = 'test';
  expect((getByLabelText('Your Secret') as HTMLInputElement).value).toEqual('test')


}
);

describe('test', () => {

  afterEach(()=>{
    fetchMock.restore();
    fetchMock.reset();
  });
  it('test post method', async () => {

    fetchMock.mock("/api/postsecret",{
      status:200,
      body:{
        success: true
      }
    });


    const { getByText, getByLabelText } = render(<Mainpage />);
    const button = getByText('Submit Secret');

    //react-test
    //key-in on Key up   On key down 

    //jest spy on
    //jest.fn
    //https://codewithhugo.com/jest-fn-spyon-stub-mock/

    (getByLabelText('Your Secret') as HTMLInputElement).value = 'test';
    expect((getByLabelText('Your Secret') as HTMLInputElement).value).toEqual('test');

    act(() => { fireEvent.click(button); });
    expect(fetchMock).toHaveProperty("post");
    

  }
  );
});
