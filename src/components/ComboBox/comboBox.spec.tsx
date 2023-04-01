import userEvent from '@testing-library/user-event';
import React from 'react';
import { renderWithTheme } from '../../utils/test/renderWithTheme';
import ComboBox, {
  ComboBoxButton,
  ComboBoxInput,
  ComboBoxItem,
  ComboBoxLabel,
  ComboBoxList,
} from './ComboBox';
import { comboBoxDriver } from './comboBox.testDriver';

const books = [
  { author: 'Harper Lee', title: 'To Kill a Mockingbird' },
  { author: 'Lev Tolstoy', title: 'War and Peace' },
  { author: 'Fyodor Dostoyevsy', title: 'The Idiot' },
  { author: 'Oscar Wilde', title: 'A Picture of Dorian Gray' },
  { author: 'George Orwell', title: '1984' },
  { author: 'Jane Austen', title: 'Pride and Prejudice' },
  { author: 'Marcus Aurelius', title: 'Meditations' },
  { author: 'Fyodor Dostoevsky', title: 'The Brothers Karamazov' },
  { author: 'Lev Tolstoy', title: 'Anna Karenina' },
  { author: 'Fyodor Dostoevsky', title: 'Crime and Punishment' },
];

const OnChangeMock = jest.fn();

const ComboBoxComponent = ({
  initialSelected,
}: {
  initialSelected?: (typeof books)[0] | null;
} = {}) => {
  const [filterText, setFilterText] = React.useState('');

  const filteredBooks = books.filter((book) =>
    book.title.toLocaleLowerCase().includes(filterText.toLocaleLowerCase()),
  );

  return (
    <ComboBox onChange={OnChangeMock} value={initialSelected?.title || null}>
      <ComboBoxLabel>Label</ComboBoxLabel>
      <ComboBoxInput onChange={setFilterText} value={filterText} />
      <ComboBoxButton>Toggle</ComboBoxButton>
      <ComboBoxList>
        {filteredBooks.map((book, index) => (
          <ComboBoxItem key={book.title} value={book.title} index={index}>
            <div>{book.title}</div>
          </ComboBoxItem>
        ))}
      </ComboBoxList>
    </ComboBox>
  );
};

const renderComboBox = ({
  initialSelected,
}: { initialSelected?: (typeof books)[0] | null } = {}) =>
  renderWithTheme(<ComboBoxComponent initialSelected={initialSelected} />);

describe('ComboBox', () => {
  it('should render', () => {
    renderComboBox();
    expect(comboBoxDriver.getComboBoxWrapper()).toBeInTheDocument();
    expect(comboBoxDriver.getLabelByText(/label/i)).toBeInTheDocument();
    expect(comboBoxDriver.getComboBox()).toBeInTheDocument();
    expect(comboBoxDriver.getComboBox()).toHaveValue('');
    expect(comboBoxDriver.getComboBoxAriaExpanded()).toEqual('false');
    expect(comboBoxDriver.getComboBoxList()).toBeInTheDocument();
  });

  it('should render the selected item', () => {
    renderComboBox({ initialSelected: books[0] });
    expect(comboBoxDriver.getComboBox()).toHaveValue(books[0].title);
  });

  it('should open the list when clicking on the combobox', () => {
    renderComboBox();
    comboBoxDriver.clickComboBox();
    expect(comboBoxDriver.getComboBoxList()).toBeInTheDocument();
    expect(comboBoxDriver.getComboBoxListItems()).toHaveLength(books.length);
    expect(comboBoxDriver.getComboBoxAriaExpanded()).toEqual('true');
  });

  it('should close the list when clicking exit', () => {
    renderComboBox();
    expect(comboBoxDriver.getComboBoxAriaExpanded()).toEqual('false');
    comboBoxDriver.clickComboBox();
    expect(comboBoxDriver.getComboBoxAriaExpanded()).toEqual('true');
    userEvent.keyboard('{esc}');
    expect(comboBoxDriver.getComboBoxAriaExpanded()).toEqual('false');
  });

  it('should close the list when clicking outside', () => {
    renderComboBox();
    expect(comboBoxDriver.getComboBoxAriaExpanded()).toEqual('false');
    comboBoxDriver.clickComboBox();
    expect(comboBoxDriver.getComboBoxAriaExpanded()).toEqual('true');
    userEvent.click(document.body);
    expect(comboBoxDriver.getComboBoxAriaExpanded()).toEqual('false');
  });

  it('should filter the list when typing', () => {
    renderComboBox();
    comboBoxDriver.clickComboBox();
    expect(comboBoxDriver.getComboBoxListItems()).toHaveLength(books.length);
    comboBoxDriver.typeInComboBox(books[1].title);
    expect(comboBoxDriver.getComboBoxListItems()).toHaveLength(1);
    expect(comboBoxDriver.getComboBoxListItems()[0]).toHaveTextContent(
      books[1].title,
    );
  });

  it('should select an item when clicking on it', () => {
    renderComboBox();
    comboBoxDriver.clickComboBox();
    expect(OnChangeMock).not.toHaveBeenCalled();
    comboBoxDriver.clickComboBoxListItem(1);
    expect(OnChangeMock).toHaveBeenCalledWith(books[1].title);
  });
});
