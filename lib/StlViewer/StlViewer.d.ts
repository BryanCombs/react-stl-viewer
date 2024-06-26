import React, { HTMLProps } from 'react';
import { SceneSetupProps } from './SceneSetup';
type DivProps = Omit<HTMLProps<HTMLDivElement>, 'color' | 'onError'>;
export interface StlViewerProps extends DivProps, SceneSetupProps {
    onError?: (err: Error) => void;
    canvasId?: string;
}
declare const StlViewer: React.FC<StlViewerProps>;
export default StlViewer;
