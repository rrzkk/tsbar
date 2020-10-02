import axios, { AxiosResponse } from 'axios';
import services from '../api/server';

it('PostSecret should call axios', async() => {
    // arrange
    const secret = 'secret';
    const apiRequest = jest.spyOn(axios, 'request').mockImplementation(async _ => {
        return Promise.resolve('guid');
    });

    // act
    const result =await services.postSecret(secret);

    // assert
    expect(apiRequest).toHaveBeenCalledTimes(1);
    expect(result).toBe('guid');
})

it('get api test',async ()=>{
    const url = 'http://test';
    const apiRequest = jest.spyOn(axios, 'request').mockImplementation(async _ => {
        return Promise.resolve('secret');
    });

    // act
    const result =await services.getSecret(url);

    // assert
   
    expect(result).toBe('secret');
  })
