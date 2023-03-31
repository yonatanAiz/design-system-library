import styled from 'styled-components';

export const Accordion = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
`;

export const AccordionItem = styled.li`
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[400]};

  &:first-of-type {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  &:last-of-type {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;

export const AccordionItemHeader = styled.button<{ isExpanded: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 16px;
  margin: 0;
  background-color: ${({ isExpanded, theme }) =>
    isExpanded ? theme.colors.gray[200] : 'transparent'};

  border-bottom: ${({ isExpanded, theme }) =>
    isExpanded ? `1px solid ${theme.colors.gray[300]}` : 'none'};
`;

export const AccordionItemContent = styled.div<{ isExpanded: boolean }>`
  padding: 8px 16px 8px 16px;
  position: relative;
  display: ${({ isExpanded }) => (isExpanded ? 'block' : 'none')};
`;
