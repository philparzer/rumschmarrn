import { AppProps } from "next/app";
import "../styles/globals.css";
import {
  builder,
  Builder,
} from "@builder.io/react";
import dynamic from "next/dynamic";

if (process.env.NEXT_PUBLIC_BUILDERIO_KEY) {
  builder.init(process.env.NEXT_PUBLIC_BUILDERIO_KEY);
}


function App(props: any) {
  return (
    <div className="selection:bg-rum selection:text-white font-inter">
        <props.Component {...props.pageProps}/>
    </div>
  );
}
export default App;

//register custom components here
Builder.registerComponent(
  dynamic((): any => import("../components/builder/Hero")),
  {
    name: "Hero",
    inputs: [
      { name: "title", type: "string", defaultValue: "Heading" },
      { name: "wordType", type: "string", defaultValue: "Heading" },
      { name: "seperation", type: "string", defaultValue: "Heading" },
      { name: "definition", type: "string", defaultValue: "Heading" },
      { name: "example", type: "richText" ,defaultValue: ""},
      { name: "buttonText", type: "string", defaultValue: "Hier reinhören"},
      { name: "buttonLink", type: "reference", model: "page"},
      { name: "alternativeText", type: "string", defaultValue: "oder"},
      {
        name: "alternativePlatforms",
        type: "list",
        subFields: [
          {
            name: "title",
            type: "string",
          },
          {
            name: "logo",
            type: "file"
          },
          {
            name: "link",
            type: "string"
          }
        ],
      },
    ],
  }
);

Builder.registerComponent(
  dynamic((): any => import("../components/builder/QuadTeaser")),
  {
    name: "Kaiserschmarren Teaser",
    inputs: [
      { name: "title", type: "string", defaultValue: "Heading" },
      {
        name: "teasers",
        type: "list",
        subFields: [
          {
            name: "title",
            type: "string",
          },
          {
            name: "link",
            type: "reference",
            model: "page"
          }
        ],
      },
    ],
  }
);
