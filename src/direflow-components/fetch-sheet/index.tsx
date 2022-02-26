import { DireflowComponent } from "direflow-component";
import App from "./App";

export default DireflowComponent.create({
  component: App,
  configuration: {
    tagname: "fetch-sheet",
  },
  plugins: [
    {
      name: "font-loader",
      options: {
        custom: {
          families: ["Lulo Clean"],
          urls: ["http://fonts.cdnfonts.com/css/lulo-clean"],
        },
      },
    },
    { name: "styled-components" },
  ],
});
