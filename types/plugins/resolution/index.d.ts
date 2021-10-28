import { AbstractPlugin, Viewer } from '../..';
import { Event } from 'uevent';

export type Resolution = {
  id: string;
  label: string;
  panorama: any;
};

export type ResolutionPluginOptions = {
  resolutions: Resolution[];
};

/**
 * Adds a setting to choose between multiple resolutions of the panorama.
 */
export class ResolutionPlugin extends AbstractPlugin {

  static EVENTS: {
    RESOLUTION_CHANGED: 'resolution-changed',
  };

  constructor(psv: Viewer, options: ResolutionPluginOptions);

  /**
   * Changes the available resolutions
   */
  setResolutions(resolutions: Resolution[]);

  /**
   * Changes the current resolution
   */
  setResolution(id: string);

  /**
   * Returns the current resolution
   */
  getResolution(): string;

  /**
   * Triggered when the resolution is changed
   */
  on(e: 'resolution-changed', cb: (e: Event, resolutionId: string) => void): this;

}
