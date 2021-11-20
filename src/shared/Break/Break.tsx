import React from 'react';
import styles from './break.less';
import classNames from 'classnames';

type TSizes = 20 | 16 | 12 | 8 | 4;
type TDisplays = 'mobile' | 'tablet' | 'desktop' ;
interface IBreakProps {
  inline?: boolean;
  top?: boolean;
  size: TSizes;
  mobileSize?: TSizes;
  tabletSize?: TSizes;
  desktopSize?: TSizes;
}

export function Break(props: IBreakProps) {
  const {
    inline = false,
    top = false,
    size,
    mobileSize,
    desktopSize,
    tabletSize
  } = props;
  return (
    <div
      className={classNames(
        styles[`s${size}`],
        {[styles[`mobile_s${mobileSize}`]] : mobileSize},
        {[styles[`desktop_s${desktopSize}`]] : desktopSize},
        {[styles[`tablet_s${tabletSize}`]] : tabletSize},
        {[styles.inline]: inline},
        {[styles.top]: top},
      )}
    />
  );
}
