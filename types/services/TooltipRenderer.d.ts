import { Tooltip, TooltipOptions } from '../components/Tooltip';
import { AbstractService } from './AbstractService';

/**
 * Tooltip renderer
 */
export class TooltipRenderer extends AbstractService {

  private constructor();

  /**
   * Displays a tooltip on the viewer
   * @throws {@link PSVError} when the configuration is incorrect
   */
  create(config: TooltipOptions): Tooltip;

}
