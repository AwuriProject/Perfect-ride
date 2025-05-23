// hooks/usePlatformRedirect.js
const usePlatformRedirect = () => {
  const handleRedirect = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
      // Android: Google Play Store
      window.location.href = "https://play.google.com/store/apps/details?id=com.perfectride.apkuser";
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      // iOS: Apple App Store
      window.location.href = "https://apps.apple.com/ng/app/perfectride-ride-earn/id6744430274";
    } else {
      // Desktop: Browser-based download
      window.location.href = "https://play.google.com/store/apps/details?id=com.perfectride.apkuser";
    }
  };

  return handleRedirect;
};

export default usePlatformRedirect;
