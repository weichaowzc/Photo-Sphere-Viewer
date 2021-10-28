import { EventEmitter } from 'uevent';
import { Viewer } from './Viewer';

/**
 * Base plugins class
 */
export abstract class AbstractPlugin extends EventEmitter {

  /**
   * Unique identifier of the plugin
   */
  static id: string;

  constructor(psv: Viewer);

  /**
   * Destroys the plugin
   */
  destroy();

}

export type PluginConstructor<T extends AbstractPlugin> = new (psv: Viewer, options?: any) => T;
