import { createHashHistory, createRouter as createTanStackRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import { NotFound } from '@/src/components/not-found';

const hashHistory = createHashHistory();

export function getRouter() {
  return createTanStackRouter({
    routeTree,
    history: hashHistory,
    defaultPreload: 'intent',
    scrollRestoration: true,
    defaultNotFoundComponent: NotFound,
  });
}
