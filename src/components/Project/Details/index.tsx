import React, { FC } from 'react';
import { Modal, StackLayout, StackItem, Title, Paragraph, Link, ColumnLayout, ColumnItem } from 'dots';

import { Name as TechnologyName, Configs as TechnologyConfigs } from 'components/Project/Details/Technology/types';
import { Name as CategoryName } from 'components/Project/Details/Category/types';

import Category from './Category';
import Technology from './Technology';

export interface Props {
  title: string;
  categories: CategoryName[];
  description: string[];
  technologies: TechnologyName[];
  sourceCode: string;
  onClose: (event: React.MouseEvent) => void;
  data?: TechnologyConfigs;
}

const Component: FC<Props> = ({ title, description, categories, technologies, onClose, sourceCode, data }) => {
  return (
    <Modal
      title={title}
      className="is-project-modal"
      onClose={onClose}
      actions={<Link text="Learn more" to={sourceCode} isNewTab />}
    >
      <StackLayout gap={2}>
        <StackItem>
          <ColumnLayout isMobileActive gap={1}>
            {categories.map(category => (
              <ColumnItem size="auto" key={`key-category-${category}`}>
                <Category name={category} />
              </ColumnItem>
            ))}
          </ColumnLayout>
        </StackItem>
        <StackItem>
          <Title text="Description" size={5} />
          {description.map((paragraph, index) => (
            <Paragraph key={`key-description-${index}`} text={paragraph} />
          ))}
        </StackItem>
        <StackItem>
          <Title text="Technologies" size={5} />
          {data && (
            <ColumnLayout isMobileActive isWrapping gap={1}>
              {technologies.map(technology => {
                const { url, image } = data[technology];
                return (
                  <ColumnItem size="auto" key={`key-technology-${technology}`}>
                    <Technology name={technology} url={url} image={image} />
                  </ColumnItem>
                );
              })}
            </ColumnLayout>
          )}
        </StackItem>
      </StackLayout>
    </Modal>
  );
};

export default Component;
