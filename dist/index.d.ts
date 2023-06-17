import { Snap as MidtransSnap } from './lib/snap';
import { CoreApi as MidtransCoreApi } from './lib/coreApi';
import { Iris as MidtransIris } from './lib/iris';
import { MidtransError as Err } from './lib/midtransError';
export declare namespace Midtrans {
    class Snap extends MidtransSnap {
    }
    class CoreApi extends MidtransCoreApi {
    }
    class Iris extends MidtransIris {
    }
    class MidtransError extends Err {
    }
}
