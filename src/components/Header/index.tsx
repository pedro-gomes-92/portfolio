import React, { FC, useState, useEffect } from 'react';
import classnames from 'classnames';
import { Header, NavBar, Link } from 'dots';

import { isScrolling as isWindowScrolling, getCurrent } from './utils';

interface Props {
  elements: HTMLElement[];
}

const Component: FC<Props> = ({ elements }) => {
  const [isScrolling, setIsScrolling] = useState(isWindowScrolling());
  const [current, setCurrent] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(isWindowScrolling());
      setCurrent(getCurrent(elements));
    };

    window.addEventListener('scroll', handleScroll);
  }, [elements]);

  return (
    <Header className={classnames({ 'is-scrolling': isScrolling })}>
      <NavBar>
        {elements.map(element => {
          const name = element.getAttribute('id') || '';
          return (
            <Link
              key={`key-header-item-${name}`}
              text={name}
              size={5}
              to={`#${name}`}
              className={classnames({ 'is-active': current === name })}
            />
          );
        })}
      </NavBar>
    </Header>
  );
};

export default Component;
