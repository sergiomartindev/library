abstract class BaseActionButton {
  private readonly _label: string;
  private readonly _action: (...args: any[]) => {};
  private readonly _isDisabled: boolean;

  constructor(label: string, action: (...args: any[]) => {}, isDisabled: boolean) {
    this._label = label;
    this._action = action;
    this._isDisabled = isDisabled;
  }

  get label(): string {
    return this._label;
  }

  get action(): (...args: any[]) => {} {
    return this._action;
  }

  get isDisabled(): boolean {
    return this._isDisabled;
  }
}

export default BaseActionButton;
