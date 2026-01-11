import React from "react";
import ReactDOM from "react-dom/client";
import 'react-quill/dist/quill.snow.css';
import "jsvectormap/dist/css/jsvectormap.css";
import 'react-toastify/dist/ReactToastify.css';
import 'react-modal-video/css/modal-video.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import $ from 'jquery';
import App from "./App.jsx";

// Make jQuery available globally for DataTables and other plugins
window.$ = window.jQuery = $;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);