import { Snap as MidtransSnap } from './lib/snap';
import { CoreApi as MidtransCoreApi } from './lib/coreApi';
import { Iris as MidtransIris } from './lib/iris';
import  { MidtransError as Err } from './lib/midtransError';

export namespace Midtrans {
  export class Snap extends MidtransSnap {}
  export class CoreApi extends MidtransCoreApi {}
  export class Iris extends MidtransIris {}
  export class MidtransError extends Err {}
}
