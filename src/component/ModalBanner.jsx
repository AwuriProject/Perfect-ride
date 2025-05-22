import { useState } from "react";

const ModalBanner = () => {
  const [showModal, setShowModal] = useState(true);

  const handleClose = () => {
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <div className="modal section max__width">
      <p className="text-sm font-medium text-black">
        <strong>₦10,000</strong> voucher bonus for new riders🔥. Claim!
      </p>
      <svg
        onClick={handleClose}
        className="cursor-pointer lg:w-[14px] lg:h-[14px] w-3 h-3 ml-4"
        width="12"
        height="12"
        viewBox="0 0 8 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 1L1 7M1 1L7 7"
          stroke="black"
          strokeWidth="0.9375"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default ModalBanner;

