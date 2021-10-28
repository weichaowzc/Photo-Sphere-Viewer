import { AbstractPlugin, ExtendedPosition, Viewer } from '../..';

export type CompassPluginOptions = {
  /** @default '120px' */
  size?: string;
  /** @default 'top left' */
  position?: string;
  backgroundSvg?: string;
  /** @default 'rgba(255, 255, 255, 0.5)' */
  coneColor?: string;
  /** @default true */
  navigation?: boolean;
  /** @default 'rgba(255, 0, 0, 0.2)' */
  navigationColor?: string;
  hotspots?: CompassPluginHotspot[];
  /** @default 'rgba(0, 0, 0, 0.5)' */
  hotspotColor?: string;
};

export type CompassPluginHotspot = ExtendedPosition & {
  color?: string;
};

/**
 * @summary Adds a compass on the viewer
 */
export class CompassPlugin extends AbstractPlugin {

  constructor(psv: Viewer, options: CompassPluginOptions);

  /**
   * @summary Changes the hotspots on the compass
   */
  setHotspots(hotspots);

}
