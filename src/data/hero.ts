import { boardScreen } from './products/jassly';
import { scoreboard } from './products/klikkr';
import { clubScreen } from './products/synci';
import type { Screenshot } from './products';

/** Phones shown in the home hero, left to right; the middle one sits in front. */
export const heroScreens: [Screenshot, Screenshot, Screenshot] = [boardScreen, scoreboard, clubScreen];
