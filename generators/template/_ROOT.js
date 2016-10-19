import R from 'ramda';
import validate from 'validate.js';
import { PayloadNotCheck, ValidateFailed } from '../../errors/';

class Root {
  constructor() {
    this.chekerCounter = 0;
    this.isValidate = false;
    this.validateResult = null;
  }
  check(constraints) {
    this.chekerCounter = this.chekerCounter + 1;
    const result = validate(this, constraints);
    if (R.isNil(result)) {
      this.isValidate = true;
      return true;
    }
    this.validateResult = result;
    return result;
  }

  dispatchAction(action) {
    if (this.chekerCounter > 0 && this.isValidate) {
      return action(this.constructor.name, this);
    }

    if (this.chekerCounter <= 0) {
      console.error('Please execute the check founciton before dispatching an action');
      throw new PayloadNotCheck('PAYLOAD_NO_CHECK');
    }

    if (!this.isValidate) {
      console.error('Please execute the check founciton before dispatching an action');
      throw new ValidateFailed('VALIDATE_FAILED', this.validateResult);
    }
    return true;
  }

  get getter() {
    return this;
  }
}

export default Root;
