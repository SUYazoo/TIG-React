/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

 import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
 import { NativeStackScreenProps } from '@react-navigation/native-stack';
 
 declare global {
   namespace ReactNavigation {
     interface RootParamList extends RootStackParamList {}
   }
 }
 
 export type RootStackParamList = {
   Root: NavigatorScreenParams<RootTabParamList> | undefined;
   Home : undefined;
   Modal: undefined;
   NotFound: undefined;
 };
 
 export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
   RootStackParamList,
   Screen
 >;
 
 export type RootTabParamList = {
    Boats : undefined;
    Restaurants : undefined;
    Recipes : undefined;
 };

 /*
 export interface IPage {
  id: number;
  title: string;
  description: string;
  status: boolean;
}

export type PageContextType = {
  page: IPage[];
  savePage: (page: IPage) => void;
  loadPage: (page: IPage) => void;
  updatePage: (id: number) => void;
};*/
 
 