export interface AppState {
    isLoading: boolean;
    user: User | null;
    error: string | null;
  }
  
  export interface User {
    id: number;
    name: string;
    age: number;
  }
  
  export const initialState: AppState = {
    isLoading: false,
    user: null,
    error: null,
  };
  
