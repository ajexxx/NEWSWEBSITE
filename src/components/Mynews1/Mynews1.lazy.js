import React, { lazy, Suspense } from 'react';

const LazyMynews1 = lazy(() => import('./Mynews1'));

const Mynews1 = props => (
  <Suspense fallback={null}>
    <LazyMynews1 {...props} />
  </Suspense>
);

export default Mynews1;
