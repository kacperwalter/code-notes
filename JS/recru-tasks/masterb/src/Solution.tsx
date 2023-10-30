import React, { ReactElement, useState } from 'react';

type MenuItem = {
  title: string;
  subItems?: Array<string>;
};

type MenuConfig = Array<MenuItem>;

function Solution({ menuConfig }: { menuConfig: MenuConfig }): ReactElement {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleItemExpansion = (title: string) => {
    expandedItem === title ? setExpandedItem(null) : setExpandedItem(title);
  };

  return (
    <div className="menu-wrapper">
      {menuConfig.map(item => (
        <div data-test-id={`first-level-${item.title.toLowerCase()}`} key={item.title}>
          <p>{item.title}</p>
          {item.subItems && (
            <button
              data-test-id={`button-${item.title.toLowerCase()}`}
              onClick={() => toggleItemExpansion(item.title)}
            >
              {expandedItem === item.title ? 'Hide' : 'Expand'}
            </button>
          )}
          {expandedItem === item.title && item.subItems && (
            <ul data-test-id={`ul-${item.title.toLowerCase()}`}>
              {item.subItems.map(subItem => (
                <li
                  data-test-id={`li-${item.title.toLowerCase()}-${subItem.toLowerCase()}`}
                  key={subItem}
                >
                  {subItem}
                </li>
              ))}
            </ul>
          )}
        </div>
      ), [])}
    </div>
  );
}

export default Solution;
