/**
 *
 * Asynchronously loads the component for FlightPlan
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
