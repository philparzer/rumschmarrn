export interface EpisodeData {
    link: string;
    title: string;
    location: any;
    date: string;
    indexNumber: number;
    city: string;
}

export interface AnnotatorData {
    annotatorName: string;
    annotatorPic: string;
    annotatorPosition: string;
    annotatorType: "nussAnnotations" | "sahneAnnotations" | "blaubeerAnnotations" | "apfelAnnotations";
  }
