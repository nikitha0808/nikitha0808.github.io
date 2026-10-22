/**
 * Gray–Scott reaction–diffusion "species": two chemicals reacting and diffusing grow patterns like
 * those on living things; these feed (f) and kill (k) rates pick which.
 * Each section of the site grows its own species, painted in its own stain.
 */
export type SpeciesKey = 'name' | 'coral' | 'mitosis' | 'maze' | 'spots';

export interface Species {
  name: string;
  f: number;
  k: number;
  steps: number; // how long it grows before it rests
  ink: string; // pigment body
  deep: string; // pigment pooled at the edges
  wash: string; // the faint halo ahead of the growth
  stain: string; // what the colour is called
}

export const SPECIES: Record<SpeciesKey, Species> = {
  name: { name: 'Coral, seeded from a name', f: 0.0545, k: 0.062, steps: 720, ink: '#22436a', deep: '#0d1f36', wash: '#cfe0a2', stain: 'Monsoon indigo on young paddy' },
  coral: { name: 'Coral', f: 0.0545, k: 0.062, steps: 2600, ink: '#24456b', deep: '#0f213a', wash: '#c9d6e2', stain: 'Monsoon indigo' },
  mitosis: { name: 'Mitosis', f: 0.0367, k: 0.0649, steps: 3600, ink: '#b4532f', deep: '#5e2311', wash: '#f2d2bf', stain: 'Laterite' },
  maze: { name: 'Labyrinth', f: 0.029, k: 0.057, steps: 3200, ink: '#557a1f', deep: '#273d0a', wash: '#dfe9bb', stain: 'Young paddy' },
  spots: { name: 'Lacework', f: 0.039, k: 0.058, steps: 3200, ink: '#a8760c', deep: '#553b03', wash: '#f3e3b1', stain: 'Turmeric' },
};
