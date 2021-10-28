import { AbstractPlugin, ExtendedPosition, Viewer } from '../..';

/**
 * Definition of keypoints for automatic rotation, can be a position object, a marker id or an object with the following properties
 */
export type AutorotateKeypoint = string | ExtendedPosition | {
  markerId?: string;
  position?: ExtendedPosition;
  tooltip?: string | { content: string, position: string };
  /** @default 0 */
  pause?: number;
};

export type AutorotateKeypointsPluginOptions = {
  /** @default true */
  startFromClosest?: boolean;
  keypoints?: AutorotateKeypoint[];
}

/**
 * Replaces the standard autorotate animation by a smooth transition between multiple points
 */
export class AutorotateKeypointsPlugin extends AbstractPlugin {

  constructor(psv: Viewer, options: AutorotateKeypointsPluginOptions);

  /**
   * Changes the keypoints
   */
  setKeypoints(keypoints: AutorotateKeypoint[]);

}
