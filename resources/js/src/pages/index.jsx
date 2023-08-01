import { lazy } from 'react';
import Loader from '../components/Loader';

import WithLazyComponent from '../hoc/WithLazyComponent';

export const WelcomePage = WithLazyComponent(lazy(() => import('./Welcome')), <Loader />);
export const CatalogPage = WithLazyComponent(lazy(() => import('./Catalog')), <Loader />);
export const ItemsPage = WithLazyComponent(lazy(() => import('./Items')), <Loader />);
