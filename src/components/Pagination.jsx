import React from "react";

const Pagination = () => {
  return (
    <nav aria-label="Page navigation">
      <ul className="pagination">
        <li className="page-item prev">
          <a className="page-link waves-effect" href="javascript:void(0);">
            <i className="ti ti-chevrons-left ti-xs"></i>
          </a>
        </li>
        <li className="page-item active">
          <a className="page-link waves-effect" href="javascript:void(0);">
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link waves-effect" href="javascript:void(0);">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link waves-effect" href="javascript:void(0);">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link waves-effect" href="javascript:void(0);">
            4
          </a>
        </li>
        <li className="page-item">
          <a className="page-link waves-effect" href="javascript:void(0);">
            5
          </a>
        </li>
        <li className="page-item next">
          <a className="page-link waves-effect" href="javascript:void(0);">
            <i className="ti ti-chevrons-right ti-xs"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
