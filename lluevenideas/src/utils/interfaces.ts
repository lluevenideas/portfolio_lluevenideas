
export interface IServices {
  title: string;
  description: string;
  image: string
  bg: string;
  bg_bottom: string;
}
export interface OpenGraph {
  title: string;
  description: string;
  url: string;
  type: 'website' | 'video.other' | 'image' 
}