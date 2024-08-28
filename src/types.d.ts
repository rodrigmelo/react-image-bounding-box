export type BoundingBoxStylesProperties = {
  color: string;
  lineWidth: number;
};

export type BoundingBoxProperties = {
  top: number;
  left: number;
  width: number;
  height: number;
  boundingBoxStyles?: Partial<BoundingBoxStylesProperties>;
};

export type ImageRenderProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  imageSrc: string;
  box?: BoundingBoxProperties[];
};
