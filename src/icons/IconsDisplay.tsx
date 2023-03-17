import React from 'react';
import * as Icons from './index';

const IconsDisplayWithSearch = () => {
  const [search, setSearch] = React.useState('');
  const filteredIcons = Object.keys(Icons).filter((icon) =>
    icon.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <div>
      <input
        type="text"
        style={{ width: '100%' }}
        placeholder='Search for an icon by name (e.g. "arrow")'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {filteredIcons.map((icon) => {
          const Icon = Icons[icon as keyof typeof Icons];
          return (
            <div
              key={icon}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '1rem',
                border: '1px solid #ccc',
                width: '100px',
                height: '100px',
              }}
            >
              <Icon />
              <span>{icon}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IconsDisplayWithSearch;
