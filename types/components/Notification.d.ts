import { AbstractComponent } from './AbstractComponent';

/**
 * Configuration of the notification
 */
export type NotificationOptions = {
  content: string;
  timeout?: number;
};

/**
 * Notification component
 */
export class Notification extends AbstractComponent {

  private constructor();

  show(config: string | NotificationOptions);

}
