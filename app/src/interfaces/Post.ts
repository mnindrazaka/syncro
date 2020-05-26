import {Api} from './Api';

export interface Post extends Api {
  content: string;
}

export interface PostFormValues {
  content: string;
}
