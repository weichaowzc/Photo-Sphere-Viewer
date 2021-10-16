import { AbstractAdapter, Viewer, TextureData } from 'photo-sphere-viewer';

/**
 * @summary Configuration of a tiled panorama
 */
type EquirectangularTilesPanorama = {
  baseUrl?: string;
  width: number;
  cols: number;
  rows: number;
  tileUrl: (col: number, row: number) => string;
};

type EquirectangularTilesAdapterOptions = {
  showErrorTile?: boolean;
  baseBlur?: boolean;
}

/**
 * @summary Adapter for tiled panoramas
 */
declare class EquirectangularTilesAdapter extends AbstractAdapter {

  constructor(psv: Viewer, options: EquirectangularTilesAdapterOptions);

  loadTexture(panorama: EquirectangularTilesPanorama): Promise<TextureData>;

}

export { EquirectangularTilesAdapter, EquirectangularTilesAdapterOptions, EquirectangularTilesPanorama };
