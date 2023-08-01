import { Suspense } from 'react';

export default function WithLazyComponent(LazyComponent, SuspenseComponent) {
  return function Inner(props) {
    return (
      <Suspense fallback={SuspenseComponent}>
        <LazyComponent {...props} />
      </Suspense>
    );
  };
}
