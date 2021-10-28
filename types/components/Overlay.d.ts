import { AbstractComponent } from './AbstractComponent';

/**
 * Configuration of the overlay
 */
export type OverlayOptions = {
  /**
   * unique identifier to use with {@link Overlay.hide} and {@link Overlay.isVisible}
   */
  id?: string;
  /**
   * SVG image/icon displayed above the text
   */
  image: string;
  /**
   * main message
   */
  text: string;
  /**
   * secondary message
   */
  subtext?: string;
  /**
   * if the user can hide the overlay by clicking
   * @default true
   */
  dissmisable?: boolean;
};

/**
 * Overlay component
 */
export class Overlay extends AbstractComponent {

  private constructor();

  show(config: string | OverlayOptions);

  /**
   * Hides the overlay unconditionally or it is has a specific id
   */
  hide(id?: string);

  /**
   * This method is not supported
   * @throws {@link PSVError} always
   */
  toggle();

  /**
   * Checks if any overlay is visible, or a specific one
   */
  isVisible(id?: string): boolean;

}
