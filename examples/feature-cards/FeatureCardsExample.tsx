import React from 'react';
import { BlockKitProvider } from '../../src';
import { FeatureCard } from '../../src/components/FeatureCard';
import { Icon } from '@iconify/react';

export default function FeatureCardsExample() {
  return (
    <BlockKitProvider>
      <div className="min-h-screen p-8">
        <h1 className="text-3xl font-bold mb-8">Feature Cards Example</h1>
        
        {/* Grid of Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard 
            id="feature-1"
            heading="Responsive Design"
            content="Built with mobile-first approach, ensuring perfect display across all devices."
            buttonText="Learn More"
            icon={<Icon icon="mdi:responsive" className="w-8 h-8" />}
          />
          
          <FeatureCard 
            id="feature-2"
            heading="Customizable"
            content="Easily customize colors, spacing, and components to match your brand."
            buttonText="View Options"
            buttonVariant="secondary"
            icon={<Icon icon="mdi:palette" className="w-8 h-8" />}
          />
          
          <FeatureCard 
            id="feature-3"
            heading="Dark Mode"
            content="Built-in dark mode support with smooth transitions and theme switching."
            buttonText="Try Dark Mode"
            buttonVariant="outline"
            icon={<Icon icon="mdi:theme-light-dark" className="w-8 h-8" />}
          />
          
          <FeatureCard 
            id="feature-4"
            heading="Accessibility"
            content="WCAG 2.1 AA compliant components with keyboard navigation support."
            buttonText="Accessibility Guide"
            buttonVariant="ghost"
            icon={<Icon icon="mdi:accessibility" className="w-8 h-8" />}
          />
          
          <FeatureCard 
            id="feature-5"
            heading="Performance"
            content="Optimized for speed with minimal bundle size and efficient rendering."
            buttonText="Performance Metrics"
            buttonVariant="primary"
            icon={<Icon icon="mdi:speedometer" className="w-8 h-8" />}
          />
          
          <FeatureCard 
            id="feature-6"
            heading="Documentation"
            content="Comprehensive documentation with examples and API references."
            buttonText="View Docs"
            buttonVariant="link"
            icon={<Icon icon="mdi:book-open-page-variant" className="w-8 h-8" />}
          />
        </div>
      </div>
    </BlockKitProvider>
  );
} 