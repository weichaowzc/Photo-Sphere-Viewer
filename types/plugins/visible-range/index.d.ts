import { AbstractPlugin, Viewer } from '../..';

export type VisibleRangePluginOptions = {
  latitudeRange?: number[] | string[];
  longitudeRange?: number[] | string[];
  /** @default false */
  usePanoData?: boolean;
};

/**
 * Locks visible longitude and/or latitude
 */
export class VisibleRangePlugin extends AbstractPlugin {

  constructor(psv: Viewer, options: VisibleRangePluginOptions);

  /**
   * Changes the latitude range
   */
  setLatitudeRange(range: number[] | string[]);

  /**
   * Changes the longitude range
   */
  setLongitudeRange(range: number[] | string[]);

  /**
   * Changes the latitude and longitude ranges according the current panorama cropping data
   */
  setRangesFromPanoData()

}
