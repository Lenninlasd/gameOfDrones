export const logger = store => next => action => {
  /*eslint no-console: ["error", { allow: ["group", "log", "info", groupEnd] }] */
  console.group(action.type);
  console.info('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
  return result;
};
