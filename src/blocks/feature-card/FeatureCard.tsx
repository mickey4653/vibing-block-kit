import React from 'react';
import { BlockContainer } from '../../composition/container/BlockContainer';
import { TextBlock } from '../text-block/TextBlock';
import { Button } from '../../components/Button';

export interface FeatureCardProps {
  id: string;
  heading: string;
  content: string;
  buttonText?: string;
  buttonVariant?: "default" | "link" | "destructive" | "outline" | "secondary" | "ghost" | "primary";
  icon?: React.ReactNode;
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  id,
  heading,
  content,
  buttonText,
  buttonVariant = "default",
  icon,
  className = "",
}) => (
  <BlockContainer 
    id={id} 
    className={`p-6 bg-card rounded-lg border shadow-sm hover:shadow-md transition-shadow duration-200 ${className}`}
    spacing="md"
    data-testid="feature-card"
  >
    {icon && (
      <div className="mb-4 text-primary" data-testid="icon-container">
        {icon}
      </div>
    )}
    <TextBlock
      id={`${id}-heading`}
      text={heading}
      type="heading1"
    />
    <TextBlock
      id={`${id}-content`}
      text={content}
      type="paragraph"
    />
    {buttonText && (
      <Button 
        variant={buttonVariant} 
        className="w-full sm:w-auto"
      >
        {buttonText}
      </Button>
    )}
  </BlockContainer>
); 