import React, { useEffect } from "react";
import "../../Css/Error.css";

function Error() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section>
      <div class="container">
        <div class="row align-item-center">
          <div class="col-md-6 text-center">
            <div class="error-code">
              4<span class="text-primary">0</span>4
            </div>
          </div>
          <div class="col-md-6">
            <div class="error-message">
              <p class="error">Oops! Page not found</p>
            </div>
            <p className="common-error">
              The page you are looking for might have been removed had its name
              changed or{" "}
              <span class="text-primary">temprorarily unavailable</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Error;
