import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Amanda Myers — Senior Full-Stack & UX Engineer',
    loadComponent: () => import('./pages/portfolio/portfolio').then((m) => m.Portfolio),
  },
  {
    path: 'resume',
    title: 'Amanda Myers — Résumé',
    loadComponent: () => import('./pages/resume/resume').then((m) => m.Resume),
  },
  { path: '**', redirectTo: '' },
];
