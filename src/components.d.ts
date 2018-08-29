/**
* This is an autogenerated file created by the Stencil compiler.
* It contains typing information for all components that exist in this project.
*/
/* tslint:disable */

import '@stencil/core';

import '@ionic/core'
import 'ionicons'


export namespace Components {

  interface AppRoot {}
  interface AppRootAttributes extends StencilHTMLAttributes {}

  interface SnapshotCompare {
    'a': string;
    'b': string;
  }
  interface SnapshotCompareAttributes extends StencilHTMLAttributes {
    'a'?: string;
    'b'?: string;
  }

  interface SnapshotDetail {
    'snapshotId': string;
  }
  interface SnapshotDetailAttributes extends StencilHTMLAttributes {
    'snapshotId'?: string;
  }

  interface SnapshotList {}
  interface SnapshotListAttributes extends StencilHTMLAttributes {}
}

declare global {
  interface StencilElementInterfaces {
    'AppRoot': Components.AppRoot;
    'SnapshotCompare': Components.SnapshotCompare;
    'SnapshotDetail': Components.SnapshotDetail;
    'SnapshotList': Components.SnapshotList;
  }

  interface StencilIntrinsicElements {
    'app-root': Components.AppRootAttributes;
    'snapshot-compare': Components.SnapshotCompareAttributes;
    'snapshot-detail': Components.SnapshotDetailAttributes;
    'snapshot-list': Components.SnapshotListAttributes;
  }


  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLSnapshotCompareElement extends Components.SnapshotCompare, HTMLStencilElement {}
  var HTMLSnapshotCompareElement: {
    prototype: HTMLSnapshotCompareElement;
    new (): HTMLSnapshotCompareElement;
  };

  interface HTMLSnapshotDetailElement extends Components.SnapshotDetail, HTMLStencilElement {}
  var HTMLSnapshotDetailElement: {
    prototype: HTMLSnapshotDetailElement;
    new (): HTMLSnapshotDetailElement;
  };

  interface HTMLSnapshotListElement extends Components.SnapshotList, HTMLStencilElement {}
  var HTMLSnapshotListElement: {
    prototype: HTMLSnapshotListElement;
    new (): HTMLSnapshotListElement;
  };

  interface HTMLElementTagNameMap {
    'app-root': HTMLAppRootElement
    'snapshot-compare': HTMLSnapshotCompareElement
    'snapshot-detail': HTMLSnapshotDetailElement
    'snapshot-list': HTMLSnapshotListElement
  }

  interface ElementTagNameMap {
    'app-root': HTMLAppRootElement;
    'snapshot-compare': HTMLSnapshotCompareElement;
    'snapshot-detail': HTMLSnapshotDetailElement;
    'snapshot-list': HTMLSnapshotListElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
