import { XIcon } from "@heroicons/react/outline";
import React from "react";
import dynamic from "next/dynamic";

import { ProductMediaFragment } from "@/saleor/api";

interface ImageExpandProps {
  image?: ProductMediaFragment;
  onRemoveExpand: () => void;
}

const ReactPhotoSphereViewer = dynamic(
  () => import("react-photo-sphere-viewer").then((mod) => mod.ReactPhotoSphereViewer),
  {
    ssr: false,
  }
);

export function ImageExpand({ image, onRemoveExpand }: ImageExpandProps) {
  if (!image) {
    return null;
  }

  return (
    <div className="min-h-screen absolute overflow-hidden grid grid-cols-1 mx-auto px-8 md:h-full w-full bg-gray-100">
      <button
        className="absolute grid content-center justify-center right-0 p-8 h-6 w-6 z-40 mt-18"
        aria-label="Close"
        onClick={onRemoveExpand}
      >
        <XIcon className="w-6 h-6" />
      </button>
      <div className="w-full h-full absolute md:mt-0">
        <ReactPhotoSphereViewer
          src={image.url}
          height={"100vh"}
          width={"100%"}
          container={""}
        ></ReactPhotoSphereViewer>
      </div>
    </div>
  );
}

export default ImageExpand;
