import { AbstractPlugin, Viewer } from '../..';
import { Event } from 'uevent';

export const EVENTS: {
  STEREO_UPDATED: 'stereo-updated',
};

/**
 * Adds stereo view on mobile devices
 */
export class StereoPlugin extends AbstractPlugin {

  constructor(psv: Viewer);

  /**
   * Checks if the stereo view is enabled
   */
  isEnabled(): boolean;

  /**
   * Enables the stereo view
   * @throws {@link PSVError} if the gyroscope API is not available/granted
   */
  start(): Promise<void>;

  /**
   * Disables the stereo view
   */
  stop();

  /**
   * Enables or disables the stereo view
   */
  toggle();

  /**
   * Triggered when the stereo view is enabled/disabled
   */
  on(e: 'stereo-updated', cb: (e: Event, enabled: boolean) => void): this;

}
