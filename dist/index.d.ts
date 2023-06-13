import Snap from './lib/snap';
import CoreApi from './lib/coreApi';
import Iris from './lib/iris';
import MidtransError from './lib/midtransError';
declare const Midtrans: {
    Snap: typeof Snap;
    CoreApi: typeof CoreApi;
    Iris: typeof Iris;
    MidtransError: typeof MidtransError;
};
export default Midtrans;
