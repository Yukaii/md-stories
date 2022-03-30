import cx from 'classnames';
import React from 'react';

export default function Story({
  className,
  markdown,
  width,
  height,
  style,
}: {
  markdown: string;
  width: number;
  height: number;
  style?: React.StyleHTMLAttributes<HTMLDivElement>['style'];
  className?: string;
}) {
  return (
    <div
      className={cx(
        'inline-flex items-center justify-center whitespace-pre rounded',
        className
      )}
      style={{
        width,
        height,
        ...style,
      }}
    >
      {markdown}
    </div>
  );
}
