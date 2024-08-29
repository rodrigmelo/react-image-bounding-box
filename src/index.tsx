import React, { useCallback, useEffect, useRef, useState } from "react";
import { ImageRenderProps } from "./react-image-bounding-box";

const defaultBoundingBoxStyles = {
  strokeStyle: "#FF0000",
  lineWidth: 2,
};

const ImageBoundingBox = ({
  box,
  imageSrc = "",
  ...props
}: ImageRenderProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState<{
    width: number;
    height: number;
  }>({ width: 0, height: 0 });
  const mergedStyles = {
    display: "flex",
    justifyContent: "center",
    ...props.style,
  };

  const updateSize = useCallback(() => {
    if (containerRef.current) {
      setContainerSize({
        width: containerRef.current.clientWidth,
        height: containerRef.current.clientHeight,
      });
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", updateSize);

    updateSize();

    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, [updateSize]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const image = new Image();
    image.src = imageSrc;

    image.onload = () => {
      const canvasWidth = containerSize.width;
      const canvasHeight = containerSize.height;

      const imageWidth = image.naturalWidth;
      const imageHeight = image.naturalHeight;

      const scaleX = canvasWidth / imageWidth;
      const scaleY = canvasHeight / imageHeight;

      canvas.width = canvasWidth;
      canvas.height = canvasHeight;

      context.drawImage(image, 0, 0, canvasWidth, canvasHeight);

      if (!!box && box?.length) {
        box.forEach((bb) => {
          const {
            color = defaultBoundingBoxStyles.strokeStyle,
            lineWidth = defaultBoundingBoxStyles.lineWidth,
          } = bb?.boundingBoxStyles || {};

          context.strokeStyle = color;

          context.lineWidth = lineWidth;

          context.strokeRect(
            bb.left * imageWidth * scaleX,
            bb.top * imageHeight * scaleY,
            bb.width * imageWidth * scaleX,
            bb.height * imageHeight * scaleY
          );
        });
      }
    };
  }, [imageSrc, box, containerSize.height, containerSize.width]);

  return (
    <div ref={containerRef} style={mergedStyles}>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default ImageBoundingBox;
