import { Text } from '.';

export default {
  title: 'Text',
  component: Text,
  args: {
    children: 'Esse é um text',
  },
  argTypes: {
    children: {
      type: 'string',
      description: 'Testando 123',
    },
  },
};

export const Template = (args) => <Text {...args} />;
