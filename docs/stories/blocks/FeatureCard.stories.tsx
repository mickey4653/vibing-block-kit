import type { Meta, StoryObj } from '@storybook/react';
import { FeatureCard } from '../../../src/blocks/feature-card/FeatureCard';
import { Icon } from '@iconify/react';

const meta = {
  title: 'Blocks/Feature/FeatureCard',
  component: FeatureCard,
  tags: ['autodocs'],
  argTypes: {
    buttonVariant: {
      control: 'select',
      options: ['default', 'link', 'destructive', 'outline', 'secondary', 'ghost', 'primary']
    }
  },
} satisfies Meta<typeof FeatureCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    id: 'feature-1',
    heading: 'Feature Title',
    content: 'This is a description of the feature. It can be multiple lines and provide more details about what this feature offers.',
    buttonText: 'Learn More',
  },
};

export const WithIcon: Story = {
  args: {
    id: 'feature-2',
    heading: 'Feature with Icon',
    content: 'This feature card includes an icon to make it more visually appealing and help users quickly identify the feature.',
    buttonText: 'Get Started',
    icon: <Icon icon="mdi:star" className="w-8 h-8" />,
  },
};

export const SecondaryVariant: Story = {
  args: {
    id: 'feature-3',
    heading: 'Secondary Button',
    content: 'This card uses a secondary button variant for a different visual emphasis.',
    buttonText: 'View Details',
    buttonVariant: 'secondary',
    icon: <Icon icon="mdi:information" className="w-8 h-8" />,
  },
};

export const WithoutButton: Story = {
  args: {
    id: 'feature-4',
    heading: 'No Button',
    content: 'This feature card doesn\'t include a button, showing how it looks with just the heading and content.',
    icon: <Icon icon="mdi:check-circle" className="w-8 h-8" />,
  },
};

export const GridExample: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[1200px]">
      <FeatureCard 
        id="grid-1"
        heading="Responsive Design"
        content="Built with mobile-first approach, ensuring perfect display across all devices."
        buttonText="Learn More"
        icon={<Icon icon="mdi:responsive" className="w-8 h-8" />}
      />
      <FeatureCard 
        id="grid-2"
        heading="Customizable"
        content="Easily customize colors, spacing, and components to match your brand."
        buttonText="View Options"
        buttonVariant="secondary"
        icon={<Icon icon="mdi:palette" className="w-8 h-8" />}
      />
      <FeatureCard 
        id="grid-3"
        heading="Dark Mode"
        content="Built-in dark mode support with smooth transitions and theme switching."
        buttonText="Try Dark Mode"
        buttonVariant="outline"
        icon={<Icon icon="mdi:theme-light-dark" className="w-8 h-8" />}
      />
    </div>
  ),
}; 