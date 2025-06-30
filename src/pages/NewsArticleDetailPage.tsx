import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { newsData } from './newsData';

const NewsArticleDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const article = newsData.find(a => a.id === id);
  const navigate = useNavigate();

  const [comments, setComments] = useState<
    { name: string; text: string; date: string }[]
  >([]);
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Article Not Found</h1>
        <Link to="/news" className="text-blue-600 underline">
          Back to News & Articles
        </Link>
      </div>
    );
  }

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;
    setComments([{ name, text, date: new Date().toLocaleString() }, ...comments]);
    setName('');
    setText('');
  };

  const relatedNews = newsData.filter(a => a.id !== id).slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50 pt-40">
      <div className="max-w-screen-xl mx-auto px-4 pb-8 flex flex-col md:flex-row gap-8">
        {/* Main Article Card */}
        <div className="flex-1 md:pr-8">
          <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6 mt-0 pt-0">
            {/* Go Back */}
              <button
                onClick={() => navigate(-1)}
                className="mb-6 inline-block bg-gradient-to-r from-[#3ddf97] to-[#128a57] text-white px-10 py-2 rounded-full font-semibold transition-all duration-300 shadow-md hover:from-[#128a57] hover:to-[#3ddf97] hover:shadow-lg"
              >
                ← Go Back
              </button>
            {/* Cover Image */}
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-72 object-cover rounded-t-2xl mb-0 mt-0 pt-0"
              style={{ marginTop: 0, paddingTop: 0 }}
            />

            {/* Title - tightly packed with image */}
            <h1 className="text-3xl font-extrabold text-blue-900 mb-3 leading-tight mt-0 pt-0" style={{ marginTop: 0, paddingTop: 0 }}>
              {article.title}
            </h1>

            {/* Main Content */}
            <p className="text-gray-700 mb-6 whitespace-pre-line">{article.content}</p>

            {/* Extra dummy text + image */}
            <p className="text-gray-700 mb-4">
              Innovative Kids Montessori continues to pioneer modern education strategies,
              making learning more enjoyable and impactful for children. From sensory play
              to early math concepts, the environment supports all‑round development.
            </p>
            <img
              src="https://source.unsplash.com/800x400/?classroom,kids"
              alt="Extra Content"
              className="w-full rounded-xl mb-6"
            />
            <p className="text-gray-700 mb-6">
              With trained staff and a child‑friendly environment, the Montessori approach
              ensures personalized learning. Parents also appreciate the transparent
              communication and regular updates from teachers.
            </p>

            {/* Comments */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Leave a Comment</h2>
              <form
                onSubmit={handleCommentSubmit}
                className="mb-8 bg-gray-50 p-6 rounded-xl shadow"
              >
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border rounded mb-2"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                  />
                  <textarea
                    placeholder="Write a comment..."
                    className="w-full px-4 py-2 border rounded"
                    value={text}
                    onChange={e => setText(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#fe6d16] text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-600 transition"
                >
                  Post Comment
                </button>
              </form>

              <div>
                {comments.length === 0 && (
                  <p className="text-gray-500">No comments yet. Be the first to comment!</p>
                )}
                {comments.map((c, idx) => (
                  <div key={idx} className="mb-6 p-4 bg-white rounded shadow">
                    <div className="text-sm text-gray-600 font-semibold mb-1">
                      {c.name}{' '}
                      <span className="text-xs font-normal">({c.date})</span>
                    </div>
                    <div className="text-gray-800">{c.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related News */}
        <aside className="w-full md:w-80 flex-shrink-0 mt-0 pt-0">
          <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-0 pt-0">Other News</h2>
          <div className="grid gap-6">
            {relatedNews.map(news => (
              <Link
                key={news.id}
                to={`/news/${news.id}`}
                className="block bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
              >
                <img
                  src={news.image}
                  alt={news.title}
                  className="h-32 w-full object-cover mt-0 pt-0"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-blue-800 hover:text-[#fe6d16] transition">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                    {news.excerpt}
                  </p>
                  <span className="inline-block mt-2 text-sm text-[#fe6d16] font-semibold">
                    Read More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default NewsArticleDetailPage;
