export interface PreviewEventsParamsType {
  title: string;
  options: {
    title: string;
  }[];
  urlImage: string;
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      SelectYourUser: undefined;
      CreateOptionsStack: undefined;
      Start: undefined;
      CreateOptions: undefined;
      CreateEvent: undefined;
      PreviewEvents: PreviewEventsParamsType;
    }
  }
}
