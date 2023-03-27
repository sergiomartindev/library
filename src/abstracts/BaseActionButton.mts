abstract class BaseActionButton {
  private readonly _label: string;
  private readonly _action: (...args: any[]) => {};

  constructor(label: string, action: (...args: any[]) => {}) {
    this._label = label;
    this._action = action;
  }

  get label(): string {
    return this._label;
  }

  get action(): (...args: any[]) => {} {
    return this._action;
  }
}

export default BaseActionButton;
