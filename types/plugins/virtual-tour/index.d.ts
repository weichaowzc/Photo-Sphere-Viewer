import { AbstractPlugin, Viewer, ViewerOptions } from '../..';
import { Marker, MarkerProperties } from '../markers';

/**
 * Definition of a single node in the tour
 */
export type VirtualTourNode = {
  id: string;
  panorama: any;
  links?: VirtualTourNodeLink[];
  position?: [number, number, number?];
  panoData?: ViewerOptions['panoData'];
  sphereCorrection?: ViewerOptions['sphereCorrection'];
  name?: string;
  caption?: string;
  markers?: Marker[];
};

/**
 * Definition of a link between two nodes
 */
export type VirtualTourNodeLink = {
  nodeId: string;
  name?: string;
  position?: [number, number, number?];
  markerStyle?: MarkerProperties;
  arrowStyle?: VirtualTourArrowStyle;
};

/**
 * Style of the arrow in 3D mode
 */
export type VirtualTourArrowStyle = {
  color?: string;
  hoverColor?: string;
  opacity?: number;
  scale?: [number, number];
};

export type VirtualTourPluginPluginOptions = {
  /** @default 'client' */
  dataMode?: 'client' | 'server';
  /** @default 'manual' */
  positionMode?: 'manual' | 'gps';
  /** @default '3d' */
  renderMode?: '3d' | 'markers';
  nodes?: VirtualTourNode[];
  getNode?: (nodeId: string) => VirtualTourNode | Promise<VirtualTourNode>;
  getLinks?: (nodeId: string) => VirtualTourNodeLink[] | Promise<VirtualTourNodeLink[]>;
  startNodeId?: string;
  /** @default false */
  preload?: boolean | ((node: VirtualTourNode, link:VirtualTourNodeLink) => boolean);
  markerStyle?: MarkerProperties;
  arrowStyle?: VirtualTourArrowStyle;
  /** @default 0.1 */
  markerLatOffset?: number;
  /** @default 'bottom' */
  arrowPosition?: 'top' | 'bottom';
}

export const EVENTS: {
  NODE_CHANGED: 'node-changed',
};

/**
 * Replaces the standard autorotate animation by a smooth transition between multiple points
 */
export class VirtualTourPlugin extends AbstractPlugin {

  constructor(psv: Viewer, options: VirtualTourPluginPluginOptions);

  /**
   * Sets the nodes (client mode only)
   */
  setNodes(nodes: VirtualTourNode[], startNodeId?: string);

  /**
   * Changes the current node
   */
  setCurrentNode(nodeId: string);

}
