import { storyblokEditable } from "@storyblok/react";

const VideoLink = ({ blok }) => {
  const videoUrl = blok.videoUrl.url;

  const getVideoType = (url) => {
    if (url.includes("youtube.com")) {
      return "youtube";
    } else {
      return "normal";
    }
  };

  const renderVideoContent = () => {
    const videoType = getVideoType(videoUrl);

    switch (videoType) {
      case "youtube":
        return (
          <div {...storyblokEditable(blok)} className="flex justify-center">
            <iframe
              title="YouTube Video"
              src={videoUrl}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="aspect-video w-full"
            ></iframe>
          </div>
        );
      default:
        return (
          <div {...storyblokEditable(blok)} className="flex justify-center">
            <video
              src={videoUrl}
              controls={true}
              allow="accelerometer; autoplay; encrypted-media; gyroscope;"
              allowFullScreen
              className="aspect-video w-full"
            ></video>
          </div>
        );
    }
  };
  return renderVideoContent();
};

export default VideoLink;
