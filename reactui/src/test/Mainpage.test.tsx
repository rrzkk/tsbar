import React from 'react';
//import { shallow } from 'enzyme';
import { act, cleanup, fireEvent, getByText, render, waitForElement } from '@testing-library/react';
import Mainpage from '../components/Mainpage';
import axios from 'axios';
import mockAxios from "axios";

jest.mock('axios');


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
  afterEach(cleanup);
 
  it('test post method', async () => {

    var button: Node | Window;
    var text;

    const { getByText, getByLabelText } = render(<Mainpage />);
    button = getByText('Submit Secret');

    (getByLabelText('Your Secret') as HTMLInputElement).value = 'test';
    text=(getByLabelText('Your Secret') as HTMLInputElement).value;

    expect(text).toEqual('test');
    act(() => { fireEvent.click(button); });

    expect(axios).toHaveBeenCalledTimes(1);
    //axios.post.mockImplementationOnce()


  }
  );
});
