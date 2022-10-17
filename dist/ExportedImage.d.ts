/// <reference types="react" />
import { ImageProps, StaticImageData } from "next/image";
export interface ExportedImageProps extends Omit<ImageProps, "src" | "loader"> {
    src: string | StaticImageData;
    useWebp?: boolean;
}
declare function ExportedImage({ src, priority, loading, lazyRoot, lazyBoundary, className, quality, width, height, objectFit, objectPosition, useWebp, onLoadingComplete, unoptimized, placeholder, blurDataURL, onError, ...rest }: ExportedImageProps): JSX.Element;
export default ExportedImage;
