import React from 'react';
import { AccordionItemProps, AccordionProps } from './accordion.types';
import * as S from './accordion.styled';
import AccordionProvider, { useAccordionContext } from './Accordion.context';
import { ExpandDown, ExpandUp } from '../../icons';
import { randomId } from '../../utils/randomId';

export const AccordionItem = ({
  children,
  renderTitle,
}: AccordionItemProps) => {
  const itemId = React.useRef(randomId());
  const { activeItemId, onItemExpand } = useAccordionContext();
  const isExpanded = activeItemId === itemId.current;

  return (
    <S.AccordionItem data-testid="accordion-item">
      <S.AccordionItemHeader
        aria-controls={itemId.current}
        isExpanded={isExpanded}
        aria-expanded={isExpanded ? 'true' : 'false'}
        id={`accordion-control-${itemId.current}`}
        onClick={() => onItemExpand(itemId.current)}
        role="tab"
      >
        {renderTitle(isExpanded)}
        {isExpanded ? <ExpandUp /> : <ExpandDown />}
      </S.AccordionItemHeader>
      <S.AccordionItemContent
        aria-hidden={!isExpanded}
        isExpanded={isExpanded}
        id={itemId.current}
        role="tabpanel"
      >
        {typeof children === 'function' ? children(isExpanded) : children}
      </S.AccordionItemContent>
    </S.AccordionItem>
  );
};

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ className, children }, ref) => {
    return (
      <AccordionProvider>
        <S.Accordion
          data-testid="accordion-container"
          className={className}
          ref={ref}
        >
          <ul aria-label="Accordion Control Group Buttons">{children}</ul>
        </S.Accordion>
      </AccordionProvider>
    );
  },
);

Accordion.displayName = 'Accordion';

export default Accordion;
