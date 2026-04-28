
export const Paths = {
    SplashScreen: 'SplashScreen',
    Login: 'Login',
    OnBording: 'OnBording',
    Home: 'Home',

} as const;


export type Paths = typeof Paths[keyof typeof Paths];
