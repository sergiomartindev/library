import IObserver from './IObserver.mjs';

interface ISubject {
  registerObserver(observer: IObserver);
  removeObserver(observer: IObserver);
  notifyObservers(...args: any[]): void;
}

export default ISubject;
