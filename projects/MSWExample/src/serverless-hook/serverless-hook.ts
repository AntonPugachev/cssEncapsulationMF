
import {
  RequestHandler, setupWorker, SetupWorkerApi
} from 'msw';
import { useEffect, useState } from 'react';
import { globalHandlers } from '../msw/handlers';

interface IPropsUseServerless {
  /** Use global handlers or not */
  useDefaultConfig?: boolean;
  /** Additional handlers which can be used with global or without */
  additionalHandlers?: RequestHandler[];
}

/** This hook turn on serverless mode */
export const useServerless = ({
  useDefaultConfig = true,
  additionalHandlers = [],
}: IPropsUseServerless) => {
  const [isServerlessInitializing, setIsServerlessInitializing] =
    useState<boolean>(false);

  const [isServerlessModeEnable, setIsServerlessMode] = useState<boolean>(!!sessionStorage.getItem('serverless'));

  useEffect(() => {
    let worker: SetupWorkerApi | undefined;
    const acyncFn = async () => {
      worker = useDefaultConfig ?
        setupWorker(...globalHandlers, ...additionalHandlers) :
        setupWorker(...additionalHandlers);
      await worker.start({ quiet: false });
      setIsServerlessMode(true);
      setIsServerlessInitializing(true);
    };

    if (
      (!sessionStorage.getItem('serverless') as boolean) &&
      ~window.location.search.indexOf('serverless') &&
      !~window.location.search.indexOf('serverless=false')
    ) {
      console.warn('SERVERLESS TURN ON');
      sessionStorage.setItem('serverless', 'true');
      window.location.reload();
    }

    if (
      (!!sessionStorage.getItem('serverless') as boolean) &&
      ~window.location.search.indexOf('serverless=false')
    ) {
      console.warn('SERVERLESS TURN OFF');
      worker && worker.stop();
      sessionStorage.removeItem('serverless');
      window.location.reload();
    }

    if (!!sessionStorage.getItem('serverless') as boolean) {
      console.warn('SERVERLESS MODE IS WORKING');
      acyncFn();
    }

    if (!sessionStorage.getItem('serverless') as boolean) {
      setIsServerlessInitializing(true);
    }

    // We should stop it if we leave a page
    return () => {
      worker && worker.stop();
      sessionStorage.removeItem('serverless');
    };
  }, [window.location.search]);

  return {
    isServerlessInitializing,
    isServerlessModeEnable
  };
};
