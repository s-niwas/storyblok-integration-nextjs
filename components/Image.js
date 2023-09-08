import { storyblokEditable } from "@storyblok/react";

const Image = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} className="flex justify-center">
      <img src={blok.image.filename} alt="image" className="w-96" />
    </div>
  );
};

export default Image;
