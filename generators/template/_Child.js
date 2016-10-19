import Root from '../Root';

{%ENDPOINT_BLOCK%}
export class {%METHOD_NAME%} extends Root {
  constructor() {
    super();
    this.{%FIELD_NAME%} = null;
  }

  check(customCheck) {
    return super.check({
    //   {%FIELD_CHECKBLOCK%}
      {%FIELD_NAME%}: { datetime: true, datetime: { dateOnly: true}, email: true, presence: true, url: true, },

    }, ...customCheck);
  }
}
{%END_ENDPOINT_BLOCK%}
