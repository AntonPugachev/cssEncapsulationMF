import '@emotion/react';

import { Theme as customTheme } from './src/themes/types';

declare module '@emotion/react' {

  export interface Theme extends customTheme {}
}
