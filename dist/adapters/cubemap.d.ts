import { AbstractAdapter, TextureData } from 'photo-sphere-viewer';

/**
 * @summary Object defining a cubemap
 */
type Cubemap = string[6] | {
  top: string;
  right: string;
  bottom: string;
  left: string;
  front: string;
  back: string;
};

/**
 * @summary Adapter for cubemaps
 */
declare class CubemapAdapter extends AbstractAdapter {

  loadTexture(panorama: Cubemap): Promise<TextureData>;

}

export { Cubemap, CubemapAdapter };
