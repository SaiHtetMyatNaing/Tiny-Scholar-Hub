export type WordItem = {
    id: number;
    item: string;
    image : string;
  }

  export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }
  
  export type StorySegmentProps = {
    id: number;
    story_id :number;
    story_slide : number;
    title : string;
    sentences: sentenceSegmentProp ;
    image_url: string;
  };


  export type sentenceSegmentProp = {
    sentences : { sentence: string }[]
  }

