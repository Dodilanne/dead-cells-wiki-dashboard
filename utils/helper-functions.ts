import { memo, FunctionComponent } from 'react';
import _ from 'lodash';
import { PageNames } from './constants';

export const memoize = <Props>(component: FunctionComponent<Props>, props: (keyof Props)[]) =>
  memo(component, (prev, next) => {
    const comparedObject = {} as any;
    props.forEach(prop => {
      comparedObject[prop] = next[prop];
    });

    return _.isMatch(prev, comparedObject);
  });

export const getIDsMap = (size: number, startAt = 0) => {
  const array = Array(size)
    .fill(0)
    .map((_, index) => index + startAt);

  return array;
};

export const getPageSlug = (pathname: any): keyof typeof PageNames =>
  pathname.length < 2 ? 'home' : pathname.replace('/', '');

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const noop = () => {};

export default { memoize, getPageSlug, noop };
