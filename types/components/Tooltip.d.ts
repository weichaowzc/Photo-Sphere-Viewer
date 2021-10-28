import { AbstractComponent } from './AbstractComponent';

/**
 * Object defining the tooltip position
 */
export type TooltipPosition = {
  /**
   * Position of the tip of the arrow of the tooltip, in pixels
   */
  top: number;
  /**
   * Position of the tip of the arrow of the tooltip, in pixels
   */
  left: number;
  /**
   * Tooltip position toward it's arrow tip. Accepted values are combinations of `top`, `center`, `bottom` and `left`, `center`, `right`.
   * @default 'top center'
   */
  position?: string | string[];
  /**
   * Used when displaying a tooltip on a marker
   */
  box?: { width: number, height: number };
};

/**
 * Object defining the tooltip configuration
 */
export type TooltipOptions = TooltipPosition & {
  /**
   * HTML content of the tooltip
   */
  content: string;
  /**
   * Additional CSS class added to the tooltip
   */
  className?: string;
  /**
   * Userdata associated to the tooltip
   */
  data?: any;
};

/**
 * Tooltip component
 */
export class Tooltip extends AbstractComponent {

  private constructor();

  /**
   * Do not call this method directly, use {@link TooltipRenderer} instead.
   */
  show(options: TooltipOptions);

  /**
   * This method is not supported
   * @throws {@link PSVError} always
   */
  toggle();

  /**
   * Moves the tooltip to a new position
   * @throws {@link PSVError} when the configuration is incorrect
   */
  move(position: TooltipPosition);

}
