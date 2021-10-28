import { Mesh } from 'three';
import { PanoData, PanoDataProvider, TextureData } from './models';
import { Viewer } from './Viewer';

/**
 * Base adapters class
 * @template T type of the panorama configuration object
 */
export abstract class AbstractAdapter<T> {

  /**
   * Unique identifier of the adapter
   */
  static id: string;

  /**
   * Indicates if the adapter supports transitions between panoramas
   */
  static supportsTransition: boolean;

  constructor(parent: Viewer);

  /**
   * Destroys the adapter
   */
  destroy();

  /**
   * Loads the panorama texture(s)
   */
  loadTexture(panorama: T, newPanoData?: PanoData | PanoDataProvider): Promise<TextureData>;

  /**
   * Creates the cube mesh
   * @param {number} [scale=1]
   */
  createMesh(scale?: number): Mesh;

  /**
   * Applies the texture to the mesh
   */
  setTexture(mesh: Mesh, textureData: TextureData);

  /**
   * Changes the opacity of the mesh
   */
  setTextureOpacity(mesh: Mesh, opacity: number);

}

export type AdapterConstructor<T extends AbstractAdapter<any>> = new (psv: Viewer, options?: any) => T;
