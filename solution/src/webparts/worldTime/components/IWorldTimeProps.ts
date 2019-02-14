export interface IWorldTimeProps {
  description: string;
  timeZoneOffset: number;
  showClock : boolean;
  errorHandler: (errorMessage: string) => void;
}
