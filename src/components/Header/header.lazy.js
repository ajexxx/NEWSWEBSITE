import React, { lazy, Suspense } from 'react';

const Lazyheader = lazy(() => import('./Header'));

const header = props => (
  <Suspense fallback={null}>
    <Lazyheader {...props} />
  </Suspense>
);

export default header;
