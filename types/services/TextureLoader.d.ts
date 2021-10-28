import { AbstractService } from './AbstractService';

/**
 * Texture loader
 */
export class TextureLoader extends AbstractService {

  private constructor();

  /**
   * Cancels current HTTP requests
   */
  abortLoading();

  /**
   * Loads a Blob with FileLoader
   */
  loadFile(url: string, onProgress?: (number) => void): Promise<Blob>;

  /**
   * Loads an Image using FileLoader to have progress events
   */
  loadImage(url: string, onProgress?: (number) => void): Promise<HTMLImageElement>;

  /**
   * Preload a panorama file without displaying it
   */
  preloadPanorama(panorama: any): Promise<void>;

}
