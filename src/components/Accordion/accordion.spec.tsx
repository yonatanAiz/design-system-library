import React from 'react';
import Accordion from './Accordion';
import { AccordionProps } from './accordion.types';
import { accordionDriver } from './accordion.testDriver';
import { renderWithTheme } from '../../utils/test/renderWithTheme';

const DEFAULT_NUMBER_OF_CHILDREN = 1;

const renderAccordion = (
  {
    props,
    numberOfChildren = DEFAULT_NUMBER_OF_CHILDREN,
  }: {
    props?: Omit<AccordionProps, 'children'>;
    numberOfChildren?: number;
  } = {
    props: {},
    numberOfChildren: DEFAULT_NUMBER_OF_CHILDREN,
  },
) =>
  renderWithTheme(
    <Accordion {...props}>
      {Array.from({ length: numberOfChildren }).map((_, index) => (
        <Accordion.Item
          key={index}
          renderTitle={(isExpanded) => (
            <span>
              {isExpanded
                ? `Close Item ${index + 1}`
                : `Open Item ${index + 1}`}
            </span>
          )}
        >
          <span>Accordion content {index + 1}</span>
        </Accordion.Item>
      ))}
    </Accordion>,
  );

describe('Accordion', () => {
  it('should render', () => {
    renderAccordion();
    expect(accordionDriver.getAccordion()).toBeInTheDocument();
    expect(accordionDriver.getAccordionItems()).toHaveLength(
      DEFAULT_NUMBER_OF_CHILDREN,
    );
  });

  it('should render with multiple items', () => {
    renderAccordion({ numberOfChildren: 3 });
    expect(accordionDriver.getAccordionItems()).toHaveLength(3);
  });

  it('should expand and collapse items', async () => {
    renderAccordion({ numberOfChildren: 2 });

    const firstAccordionItem = accordionDriver.getAccordionItemDriver(0);
    const secondAccordionItem = accordionDriver.getAccordionItemDriver(1);

    expect(firstAccordionItem.getPanelAreaHidden()).toEqual('true');
    expect(firstAccordionItem.getHeaderAriaExpanded()).toEqual('false');

    firstAccordionItem.clickOnHeader();

    expect(firstAccordionItem.getPanelAreaHidden()).toEqual('false');
    expect(firstAccordionItem.getHeaderAriaExpanded()).toEqual('true');

    secondAccordionItem.clickOnHeader();

    expect(firstAccordionItem.getPanelAreaHidden()).toEqual('true');
    expect(firstAccordionItem.getHeaderAriaExpanded()).toEqual('false');
    expect(secondAccordionItem.getPanelAreaHidden()).toEqual('false');
    expect(secondAccordionItem.getHeaderAriaExpanded()).toEqual('true');
  });
});
