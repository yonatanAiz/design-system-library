import React from 'react';
import ComboBox, {
  ComboBoxInput,
  ComboBoxItem,
  ComboBoxLabel,
  ComboBoxList,
} from './ComboBox';

export default {
  title: 'Atoms/ComboBox',
  component: ComboBox,
};

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

export const Default = () => {
  const [selectedItem, setSelectedItem] = React.useState<
    (typeof books)[0] | null
  >(null);
  const [filterText, setFilterText] = React.useState('');

  const filteredBooks = books.filter((book) =>
    book.title.toLocaleLowerCase().includes(filterText.toLocaleLowerCase()),
  );

  return (
    <ComboBox
      onChange={(value) => {
        const selectedBook = books.find((book) => book.title === value) || null;
        setSelectedItem(selectedBook);
      }}
      value={selectedItem?.title || null}
    >
      <ComboBoxLabel>Label</ComboBoxLabel>
      <ComboBoxInput onChange={setFilterText} value={filterText} />

      <ComboBoxList>
        {filteredBooks.map((book, index) => (
          <ComboBoxItem key={book.title} value={book.title} index={index}>
            {({ isHighlighted, isSelected }) => {
              return (
                <div
                  style={{
                    backgroundColor: isHighlighted
                      ? 'lightgray'
                      : isSelected
                      ? 'lightblue'
                      : 'white',
                    fontWeight: isSelected ? 'bold' : 'normal',
                  }}
                >
                  <h3>{book.title}</h3>
                </div>
              );
            }}
          </ComboBoxItem>
        ))}
      </ComboBoxList>
    </ComboBox>
  );
};
