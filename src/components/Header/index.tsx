import React, { FC, useState, useEffect } from 'react';
import classnames from 'classnames';
import { Header, NavBar, TextButton } from 'dots';

import { isScrolling as isWindowScrolling, getCurrent, scrollTo } from './utils';

interface Props {
  elements: HTMLElement[];
}

const Component: FC<Props> = ({ elements }) => {
  const [isScrolling, setIsScrolling] = useState(isWindowScrolling());
  const [current, setCurrent] = useState<string | null>(null);
  const [header, setHeader] = useState<HTMLElement>();

  const offsetTop = header ? header.clientHeight : 0;

  useEffect(() => {
    const handleScroll = () => {
      const active = document.activeElement as HTMLElement;
      if (active) {
        active.blur();
      }

      setIsScrolling(isWindowScrolling());
      setCurrent(getCurrent(elements, offsetTop));
    };

    window.addEventListener('scroll', handleScroll);
  }, [elements, offsetTop]);

  return (
    <Header
      reference={element => {
        setHeader(element);
      }}
      className={classnames({ 'is-scrolling': isScrolling })}
    >
      <NavBar>
        {elements.map(element => {
          const name = element.getAttribute('id') || '';
          return (
            <TextButton
              key={`key-header-item-${name}`}
              text={name}
              size={5}
              onClick={() => {
                scrollTo(element, -offsetTop);
              }}
              className={classnames({ 'is-active': current === name })}
            />
          );
        })}
      </NavBar>
    </Header>
  );
};

export default Component;
