import type { StackScreenProps } from '@react-navigation/stack';

import { Paths } from './paths';


export type RootStackParamList = {
    [Paths.SplashScreen]: undefined;
    [Paths.Login]: undefined;
    [Paths.OnBording]: undefined;
    [Paths.Home]: undefined;
};

export type RootScreenProps<S extends keyof RootStackParamList = keyof RootStackParamList> = StackScreenProps<RootStackParamList, S>;

export type MainStackProps = {
    isKycDone?: boolean;
};

export type AppRoutesProps = {
    accessToken?: string | null;
    kycStatus?: boolean;
};
