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
          <div class="col-md-8 text-center">
            <div class="error-code">
              4<span class="text-primary">0</span>4
            </div>
          </div>
          <div class="col-md-4">
            <div class="error-message">
              {/* <p class="error">Oops! Page not found</p> */}
            </div>
            <p className="common-error text-dark
            ">
              The page you are looking for is currently unavailable,or you are trying to access unauthorized resource
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Error;
