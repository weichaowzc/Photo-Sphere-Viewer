import { Viewer } from '../Viewer';

/**
 * Base component class
 */
export abstract class AbstractComponent {

  protected readonly psv: Viewer;

  protected readonly parent: Viewer | AbstractComponent;

  /**
   * @param parent
   * @param [className] - CSS class added to the component's container
   */
  constructor(parent: Viewer | AbstractComponent, className?: string);

  /**
   * Displays the component
   */
  show(options?: any);

  /**
   * Hides the component
   */
  hide(options?: any);

  /**
   * Displays or hides the component
   */
  toggle();

  /**
   * Checks if the component is visible
   */
  isVisible(options?: any): boolean;

}
