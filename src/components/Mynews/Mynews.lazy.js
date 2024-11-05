import React, { lazy, Suspense } from 'react';

const LazyMynews = lazy(() => import('./Mynews'));

const Mynews = props => (
  <Suspense fallback={null}>
    <LazyMynews {...props} />
  </Suspense>
);

export default Mynews;
