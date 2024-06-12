import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const HeaderModal = ({
  isVisible,
  onClose,
  position,
  children,
  onMouseEnter,
  onMouseLeave,
  paddingX = "px-32",
  paddingY = "py-12",
  closeOnOutsideClick = true, // New prop to control outside click behavior
}) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (closeOnOutsideClick) {
      const handleDocumentClick = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
          onClose();
        }
      };
      document.addEventListener("mousedown", handleDocumentClick);
      return () => {
        document.removeEventListener("mousedown", handleDocumentClick);
      };
    }
  }, [closeOnOutsideClick, onClose]);

  return (
    isVisible && (
      <div
        ref={modalRef}
        className={`header-modal absolute z-30 border-t-[1px] bg-white ${paddingX} ${paddingY} shadow-lg`}
        style={{
          top: position.top,
          left: position.left,
          right: position.right,
          width: position.width,
        }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {children}
      </div>
    )
  );
};

HeaderModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  position: PropTypes.shape({
    top: PropTypes.number.isRequired,
    left: PropTypes.number,
    right: PropTypes.number,
    width: PropTypes.string,
    height: PropTypes.string,
  }).isRequired,
  children: PropTypes.node.isRequired,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  closeOnOutsideClick: PropTypes.bool,
};

export default HeaderModal;
