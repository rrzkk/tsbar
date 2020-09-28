import axios, { AxiosResponse } from 'axios';
import services from '../api/server';

it('PostSecret should call axios', async() => {
    // arrange
    const secret = 'secret';
    const apiRequest = jest.spyOn(axios, 'request').mockImplementation(async _ => {
        return Promise.resolve({ data: { id: 'guid'}});
    });

    // act
    const result =await services.postSecret(secret);

    // assert
    expect(apiRequest).toHaveBeenCalledTimes(1);
    expect(result.data.id).toBe('guid');
})