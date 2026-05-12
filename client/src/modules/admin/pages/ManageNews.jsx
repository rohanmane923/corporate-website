
import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Search,
  Edit2,
  Trash2,
  X,
  AlertCircle,
  CheckCircle2,
  Loader2,
  ChevronRight,
  FileText,
  Tag,
  Clock,
  CheckCircle,
  Image as ImageIcon,
  ExternalLink
} from "lucide-react";

import {
  getAdminNews,
  createNews,
  updateNews,
  deleteNews
} from "../../../services/newsService";

import NewsEditor from "../components/NewsEditor";

const ManageNews = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    category: "",
    type: "press-release",
    image: "",
    status: "draft",
    summary: "",
    content: "",
    publishedAt: new Date().toISOString().split("T")[0]
  });

  // ---------------- FETCH DATA ----------------
  const loadData = async () => {
    try {
      setLoading(true);
      const data = await getAdminNews();
      setItems(Array.isArray(data) ? data : []);
    } catch (err) {
      setError("Failed to load news");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // ---------------- STATS ----------------
  const stats = useMemo(() => {
    return {
      total: items.length,
      published: items.filter(
        (item) => item.status === "published"
      ).length,
      drafts: items.filter(
        (item) => item.status === "draft"
      ).length,
      categories: new Set(
        items.map((item) => item.category).filter(Boolean)
      ).size
    };
  }, [items]);

  // ---------------- AUTO SLUG ----------------
  useEffect(() => {
    if (!currentItem && formData.title) {
      const slug = formData.title
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");

      setFormData((prev) => ({
        ...prev,
        slug
      }));
    }
  }, [formData.title, currentItem]);

  // ---------------- CATEGORY LIST ----------------
  const categories = useMemo(() => {
    const uniqueCategories = new Set(
      items.map((item) => item.category).filter(Boolean)
    );

    return ["All", ...Array.from(uniqueCategories)];
  }, [items]);

  // ---------------- FILTERED ITEMS ----------------
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesSearch =
        item.title
          ?.toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        item.category
          ?.toLowerCase()
          .includes(searchTerm.toLowerCase());

      const matchesCategory =
        filterCategory === "All" ||
        item.category === filterCategory;

      const matchesStatus =
        filterStatus === "All" ||
        item.status === filterStatus;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesStatus
      );
    });
  }, [items, searchTerm, filterCategory, filterStatus]);

  // ---------------- MODAL ----------------
  const handleOpenModal = (item = null) => {
    if (item) {
      setCurrentItem(item);
      setFormData({
        ...item
      });
    } else {
      setCurrentItem(null);
      setFormData({
        title: "",
        slug: "",
        category: "",
        type: "press-release",
        image: "",
        status: "draft",
        summary: "",
        content: "",
        publishedAt:
          new Date().toISOString().split("T")[0]
      });
    }

    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setError(null);
    setSuccessMessage("");
  };

  // ---------------- SUBMIT ----------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSubmitting(true);

      if (currentItem) {
        await updateNews(currentItem._id, formData);
        setSuccessMessage("News updated successfully");
      } else {
        await createNews(formData);
        setSuccessMessage("News created successfully");
      }

      await loadData();

      setTimeout(() => {
        handleCloseModal();
      }, 1000);
    } catch (err) {
      setError("Failed to save news");
    } finally {
      setSubmitting(false);
    }
  };

  // ---------------- DELETE ----------------
  const handleDelete = async () => {
    try {
      setSubmitting(true);

      await deleteNews(currentItem._id);

      await loadData();
      setIsDeleteModalOpen(false);
    } catch (err) {
      setError("Failed to delete news");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-corporate-navy tracking-tight">
            Manage News
          </h1>
          <p className="text-gray-500">
            Manage all your news content
          </p>
        </div>

        <button
          onClick={() => handleOpenModal()}
          className="bg-orange-500 text-white px-5 py-3 rounded-xl flex items-center gap-2"
        >
          <Plus size={18} />
          Add News
        </button>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          {
            label: "Total News",
            value: stats.total,
            icon: FileText
          },
          {
            label: "Published",
            value: stats.published,
            icon: CheckCircle
          },
          {
            label: "Drafts",
            value: stats.drafts,
            icon: Clock
          },
          {
            label: "Categories",
            value: stats.categories,
            icon: Tag
          }
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-xl shadow"
          >
            <stat.icon size={22} />
            <p className="text-gray-500 mt-2">
              {stat.label}
            </p>
            <h2 className="text-2xl font-bold">
              {stat.value}
            </h2>
          </div>
        ))}
      </div>

      {/* SEARCH + FILTER */}
      <div className="bg-white p-4 rounded-xl shadow">
        <div className="flex flex-col md:flex-row gap-4">

          <div className="flex-1 relative">
            <Search
              className="absolute left-3 top-3 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search news..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
              className="w-full pl-10 py-3 border rounded-xl"
            />
          </div>

          {/* CATEGORY FILTER */}
          <select
            value={filterCategory}
            onChange={(e) =>
              setFilterCategory(e.target.value)
            }
            className="px-4 py-3 border rounded-xl"
          >
            <option value="All">
              All Categories
            </option>

            {categories
              .filter((cat) => cat !== "All")
              .map((category) => (
                <option
                  key={category}
                  value={category}
                >
                  {category}
                </option>
              ))}
          </select>

          {/* STATUS FILTER */}
          <select
            value={filterStatus}
            onChange={(e) =>
              setFilterStatus(e.target.value)
            }
            className="px-4 py-3 border rounded-xl"
          >
            <option value="All">
              All Status
            </option>
            <option value="published">
              Published
            </option>
            <option value="draft">
              Draft
            </option>
          </select>
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-left">
                News Details
              </th>
              <th className="p-4 text-left">
                Category
              </th>
              <th className="p-4 text-left">
                Status
              </th>
              <th className="p-4 text-right">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredItems.map((item) => (
              <tr
                key={item._id}
                className="border-t"
              >
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-12 h-12 object-cover rounded-lg"
                    />

                    <div>
                      <p className="font-semibold">
                        {item.title}
                      </p>
                      <p className="text-sm text-gray-500">
                        {new Date(
                          item.publishedAt
                        ).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="p-4">
                  {item.category}
                </td>

                {/* TYPE COLUMN REMOVED */}

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      item.status === "published"
                        ? "bg-green-100 text-green-600"
                        : "bg-orange-100 text-orange-600"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>

                <td className="p-4 text-right">
                  <button
                    onClick={() =>
                      handleOpenModal(item)
                    }
                    className="mr-3"
                  >
                    <Edit2 size={18} />
                  </button>

                  <button
                    onClick={() => {
                      setCurrentItem(item);
                      setIsDeleteModalOpen(true);
                    }}
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* EDITOR MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-corporate-navy/40 backdrop-blur-sm animate-in fade-in duration-300">
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-white w-full max-w-6xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="px-8 py-6 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
                <div>
                  <h2 className="text-2xl font-bold text-corporate-navy">
                    {currentItem ? "Edit News" : "Add New News"}
                  </h2>
                  <p className="text-gray-500 text-sm">Manage your news content and metadata in one place.</p>
                </div>
                <button
                  onClick={handleCloseModal}
                  className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                >
                  <X size={24} className="text-gray-500" />
                </button>
              </div>

              {/* Modal Body */}
              <form
                onSubmit={handleSubmit}
                id="newsForm"
                className="flex-1 overflow-y-auto p-8 custom-scrollbar"
              >
                {error && (
                  <div className="mb-8 p-4 bg-red-50 border border-red-100 text-red-600 rounded-xl flex items-center gap-3 text-sm animate-shake">
                    <AlertCircle size={18} />
                    {error}
                  </div>
                )}

                {successMessage && (
                  <div className="mb-8 p-4 bg-green-50 border border-green-100 text-green-600 rounded-xl flex items-center gap-3 text-sm">
                    <CheckCircle2 size={18} />
                    {successMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left Column */}
                  <div className="lg:col-span-2 space-y-6">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          News Title <span className="text-red-500">*</span>
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="Enter news title"
                          className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-orange-500/20 focus:bg-white outline-none transition-all text-lg font-bold text-corporate-navy"
                          value={formData.title}
                          onChange={(e) =>
                            setFormData({ ...formData, title: e.target.value })
                          }
                        />
                      </div>

                      <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                        <span className="text-gray-400 text-xs font-mono">Slug:</span>
                        <input
                          type="text"
                          className="bg-transparent border-none p-0 text-xs font-mono text-orange-500 focus:ring-0 w-full"
                          value={formData.slug}
                          onChange={(e) =>
                            setFormData({ ...formData, slug: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Summary
                      </label>
                      <textarea
                        rows="3"
                        placeholder="Brief summary of the news..."
                        className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-orange-500/20 focus:bg-white outline-none transition-all text-sm text-gray-600 resize-none"
                        value={formData.summary}
                        onChange={(e) =>
                          setFormData({ ...formData, summary: e.target.value })
                        }
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        News Content <span className="text-red-500">*</span>
                      </label>
                      <NewsEditor
                        value={formData.content}
                        onChange={(html) =>
                          setFormData({ ...formData, content: html })
                        }
                      />
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                    <div className="bg-gray-50/50 p-6 rounded-2xl border border-gray-100 space-y-5">
                      <h3 className="font-bold text-corporate-navy text-sm flex items-center gap-2">
                        <ChevronRight size={16} className="text-orange-500" />
                        Publish Settings
                      </h3>

                      <div className="space-y-4">
                        <div>
                          <label className="text-xs font-bold text-gray-500 uppercase block mb-2">
                            Status
                          </label>
                          <div className="grid grid-cols-2 gap-2">
                            {["draft", "published"].map((status) => (
                              <button
                                key={status}
                                type="button"
                                onClick={() =>
                                  setFormData({ ...formData, status })
                                }
                                className={`py-2.5 rounded-xl text-xs font-bold uppercase transition-all ${formData.status === status
                                    ? "bg-corporate-navy text-white shadow-md"
                                    : "bg-white text-gray-500 border border-gray-200 hover:bg-gray-100"
                                  }`}
                              >
                                {status}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="text-xs font-bold text-gray-500 uppercase block mb-2">
                            Date
                          </label>
                          <input
                            type="date"
                            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-orange-500/20 outline-none"
                            value={formData.publishedAt}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                publishedAt: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50/50 p-6 rounded-2xl border border-gray-100 space-y-5">
                      <h3 className="font-bold text-corporate-navy text-sm flex items-center gap-2">
                        <Tag size={16} className="text-orange-500" />
                        Metadata
                      </h3>

                      <div className="space-y-4">
                        <div>
                          <label className="text-xs font-bold text-gray-500 uppercase block mb-2">
                            Category
                          </label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-orange-500/20 outline-none"
                            placeholder="Category"
                            value={formData.category}
                            onChange={(e) =>
                              setFormData({ ...formData, category: e.target.value })
                            }
                          />
                        </div>

                        <div>
                          <label className="text-xs font-bold text-gray-500 uppercase block mb-2">
                            Type
                          </label>
                          <select
                            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-orange-500/20 outline-none"
                            value={formData.type}
                            onChange={(e) =>
                              setFormData({ ...formData, type: e.target.value })
                            }
                          >
                            <option value="press-release">Press Release</option>
                            <option value="announcement">Announcement</option>
                            <option value="insight">Insight</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50/50 p-6 rounded-2xl border border-gray-100 space-y-5">
                      <h3 className="font-bold text-corporate-navy text-sm flex items-center gap-2">
                        <ImageIcon size={16} className="text-orange-500" />
                        Cover Image
                      </h3>

                      <div className="space-y-4">
                        <input
                          type="text"
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-orange-500/20 outline-none"
                          placeholder="Image URL"
                          value={formData.image}
                          onChange={(e) =>
                            setFormData({ ...formData, image: e.target.value })
                          }
                        />
                        {formData.image && (
                          <div className="rounded-xl overflow-hidden aspect-video shadow-sm border border-gray-100">
                            <img
                              src={formData.image}
                              alt="Preview"
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.target.style.display = "none";
                              }}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </form>

              {/* Modal Footer */}
              <div className="px-8 py-6 border-t border-gray-100 bg-white flex items-center justify-between">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-6 py-2 text-gray-500 font-bold hover:text-corporate-navy transition-all"
                >
                  Cancel
                </button>
                <div className="flex items-center gap-4">
                  {currentItem && (
                    <a
                      href={`/announcements/${formData.type}s/${formData.slug}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-xs font-bold text-orange-500 hover:underline"
                    >
                      <ExternalLink size={14} /> View Live
                    </a>
                  )}
                  <button
                    type="submit"
                    form="newsForm"
                    disabled={submitting}
                    className="bg-corporate-navy text-white px-8 py-3 rounded-xl font-bold hover:bg-navy-900 transition-all shadow-lg shadow-corporate-navy/20 disabled:opacity-50 flex items-center gap-2"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="animate-spin" size={18} />
                        <span>Saving...</span>
                      </>
                    ) : (
                      <span>{currentItem ? "Save Changes" : "Publish News"}</span>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* DELETE MODAL */}
      <AnimatePresence>
        {isDeleteModalOpen && (
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-corporate-navy/40 backdrop-blur-sm animate-in fade-in duration-300">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trash2 className="text-red-600" size={30} />
              </div>
              <h3 className="text-xl font-bold text-corporate-navy mb-2">
                Delete News?
              </h3>
              <p className="text-gray-500 mb-8">
                Are you sure you want to delete{" "}
                <span className="font-bold">"{currentItem?.title}"</span>? This
                action cannot be undone.
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => setIsDeleteModalOpen(false)}
                  className="flex-1 px-6 py-3 border border-gray-200 text-gray-600 font-bold rounded-xl hover:bg-gray-50 transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDelete}
                  disabled={submitting}
                  className="flex-1 px-6 py-3 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-all disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <Loader2 className="animate-spin" size={18} />
                  ) : (
                    "Delete Now"
                  )}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style
        dangerouslySetInnerHTML={{
          __html: `
                .animate-shake {
                    animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
                }
                @keyframes shake {
                    10%, 90% { transform: translate3d(-1px, 0, 0); }
                    20%, 80% { transform: translate3d(2px, 0, 0); }
                    30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
                    40%, 60% { transform: translate3d(4px, 0, 0); }
                }
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #e2e8f0;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #cbd5e1;
                }
            `,
        }}
      />
    </div>
  );
};

export default ManageNews;
