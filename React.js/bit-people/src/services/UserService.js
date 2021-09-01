import User from '../entities/User';

class UserService {
    fetchUser() {
        return fetch("https://randomuser.me/api/?results=15")
            .then((response) => {
                return response.json()
            })
            .then((result) => {
                const userList = result.results
                return userList;
            })
            .then((userFromApi) => {
                return userFromApi.map((user) => {
                    return new User(user);
                })
            })
    }
}
export const userService = new UserService();