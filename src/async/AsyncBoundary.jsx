import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryErrorResetBoundary } from 'react-query';
import defaultErrorHandler from './defaultErrorHandler';
import DefaultErrorFallback from './DefaultErrorFallback';
import { Backdrop, CircularProgress } from '@mui/material';

function AsyncBoundary({ pendingFallback, children, rejectFallback, onError, ...errorBoundaryProps }) {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          {...errorBoundaryProps}
          FallbackComponent={rejectFallback || DefaultErrorFallback}
          onError={onError || defaultErrorHandler}
          onReset={reset}>
          <Suspense fallback={pendingFallback || <GlobalLoader />}>{children}</Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
}

export default AsyncBoundary;

/** function GlobalLoader
 * @returns {React.ReactNode}
 * 전역 로더
 */
const GlobalLoader = () => {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};
