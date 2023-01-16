import { AppProps } from "next/app";
import "../styles/globals.css";
import { builder, Builder } from "@builder.io/react";
import dynamic from "next/dynamic";

if (process.env.NEXT_PUBLIC_BUILDERIO_KEY) {
  builder.init(process.env.NEXT_PUBLIC_BUILDERIO_KEY);
}

function App(props: any) {
  return (
    <div className="selection:bg-rum selection:text-white font-inter overflow-x-hidden text-burnt">
      <props.Component {...props.pageProps} />
    </div>
  );
}
export default App;

//register custom components here TODO: look into if this is better for performance if less imports -> only relevant imports on home
Builder.registerComponent(
  dynamic((): any => import("../components/builder/Hero")),
  {
    name: "Hero",
    inputs: [
      { name: "title", type: "string", defaultValue: "Heading" },
      { name: "wordType", type: "string", defaultValue: "Heading" },
      { name: "seperation", type: "string", defaultValue: "Heading" },
      { name: "definition", type: "string", defaultValue: "Heading" },
      { name: "example", type: "richText", defaultValue: "" },
      { name: "buttonText", type: "string", defaultValue: "Hier reinhören" },
      { name: "buttonLink", type: "reference", model: "page" },
      { name: "alternativeText", type: "string", defaultValue: "oder" },
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
            type: "file",
          },
          {
            name: "link",
            type: "string",
          },
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
            model: "page",
          },
        ],
      },
    ],
  }
);

Builder.registerComponent(
  dynamic((): any => import("../components/builder/Player")),
  {
    name: "Player",
    inputs: [
      { name: "audioSrc", type: "file", defaultValue: "Heading" },
      { name: "episode", type: "reference", model: "episodes" },

      {
        name: "annotators",
        type: "list",
        subFields: [
          {
            name: "annotatorName",
            type: "string",
          },
          {
            name: "annotatorPosition",
            type: "string",
          },
          {
            name: "annotatorType",
            type: "string",
            enum: ["nuss", "apfel", "sahne", "blaubeer"],
          },
          {
            name: "annotatorPic",
            type: "file",
          },
        ],
      },
      {
        name: "timestamps",
        type: "list",
        subFields: [
          {
            name: "time",
            type: "string",
          },
          {
            name: "annotations",
            type: "list",
            subFields: [
              {
                name: "episodeQuote",
                type: "string",
              },
              {
                name: "nussAnnotations",
                type: "list",
                subFields: [
                  {
                    name: "content",
                    type: "longText"
                  },
                  {
                    name: "reasoningType",
                    type: "string",
                    enum: ["anecdote", "quote"]
                  },
                  { 
                    name: "reasoningSource",
                    type: "string",
                  },
                  {
                    name: "reasoningBody",
                    type: "longText",
                    description: "if anecdote -> describe anecdote, else source body"
                  },
                  {
                    name: "reasoningLink",
                    type: "string"
                  }
                ]
              },
              {
                name: "apfelAnnotations",
                type: "list",
                subFields: [
                  {
                    name: "content",
                    type: "longText"
                  },
                  {
                    name: "reasoningType",
                    type: "string",
                    enum: ["anecdote", "quote"]
                  },
                  { 
                    name: "reasoningSource",
                    type: "string",
                  },
                  {
                    name: "reasoningBody",
                    type: "longText",
                    description: "if anecdote -> describe anecdote, else source body"
                  },
                  {
                    name: "reasoningLink",
                    type: "string"
                  }
                ]
              },
              {
                name: "sahneAnnotations",
                type: "list",
                subFields: [
                  {
                    name: "content",
                    type: "longText"
                  },
                  {
                    name: "reasoningType",
                    type: "string",
                    enum: ["anecdote", "quote"]
                  },
                  { 
                    name: "reasoningSource",
                    type: "string",
                  },
                  {
                    name: "reasoningBody",
                    type: "longText",
                    description: "if anecdote -> describe anecdote, else source body"
                  },
                  {
                    name: "reasoningLink",
                    type: "string"
                  }
                ]
              },
              {
                name: "blaubeerAnnotations",
                type: "list",
                subFields: [
                  {
                    name: "content",
                    type: "longText"
                  },
                  {
                    name: "reasoningType",
                    type: "string",
                    enum: ["anecdote", "quote"]
                  },
                  { 
                    name: "reasoningSource",
                    type: "string",
                  },
                  {
                    name: "reasoningBody",
                    type: "longText",
                    description: "if anecdote -> describe anecdote, else source body"
                  },
                  {
                    name: "reasoningLink",
                    type: "string"
                  }
                ]
              },
            ],
            
          },
        ],
      },
    ],
  }
);

Builder.registerComponent(
  dynamic((): any => import("../components/builder/FourSteps")),
  {
    name: "Four Steps",
    inputs: [
      { name: "1st Step", type: "text", defaultValue: "Lorem Ipsum" },
      { name: "2nd Step", type: "text", defaultValue: "Lorem Ipsum" },
      { name: "3rd Step", type: "text", defaultValue: "Lorem Ipsum" },
      { name: "4th Step", type: "text", defaultValue: "Lorem Ipsum" },
    ],
  }
);

Builder.registerComponent(
  dynamic((): any => import("../components/builder/FourSteps")),
  {
    name: "Four Steps",
    inputs: [
      { name: "firstStep", type: "text", defaultValue: "Lorem Ipsum" },
      { name: "secondStep", type: "text", defaultValue: "Lorem Ipsum" },
      { name: "thirdStep", type: "text", defaultValue: "Lorem Ipsum" },
      { name: "fourthStep", type: "text", defaultValue: "Lorem Ipsum" },
    ],
  }
);

Builder.registerComponent(
  dynamic((): any => import("../components/builder/MainHeadline")),
  {
    name: "Main Headline",
    description: "only use on subpages, and only once",
    inputs: [{ name: "title", type: "text", defaultValue: "Heading" }],
  }
);

Builder.registerComponent(
  dynamic((): any => import("../components/builder/CenterCallout")),
  {
    name: "Center Callout",
    inputs: [
      { name: "title", type: "string", defaultValue: "Heading" },
      {
        name: "callouts",
        type: "list",
        defaultValue: [{ content: "Lorem Ipsum" }],
        subFields: [
          {
            name: "content",
            type: "string",
          },
        ],
      },
    ],
  }
);

Builder.registerComponent(
  dynamic((): any => import("../components/builder/AssetCard")),
  {
    name: "Horizontal Text and Asset",
    inputs: [
      { name: "title", type: "text", defaultValue: "Heading" },
      {
        name: "text",
        type: "richText",
        defaultValue: "Lorem Ipsum dolor sit amet",
      },
      { name: "altText", type: "text" },
      { name: "file", type: "file" },
      {
        name: "fileType",
        type: "text",
        enum: ["image", "video"],
        defaultValue: "image",
      },
    ],
  }
);
