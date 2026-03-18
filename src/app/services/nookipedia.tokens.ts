import { InjectionToken, makeEnvironmentProviders } from '@angular/core';

import type { NookipediaClientConfig } from '../../API';

export const NOOKIPEDIA_CONFIG = new InjectionToken<NookipediaClientConfig>('NOOKIPEDIA_CONFIG');

export function provideNookipediaApi(config: NookipediaClientConfig) {
  return makeEnvironmentProviders([
    {
      provide: NOOKIPEDIA_CONFIG,
      useValue: config,
    },
  ]);
}
