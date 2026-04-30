import SetPassword from "../screens/SetPassword/SetPassword";

export const Paths = {
    SplashScreen: 'SplashScreen',
    Login: 'Login',
    OnBording: 'OnBording',
    Home: 'Home',
    Welcome: 'Welcome',
    Signup: 'Signup',
    SetPassword: 'SetPassword'

} as const;


export type Paths = typeof Paths[keyof typeof Paths];
