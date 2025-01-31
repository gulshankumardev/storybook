import { SourceType, enhanceArgTypes } from '@storybook/docs-tools';
import { extractArgTypes, extractComponentDescription } from './custom-elements';
import { sourceDecorator } from './sourceDecorator';
import { prepareForInline } from './prepareForInline';

export const decorators = [sourceDecorator];

export const parameters = {
  docs: {
    extractArgTypes,
    extractComponentDescription,
    inlineStories: true,
    prepareForInline,
    source: {
      type: SourceType.DYNAMIC,
      language: 'html',
    },
  },
};

export const argTypesEnhancers = [enhanceArgTypes];
