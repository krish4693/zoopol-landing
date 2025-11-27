import React from "react";

type TocItem = { id: string; title: string };

const TableOfContents: React.FC<{ items: TocItem[]; title?: string }> = ({ items, title = "On this page" }) => {
  return (
    <nav className="md:sticky md:top-24 border rounded-2xl p-6 bg-white/80 backdrop-blur-sm shadow-sm">
      <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">{title}</h2>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="block text-sm text-gray-600 hover:text-[#156BFC] hover:font-medium transition-colors duration-200"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;