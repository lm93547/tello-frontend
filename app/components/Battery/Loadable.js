/**
 *
 * Asynchronously loads the component for Battery
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
