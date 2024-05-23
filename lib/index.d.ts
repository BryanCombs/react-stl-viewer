import React, { CSSProperties, HTMLProps } from 'react';
import { Mesh, BufferGeometry } from 'three';

interface ModelDimensions {
    boundingRadius: number;
    width: number;
    length: number;
    height: number;
}

interface CameraPosition {
    latitude: number;
    longitude: number;
    distance: number;
}
/** @deprecated use {@link CameraPosition} instead */
type CameraInitialPosition = CameraPosition;

interface FloorProps {
    gridWidth?: number;
    gridLength?: number;
}
interface CameraRef {
    setCameraPosition: (position: CameraPosition) => any;
}
interface CameraProps {
    ref?: {
        current?: null | CameraRef;
    };
    initialPosition?: CameraPosition;
}
interface ModelRef {
    model: Mesh;
    save: () => Blob;
}
interface ModelProps {
    ref?: {
        current?: null | ModelRef;
    };
    scale?: number;
    positionX?: number;
    positionY?: number;
    rotationX?: number;
    rotationY?: number;
    rotationZ?: number;
    color?: CSSProperties['color'];
    geometryProcessor?: (geometry: BufferGeometry) => BufferGeometry;
}
interface SceneSetupProps {
    url: string;
    /** @deprecated use cameraProps.initialPosition instead */
    cameraInitialPosition?: Partial<CameraPosition>;
    extraHeaders?: Record<string, string>;
    shadows?: boolean;
    showAxes?: boolean;
    orbitControls?: boolean;
    onFinishLoading?: (ev: ModelDimensions) => any;
    cameraProps?: CameraProps;
    modelProps?: ModelProps;
    floorProps?: FloorProps;
}

type DivProps = Omit<HTMLProps<HTMLDivElement>, 'color' | 'onError'>;
interface StlViewerProps extends DivProps, SceneSetupProps {
    onError?: (err: Error) => void;
    canvasId?: string;
}
declare const StlViewer: React.FC<StlViewerProps>;

export { CameraInitialPosition, CameraPosition, CameraProps, CameraRef, FloorProps, ModelDimensions, ModelProps, ModelRef, StlViewer, StlViewerProps };
