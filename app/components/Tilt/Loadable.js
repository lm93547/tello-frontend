/**
 *
 * Asynchronously loads the component for Tilt
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
