import { AbstractPlugin, Viewer } from '../..';
import { Event } from 'uevent';

export type GyroscopePluginOptions = {
  /** @default true */
  touchmove?: boolean;
  /** @default false */
  absolutePosition?: boolean;
};

export const EVENTS: {
  GYROSCOPE_UPDATED: 'gyroscope-updated',
};

/**
 * Adds gyroscope controls on mobile devices
 */
export class GyroscopePlugin extends AbstractPlugin {

  constructor(psv: Viewer, options: GyroscopePluginOptions);

  /**
   * Checks if the gyroscope is enabled
   */
  isEnabled(): boolean;

  /**
   * Enables the gyroscope navigation if available
   * @throws {@link PSVError} if the gyroscope API is not available/granted
   */
  start(): Promise<void>;

  /**
   * Disables the gyroscope navigation
   */
  stop();

  /**
   * Enables or disables the gyroscope navigation
   */
  toggle();

  /**
   * Triggered when the gyroscope mode is enabled/disabled
   */
  on(e: 'gyroscope-updated', cb: (e: Event, enabled: boolean) => void): this;

}
