import { storyblokEditable } from "@storyblok/react";

const Video = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} className="flex justify-center">
      <video src={blok.video.filename} controls={true} alt="video" />
    </div>
  );
};

export default Video;
