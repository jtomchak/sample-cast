import React from "react";

const withError = GenericComponent => ({ showError, children }) => {
  return (
    <GenericComponent>
      {showError && (
        <div className="error-message">
          Oh no! Something when terribly wrong!
        </div>
      )}
      {children}
    </GenericComponent>
  );
};

const DivWithError = withError(({ children }) => <div>{children}</div>);

export default DivWithError;
