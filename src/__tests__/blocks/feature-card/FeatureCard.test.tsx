import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FeatureCard } from '../../../blocks/feature-card/FeatureCard';
import { Icon } from '@iconify/react';

describe('FeatureCard', () => {
  it('renders with basic props', () => {
    render(
      <FeatureCard
        id="test-card"
        heading="Test Heading"
        content="Test content"
      />
    );

    expect(screen.getByText('Test Heading')).toBeInTheDocument();
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('renders with button when buttonText is provided', () => {
    render(
      <FeatureCard
        id="test-card"
        heading="Test Heading"
        content="Test content"
        buttonText="Click Me"
      />
    );

    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('renders with icon when provided', () => {
    render(
      <FeatureCard
        id="test-card"
        heading="Test Heading"
        content="Test content"
        icon={<Icon icon="mdi:star" className="w-8 h-8" />}
      />
    );

    // Check if the icon container is present
    expect(screen.getByTestId('icon-container')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(
      <FeatureCard
        id="test-card"
        heading="Test Heading"
        content="Test content"
        className="custom-class"
      />
    );

    const card = screen.getByTestId('feature-card');
    expect(card).toHaveClass('custom-class');
  });

  it('renders with different button variants', () => {
    const { rerender } = render(
      <FeatureCard
        id="test-card"
        heading="Test Heading"
        content="Test content"
        buttonText="Default Button"
      />
    );

    const defaultButton = screen.getByText('Default Button').closest('button');
    expect(defaultButton).toHaveClass('bg-default');

    rerender(
      <FeatureCard
        id="test-card"
        heading="Test Heading"
        content="Test content"
        buttonText="Secondary Button"
        buttonVariant="secondary"
      />
    );

    const secondaryButton = screen.getByText('Secondary Button').closest('button');
    expect(secondaryButton).toHaveClass('bg-default/40');
  });
}); 