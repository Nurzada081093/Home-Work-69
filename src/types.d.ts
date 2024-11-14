export interface IShow {
  name: string;
  id: number
}

export interface IShowAPI {
  show: IShow;
}

export interface IShowDetail {
  name: string;
  summary: string;
  genres: string;
  language: string;
  premiered: string;
  ended: string;
  runtime: number;
  image: {
    medium: string;
  };
}


export interface InitialState {
  shows: IShow [];
  showValueFromUser: string;
  showDetailedInformation: IShowDetail | null;
  isLoading: boolean;
  error: boolean;
}