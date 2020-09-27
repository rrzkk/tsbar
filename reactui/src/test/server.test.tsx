import axios, { AxiosResponse } from 'axios';
import services from '../api/server';

it('PostSecret should call axios', () => {
    // arrange
    const secret = 'secret';
    const apiRequest = jest.spyOn(axios, 'request').mockImplementation(_ => {
        return { data: { id: 'guid'}};
    });

    // act
    const result = services.postSecret(secret);

    // assert
    expect(apiRequest).toHaveBeenCalledTimes(1);
    expect(result.data.id).toBe('guid');
})