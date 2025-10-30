export interface Channel {
  cid: string;
  external_id: string;
  short_name: string;
  full_name: string;
  timezone: string;
  listings: Array<Listing>;
  analog_channel: string;
  digital_channel: string;
}

export interface Listing {
  cid: string;
  package_id?: string;
  airing_type: string;
  duration: string;
  minutes: number;
  language: string;
  nola_episode: string;
  nola_root: string;
  season_premiere_finale?: string; 
  special_warnings: string;
  start_time: string;
  season_number: number,
  season_year?: number,
  episode_number:  number,
  title: string;
  animated: boolean,
  closed_captions: boolean;
  hd: boolean;
  stereo: boolean;
  type: string;
  show_id: string;
  show_external_id: string;
  program_id: number;
  program_external_id: string;
  episode_title: string;
  images: Array<string>;
  episode_images: Array<string>;
  description: string;
  episode_description: string;
}