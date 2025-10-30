type Runtime = import("@astrojs/cloudflare").Runtime<Env>;

declare namespace App {
	interface Locals extends Runtime {}
}

interface ImportMetaEnv {
  readonly API_PASSWORD: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}