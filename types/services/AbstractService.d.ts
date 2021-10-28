import { Viewer } from '../Viewer';

/**
 * Base services class
 */
export abstract class AbstractService {

  protected readonly psv: Viewer;

  protected readonly config: Viewer['config'];

  protected readonly prop: Viewer['prop'];

  constructor(parent: Viewer);

}
