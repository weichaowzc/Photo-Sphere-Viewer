import { AbstractAdapter } from '../..';

/**
 * Cubemap defined as an array of images
 * @description images order is : left, front, right, back, top, bottom
 */
export type CubemapArray = string[6];

/**
 * Object defining a cubemap
 */
export type Cubemap = {
  left: string;
  front: string;
  right: string;
  back: string;
  top: string;
  bottom: string;
};

/**
 * Adapter for cubemaps
 */
export class CubemapAdapter extends AbstractAdapter<CubemapArray | Cubemap> {

}
