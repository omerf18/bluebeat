import userService from '../services/userService.js'

var localLoggedinUser = null;
if (sessionStorage.user) localLoggedinUser = JSON.parse(sessionStorage.user);

export const userStore = {
    state: {
        loggedinUser : localLoggedinUser,
    },
    getters: {
        loggedinUser(state) {
            return state.loggedinUser
        }
    },
    mutations: {
        setUser(state, {user}) {
            state.loggedinUser = user;
        },      
    },
    actions: {
        async login(context, {userCred}) {
            console.log('login', userCred);
            const user = await userService.login(userCred);
            context.commit({type: 'setUser', user})
            // this.$router.push("/")
            return user;
        },
        async signup(context, {userCred}) {
            console.log('signup', userCred);
            const user = await userService.signup(userCred)
            context.commit({type: 'setUser', user})
            return user;
        },
        async logout(context) {
            await userService.logout()
            context.commit({type: 'setUser', user: null})
        },
       
    }
}