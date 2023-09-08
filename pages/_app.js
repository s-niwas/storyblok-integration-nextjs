import "../styles/globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Page from "../components/Page";
import Blog from "../components/Blog";
import Image from "../components/Image";
import Video from "../components/Video";
import VideoLink from "../components/VideoLink";

const components = {
  blogPost: Blog,
  page: Page,
  image: Image,
  video: Video,
  videoUrl:VideoLink,
};

storyblokInit({
  accessToken: "arbCbDCfnc6lEjxTX1CTbAtt",
  use: [apiPlugin],
  components,
  apiOptions: {
    region: "eu",
  },
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
