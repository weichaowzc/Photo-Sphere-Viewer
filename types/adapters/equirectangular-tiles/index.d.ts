import { AbstractAdapter, Viewer } from '../..';

/**
 * Configuration of a tiled panorama
 */
export type EquirectangularTilesPanorama = {
  /**
   * low resolution panorama loaded before tiles
   */
  baseUrl?: string;
  /**
   * complete panorama width (height is always width/2)
   */
  width: number;
  /**
   * number of vertical tiles
   */
  cols: number;
  /**
   * number of horizontal tiles
   */
  rows: number;
  /**
   * function to build a tile url
   */
  tileUrl: (col: number, row: number) => string;
};

export type EquirectangularTilesAdapterOptions = {
  /**
   * shows a warning sign on tiles that cannot be loaded
   * @default true
   */
  showErrorTile?: boolean;
  /**
   * applies a blur to the low resolution panorama
   * @default true
   */
  baseBlur?: boolean;
};

/**
 * Adapter for tiled panoramas
 */
export class EquirectangularTilesAdapter extends AbstractAdapter<EquirectangularTilesPanorama> {

  constructor(psv: Viewer, options: EquirectangularTilesAdapterOptions);

}
