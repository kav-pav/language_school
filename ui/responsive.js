import { screen } from "./screen";

// Ready made media queries
export const responsive = {
  xxs: `@media (max-width: ${screen.xsMin}px)`,
  xs: `@media (max-width: ${screen.xsMax}px)`,
  sm: `@media (min-width: ${screen.smMin}px) and (max-width: ${screen.smMax}px)`,
  smAndLess: `@media (max-width: ${screen.smMax}px)`,
  smPlus: `@media (min-width: ${screen.smMin}px)`,
  smMax: `@media (max-width: ${screen.smMax}px)`,
  mdPlus: `@media (min-width: ${screen.mdMin}px)`,
  md: `@media (min-width: ${screen.mdMin}px) and (max-width: ${screen.mdMax}px)`,
  mdMax: `@media (max-width: ${screen.mdMax}px)`,
  lg: `@media (min-width: ${screen.lgMin}px)`
};
