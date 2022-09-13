export interface Env {
  production: boolean;

  /**
   * Base URL of the project under single domain.
   *
   * project.json build artifact:
   *   - deployUrl and baseHref should be in sync
   * service worker:
   *   - worker script path should be in sync
   */
  baseUrl: string;
}

export const defaultEnv: Env = {
  production: false,
  baseUrl: '',
};
