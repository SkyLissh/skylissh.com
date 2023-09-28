import type { ISourceOptions } from "tsparticles-engine";

const options: ISourceOptions = {
  name: "Star",
  particles: {
    number: {
      value: 100,
      density: {
        enable: false,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "edge"
    },
    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: true,
        speed: 2,
        opacity_min: 0,
        sync: false
      }
    },
    size: {
      value: 4,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        size_min: 0,
        sync: false
      }
    },
    links: {
      enable: false,
      distance: 600,
      color: "#ffffff",
      opacity: 0.4,
      width: 2
    }
  }
};
export default options;
