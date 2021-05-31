import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Post from "./components/Post/Post";
import Pagination from "./components/Pagination/Pagination";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(6);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get("https://api.first.org/data/v1/news");

      setPosts(res.data.data);
      setLoading(false);
    };

    fetchData();
  }, []);

  const indexOfLastPage = currentPage * postPerPage;
  const indexOfFirstPage = indexOfLastPage - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPage, indexOfLastPage);

  const paginate = (e) => setCurrentPage(e);

  return (
    <div className="app">
      <Post posts={currentPosts} loading={loading} />
      <Pagination
        postPerPage={postPerPage}
        totalPosts={posts.length}
        paginate={paginate}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
}

export default App;
