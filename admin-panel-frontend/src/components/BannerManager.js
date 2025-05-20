import React, { useState } from "react";
import "../assets/css/bannerManager.css"; // Keep styles separate

const BannerManager = () => {
  const [banners, setBanners] = useState([]);
  const [preview, setPreview] = useState(null);

  // Handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // Upload banner (mocked function)
  const handleUpload = () => {
    if (preview) {
      setBanners([...banners, preview]);
      setPreview(null);
    }
  };

  // Remove a banner
  const removeBanner = (index) => {
    const updatedBanners = banners.filter((_, i) => i !== index);
    setBanners(updatedBanners);
  };

  return (
    <div className="banner-manager container">
      <h2>Banner Management</h2>
      <div className="upload-section">
        <input type="file" accept="image/*" onChange={handleFileChange} />
        {preview && (
          <div className="preview">
            <img src={preview} alt="Preview" className="img-thumbnail" />
            <button className="btn btn-primary mt-2" onClick={handleUpload}>
              Upload Banner
            </button>
          </div>
        )}
      </div>

      <div className="banners-list mt-4">
        <h4>Uploaded Banners</h4>
        <div className="row">
          {banners.map((banner, index) => (
            <div key={index} className="col-md-3">
              <img src={banner} alt={`Banner ${index}`} className="img-fluid" />
              <button
                className="btn btn-danger btn-sm mt-2"
                onClick={() => removeBanner(index)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerManager;
