import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaUser,
  FaCalendarAlt,
  FaListAlt,
  FaComments,
  FaSearch,
} from 'react-icons/fa';
import { newsData } from './newsData';

const categories = ['All', 'Blog', 'Article', 'News', 'Event', 'Update'];
const sortOptions = [
  { label: 'Newest First', value: 'newest' },
  { label: 'Oldest First', value: 'oldest' },
];

/* ------------------------------------------------------------------ */
const NewsAndArticlesPage: React.FC = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [sortBy, setSortBy] = useState<'newest' | 'oldest'>('newest');

  /* ---------- filter + sort logic ---------- */
  const filteredArticles = newsData
    .filter((article, idx, arr) => {
      // Remove duplicates by id (keep first occurrence)
      return arr.findIndex(a => a.id === article.id) === idx;
    })
    .filter(article => {
      // Category filter (case-insensitive, trimmed)
      const cat = category.trim().toLowerCase();
      const articleCat = article.category.trim().toLowerCase();
      const categoryOK = cat === 'all' || articleCat === cat;

      // Search filter (whole word match, trimmed, case-insensitive)
      const q = search.trim().toLowerCase();
      let textOK = true;
      if (q) {
        // Match whole words only
        const wordRegex = new RegExp(`\\b${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
        textOK =
          wordRegex.test(article.title) ||
          wordRegex.test(article.excerpt) ||
          wordRegex.test(article.content);
      }

      return categoryOK && textOK;
    })
    .sort((a, b) =>
      sortBy === 'newest'
        ? +new Date(b.date) - +new Date(a.date)
        : +new Date(a.date) - +new Date(b.date)
    );

  /* ================================================================ */
  return (
    <div className="min-h-screen bg-white py-16">
      {/* ---------------- page header ---------------- */}
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-extrabold text-blue-900 mb-4">
          News & Articles
        </h1>
        <p className="text-gray-600 mb-10">
          Stay tuned for the latest updates, news, and articles from Innovative Kids Montessori.
        </p>

        {/* ------------- search + filters panel ------------- */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 bg-white rounded-2xl shadow-lg px-4 py-4 transition-shadow">
          {/* search bar (smaller, left) */}
          <div className="flex items-center rounded-full px-2 py-1 ring-1 ring-gray-200 focus-within:ring-[#fe6d16] w-full md:w-64 bg-transparent">
            <FaSearch className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search news..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-400 text-sm"
            />
          </div>
          {/* Filter section with label and two dropdowns */}
          <div className="flex flex-col w-full md:w-auto md:ml-auto bg-transparent">
            <span className="font-semibold text-gray-700 mb-2 text-lg">Filter</span>
            <div className="flex flex-col md:flex-row gap-2">
              {/* Category dropdown */}
              <select
                value={category}
                onChange={e => setCategory(e.target.value)}
                className="w-full md:w-40 px-3 py-2 rounded-lg border border-gray-300 focus:ring-[#fe6d16] focus:border-[#fe6d16] text-sm"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              {/* Sort dropdown */}
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value as 'newest' | 'oldest')}
                className="w-full md:w-40 px-3 py-2 rounded-lg border border-gray-300 focus:ring-[#fe6d16] focus:border-[#fe6d16] text-sm"
              >
                {sortOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- articles grid ---------------- */}
      <div className="max-w-5xl mx-auto px-4 mt-12 grid gap-10 md:grid-cols-2">
        {filteredArticles.length === 0 && (
          <div className="col-span-2 text-center text-gray-500 text-lg">
            No articles found.
          </div>
        )}

        {filteredArticles.map(article => (
          <Link
            key={article.id}
            to={`/news/${article.id}`}
            className="flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition group"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
            />

            <div className="p-6 flex flex-col flex-1">
              <h2 className="text-2xl font-bold text-blue-900 mb-2 group-hover:text-[#fe6d16] transition">
                {article.title}
              </h2>

              <div className="flex flex-wrap items-center text-gray-400 text-xs mb-4 gap-3">
                <span className="flex items-center gap-1">
                  <FaUser /> {article.author}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <FaCalendarAlt /> {new Date(article.date).toLocaleDateString()}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <FaListAlt /> {article.category}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <FaComments /> {article.commentsCount} Comments
                </span>
              </div>

              <p className="text-gray-700 mb-4 flex-1">{article.excerpt}</p>
              <span className="mt-auto self-center inline-block px-6 py-2 bg-[#fe6d16] text-white font-semibold rounded-full hover:bg-orange-600 transition">
                Read More
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NewsAndArticlesPage;
