import React from "react";
import { sourceTypeHelper } from "./sourceTypeHelper";

interface ImageLoaderProps extends React.ComponentProps<"img"> {
  fallBackType?: "grad" | "plain";
}

export const ImageLoader: React.FC<ImageLoaderProps> = ({
  alt,
  fallBackType = "plain",
  src,
  ...restProps
}) => {
  let imageToShow = "";

  if (!src) {
    if (fallBackType === "grad")
      imageToShow =
        "https://i.pinimg.com/564x/29/66/dc/2966dc922e1785ef0a1122eee9246420--free-icon-avatar.jpg";
    else
      imageToShow =
        "https://i.pinimg.com/564x/e4/7c/a3/e47ca33e179db1ee90869cbb20e4bc5e.jpg";
    return <img alt={alt} src={imageToShow} {...restProps} />;
  }

  imageToShow = sourceTypeHelper(src);
  return <img alt={alt} src={imageToShow} {...restProps} />;
};
