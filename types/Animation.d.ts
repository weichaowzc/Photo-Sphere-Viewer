export type AnimationOptions = {
  /**
   * Properties to interpolate
   */
  properties: { [name: string]: { start: number, end: number } };
  /**
   * Duration in milliseconds
   */
  duration: number;
  /**
   * Delay before start in milliseconds
   */
  delay?: number;
  /**
   * Interpolation function, see {@link EASINGS}
   */
  easing?: string | ((progress: number) => number);
  /**
   * Callback called for each frame
   * @param properties - the value of each property
   * @param progress - total progression from 0 to 1
   */
  onTick: (properties: { [name: string]: number }, progress: number) => void;
};

/**
 * Interpolation helper for animations
 * @description
 * Implements the Promise API with an additional "cancel" and "finally" methods.
 * The promise is resolved when the animation is complete and rejected if the animation is cancelled.
 *
 * ```typescript
 * new Animation({
 *     properties: {
 *         width: {start: 100, end: 200}
 *     },
 *     duration: 5000,
 *     onTick: (properties) => element.style.width = `${properties.width}px`;
 * })
 * ```
 */
export class Animation implements Promise<void> {

  constructor(options: AnimationOptions);

  /**
   * Animation chaining
   */
  // @ts-ignore
  then(onFulfilled?: (() => void | Animation | PromiseLike<void>) | undefined | null, onRejected?: (() => void | Animation | PromiseLike<void>) | undefined | null): Animation;

  /**
   * Alias to `.then(null, onRejected)`
   */
  // @ts-ignore
  catch(onRejected?: (() => void | Animation | PromiseLike<void>) | undefined | null): Animation;

  /**
   * Alias to `.then(onFinally, onFinally)`
   */
  // @ts-ignore
  finally(onFinally?: (() => void | Animation | PromiseLike<void>) | undefined | null): Animation;

  /**
   * Cancels the animation
   */
  cancel();

  /**
   * Returns a resolved animation promise
   */
  static resolve(): Animation;

}
