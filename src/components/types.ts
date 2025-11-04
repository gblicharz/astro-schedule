export interface DayFeed {
  feeds: Array<Channel>;
}

export interface Channel {
  cid: string;
  external_id: string;
  short_name: string;
  full_name: string;
  timezone: string;
  listings?: Array<Show>;
  analog_channel: string;
  digital_channel: string;
}

export interface Show {
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
  images: Array<ShowImage | undefined>;
  episode_images: Array<ShowImage | undefined>;
  description: string;
  episode_description: string;
}

export interface ShowImage {
  type: string;
  image: string;
  ratio: string;
  width: string;
  height: string;
  caption?: string;
  updated_at: string;
  external_profile: string;
}

export interface RequestInit {
  method?: string; // The request method (e.g., 'GET', 'POST', 'PUT', 'DELETE')
  headers?: HeadersInit; // Request headers (e.g., {'Content-Type': 'application/json'})
  body?: BodyInit | null; // The request body (e.g., JSON.stringify(data), FormData)
  mode?: RequestMode; // Request mode (e.g., 'cors', 'no-cors', 'same-origin')
  credentials?: RequestCredentials; // Credential handling (e.g., 'omit', 'same-origin', 'include')
  cache?: RequestCache; // Cache mode (e.g., 'default', 'no-store', 'reload', 'no-cache', 'force-cache', 'only-if-cached')
  redirect?: RequestRedirect; // Redirect handling (e.g., 'follow', 'error', 'manual')
  referrer?: string; // The referrer of the request
  referrerPolicy?: ReferrerPolicy; // Referrer policy
  integrity?: string; // Subresource Integrity (SRI) value
  keepalive?: boolean; // Indicates if the request should outlive the page
  signal?: AbortSignal | null; // An AbortSignal object to abort the request
}

export interface DayProps {
  scheduleDate?: String;
}

export interface DayAPIResponse {
  feeds: Array<Channel>;
  dateObj: Date;
}