/**
 * Created by huyhuynh on 8/25/17.
 */
import axios from 'axios';

class MockApiService {
    async getProfile(id) {
        const response = await axios.get(`https://foobar123.getsandbox.com/user/${id}`);
        return response.data;
    }
}

export default new MockApiService();