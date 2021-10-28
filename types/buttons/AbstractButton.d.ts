import { AbstractComponent } from '../components/AbstractComponent';
import { Navbar } from '../components/Navbar';

/**
 * Base navbar button class
 */
export abstract class AbstractButton extends AbstractComponent {

  /**
   * Unique identifier of the button
   */
  static id: string;

  /**
   * SVG icon name injected in the button
   */
  static icon?: string;

  /**
   * SVG icon name injected in the button when it is active
   */
  static iconActive?: string;

  /**
   * @param navbar
   * @param [className] - Additional CSS classes
   * @param [collapsable=false] - `true` if the button can be moved to menu when the navbar is too small
   * @param [tabbable=true] - `true` if the button is accessible with the keyboard
   */
  constructor(navbar: Navbar, className?: string, collapsable?: boolean, tabbable?: boolean);

  /**
   * Checks if the button can be displayed
   */
  isSupported(): boolean | { initial: boolean, promise: Promise<boolean> };

  /**
   * Changes the active state of the button
   */
  toggleActive(active?: boolean);

  /**
   * Disables the button
   */
  disable();

  /**
   * Enables the button
   */
  enable();

  /**
   * Collapses the button in the navbar menu
   */
  collapse();

  /**
   * Uncollapses the button from the navbar menu
   */
  uncollapse();

  /**
   * Action when the button is clicked
   */
  abstract onClick();

}
