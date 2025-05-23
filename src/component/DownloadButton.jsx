// components/DownloadButton.js
import usePlatformRedirect from './UniversalUrl.js';
import AppIcon from './AppIcon'

const DownloadButton = ({ image, alt = "Download Icon", className="" }) => {
  const handleDownload = usePlatformRedirect();

  return (
    <button onClick={handleDownload} className={className}>
      {image && <AppIcon/>}
      <p className="m-0 p-0">Download</p>
    </button>
  );
};

export default DownloadButton;

