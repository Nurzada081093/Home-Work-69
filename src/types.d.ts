export interface IShow {
  name: string;
  id: number
}

export interface IShowAPI {
  show: IShow;
}

export interface InitialState {
  shows: IShow [];
  isLoading: boolean;
  error: boolean;
}