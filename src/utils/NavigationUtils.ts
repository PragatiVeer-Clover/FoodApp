import {
  createNavigationContainerRef,
  CommonActions,
  StackActions,
} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

const queuedActions: Array<() => void> = [];
let warnedNotReady = false;

function enqueue(action: () => void) {
  queuedActions.push(action);
  if (!warnedNotReady) {
    console.warn(
      'Navigation not ready — queuing navigation actions until ready.',
    );
    warnedNotReady = true;
  }
}

function flushQueueIfReady() {
  if (navigationRef.isReady() && queuedActions.length > 0) {
    while (queuedActions.length) {
      const fn = queuedActions.shift();
      fn?.();
    }
  }
}

export function onNavigationReady() {
  flushQueueIfReady();
}

export function navigate(routeName: string, params?: object) {
  const action = () =>
    navigationRef.dispatch(
      CommonActions.navigate(routeName as never, params as never),
    );

  navigationRef.isReady() ? action() : enqueue(action);
}

export function replace(routeName: string, params?: object) {
  const action = () =>
    navigationRef.dispatch(
      StackActions.replace(routeName as never, params as never),
    );
  navigationRef.isReady() ? action() : enqueue(action);
}

export function resetAndNavigate(routeName: string) {
  const action = () =>
    navigationRef.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: routeName as never }],
      }),
    );

  navigationRef.isReady() ? action() : enqueue(action);
}

export function goBack() {
  const action = () => {
    if (navigationRef.canGoBack()) {
      navigationRef.goBack();
    }
  };

  navigationRef.isReady() ? action() : enqueue(action);
}

export function navigateToTab(tabName: string) {
  const action = () => {
    navigationRef.dispatch(StackActions.popToTop());
    navigationRef.dispatch(CommonActions.navigate('TabNavigator', { screen: tabName }));
  };
  navigationRef.isReady() ? action() : enqueue(action);
}

export function push(routeName: string, params?: object) {
  const action = () =>
    navigationRef.dispatch(
      StackActions.push(routeName as never, params as never),
    );

  navigationRef.isReady() ? action() : enqueue(action);
}
