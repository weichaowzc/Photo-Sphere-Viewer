/**
 * Toggles a CSS class
 */
export function toggleClass(element: HTMLElement | SVGElement, className: string, active?: boolean);

/**
 * Adds one or several CSS classes to an element
 */
export function addClasses(element: HTMLElement, className: string);

/**
 * Removes one or several CSS classes to an element
 */
export function removeClasses(element: HTMLElement, className: string);

/**
 * Searches if an element has a particular parent at any level including itself
 */
export function hasParent(el: HTMLElement, parent: HTMLElement): boolean;

/**
 * Gets the closest parent (can by itself)
 */
export function getClosest(el: HTMLElement | SVGElement, selector: string): HTMLElement;

/**
 * Returns the key name of a KeyboardEvent
 */
export function getEventKey(evt: KeyboardEvent): string;

/**
 * Detects if fullscreen is enabled
 */
export function isFullscreenEnabled(elt: HTMLElement): boolean;

/**
 * Enters fullscreen mode
 */
export function requestFullscreen(elt: HTMLElement);

/**
 * Exits fullscreen mode
 */
export function exitFullscreen();

/**
 * Gets an element style
 */
export function getStyle(elt: HTMLElement, prop: string): any;

/**
 * Normalize mousewheel values accross browsers
 * @description From Facebook's Fixed Data Table
 * {@link https://github.com/facebookarchive/fixed-data-table/blob/master/src/vendor_upstream/dom/normalizeWheel.js}
 * @copyright Facebook
 */
export function normalizeWheel(event: WheelEvent): { spinX: number, spinY: number, pixelX: number, pixelY: number };
