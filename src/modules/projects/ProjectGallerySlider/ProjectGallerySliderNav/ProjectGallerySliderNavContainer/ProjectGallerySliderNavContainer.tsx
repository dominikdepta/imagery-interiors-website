import type { ProjectGallerySliderNavContainerProps } from "./types";

export const ProjectGallerySliderNavContainer = ({
  children,
}: ProjectGallerySliderNavContainerProps) => (
  <div className="flex justify-between items-center mt-2 lg:mt-6">
    {children}
  </div>
);
