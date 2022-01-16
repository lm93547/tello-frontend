/** * *
ModalContainer
* */

import React from "react";
import { render } from "react-dom";
import "./styles.css";
import { FiX } from "react-icons/fi";

const contains = (arr, attr, val) => {
  let bool = false;
  arr.forEach((element) => {
    if (element[attr] === val) bool = true;
  });
  return bool;
};

/**
 *
 * @param {title} title - string
 * @param {Header} Header - JSX
 * @param {Body} Body - JSX
 * @param {Footer} Footer - JSX
 * @param {modalProps} modalProps - object
 * @param {headerProps} headerProps - object
 * @param {bodyProps} bodyProps - object
 * @param {footerProps} footerProps - object
 * @param {params} params - object
 *
 */
export const modal = ({ centered, Modal, disabled, ...props }) => {
  const backdrop = document.createElement("div");
  //   backdrop.classList.add("modal-backdrop");
  backdrop.setAttribute("id", "ee-modal-backdrop");

  const container = document.createElement("div");
  container.setAttribute("id", "ee-modal-container");

  if (centered) container.classList.add("center");

  container.addEventListener("click", (e) => {
    if(!disabled){
      if (!contains(e.path, "id", "ee-modal")) {
          backdrop.classList.remove("show");
          document.getElementById("ee-modal").classList.remove("show");
          setTimeout(() => {
            document.body.removeChild(backdrop);
            document.body.removeChild(container);
          }, 150);
        
      }
    }
  });

  document.body.appendChild(backdrop);
  document.body.appendChild(container);

  render(Modal ? <Modal {...props} /> : <CustomModal {...props} />, container);

  setTimeout(() => {
    backdrop.classList.add("show");
    document.getElementById("ee-modal").classList.add("show");
  }, 0);
};
modal.open = modal;

modal.close = () => {
    const backdrop = document.getElementById("ee-modal-backdrop");
    const container = document.getElementById("ee-modal-container");
  
    backdrop.classList.remove("show");
    document.getElementById("ee-modal").classList.remove("show");
    
    setTimeout(() => {
      document.body.removeChild(backdrop);
      document.body.removeChild(container);
    }, 150);
  
};

export function CustomModal({
  title,
  Header,
  Body,
  Footer,
  modalProps,
  headerProps,
  bodyProps,
  footerProps,
  disabled,
  params = {},
}) {
  return (
    <div
      id={"ee-modal"}
      className={`ee-modal ${modalProps?.className || ""}`}
      {...modalProps}
    >
      <div
        className={`ee-modal-header ${headerProps?.className || ""}`}
        {...headerProps}
      >
        {Header ? (
          <Header {...params} />
        ) : (
          <>
            <div className="ee-modal-title">{title}</div>
            <FiX id="ee-modal-close" className="ee-modal-close" onClick={modal.close} />
          </>
        )}
      </div>
      <div
        className={`ee-modal-body ${bodyProps?.className || ""}`}
        {...bodyProps}
      >
        {Body && <Body {...params} />}
      </div>
      <div
        className={`ee-modal-footer ${footerProps?.className || ""}`}
        {...footerProps}
      >
        {Footer && <Footer {...params} />}
      </div>
    </div>
  );
}

// export function ModalContainer({ state }) {
//   return (
//     <div
//       style={{
//         position: "fixed",
//         height: "100vh",
//         width: "100vw",
//       }}
//       id="modal-container"
//     />
//   );
// }

// ModalContainer.propTypes = {
//   stores: PropTypes.object,
// };

// ModalContainer.defaultProps = {};
