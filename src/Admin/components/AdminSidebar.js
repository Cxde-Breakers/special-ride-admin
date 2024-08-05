import React from "react";
import "../Admin.css";

const AdminSidebar = ({ active }) => {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <a className="brand-link" href="/">
        <span className="brand-text font-weight-light">Special Ride</span>
      </a>

      <div className="sidebar">
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            data-accordion="false"
            role="menu"
          >
            <li className="nav-item">
              <a className={`nav-link ${
                    active === "dashboard" ? "active" : ""
                  }`} href={"/admin/dashboard"}>
                <i className="nav-icon fa fa-house-user"></i>
                Dashboard
              </a>
            </li>

            {/* babel-preset-react-app is part of the create-react-app project, which
is not maintianed anymore. It is thus unlikely that this bug will
ever be fixed. Add "@babel/plugin-proposal-private-property-in-object" to
your devDependencies to work around this error. This will make this message
go away. */}

            <li className="nav-item">
              <a href="/admin/drivers" className={`nav-link ${
                    active === "driver" ? "active" : ""
                  }`}>
                <i className="nav-icon fa fa-car"></i>
                Drivers
              </a>
            </li>

            <li className="nav-item">
              <a href="/admin/passengers" className={`nav-link ${
                    active === "passenger" ? "active" : ""
                  }`}>
                <i className="nav-icon fa fa-users"></i>
                Passengers
              </a>
            </li>

            <li className="nav-item">
              <a href="/admin/bookings" className={`nav-link ${
                    active === "booking" ? "active" : ""
                  }`} >
                <i className="nav-icon fa fa-address-book"></i>
                Bookings
              </a>
            </li>

            <li className="nav-item">
              <a href="/admin/transactions" className={`nav-link ${
                    active === "transaction" ? "active" : ""
                  }`} >
                <i className="nav-icon fa fa-dollar-sign"></i>
                Transactions
              </a>
            </li>

            <li className="nav-item">
              <a href="/admin/categories" className={`nav-link ${
                    active === "category" ? "active" : ""
                  }`}>
                <i className="nav-icon fa fa-motorcycle"></i>
                Category
              </a>
            </li>

            <li className="nav-item">
              <a href="/admin/subcategories" className={`nav-link ${
                    active === "subcategory" ? "active" : ""
                  }`}>
                <i className="nav-icon fa fa-list"></i>
                SubCategory
              </a>
            </li>

            {/* <li className="nav-item">
              <a href="/admin/tickets" className={`nav-link ${
                    active === "ticket" ? "active" : ""
                  }`}>
                <i className="nav-icon fa fa-comments"></i>
                Support Tickets
              </a>
            </li> */}

            <li className="nav-item">
              <a href="/admin/faqs" className={`nav-link ${
                    active === "faq" ? "active" : ""
                  }`} >
                <i className="nav-icon fa fa-question"></i>
                FAQs
              </a>
            </li>

            <li className="nav-item">
              <span className="nav-link text-white">
                <i className="nav-icon fas fa-location-dot"></i>
                <p>
                  Locations
                  <i className="right fas fa-angle-left"></i>
                </p>
              </span>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="/admin/coutries" className={`nav-link ${
                    active === "country" ? "active" : ""
                  }`}>
                    <i className="far fa-circle nav-icon"></i>
                    <p>Country</p>
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item ">
              <span className="nav-link text-white">
                <i className="nav-icon nav-icon fa fa-user"></i>
                <p>
                  Role & Permissions<i className="fas fa-angle-left right"></i>
                </p>
              </span>

              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="/admin/admins" className={`nav-link ${
                    active === "admin" ? "active" : ""
                  }`}>
                    <i className="far fa-circle nav-icon"></i>
                    Admins
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/admin/roles" className={`nav-link ${
                    active === "role" ? "active" : ""
                  }`}>
                    <i className="far fa-circle nav-icon"></i>
                    Roles
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/admin/permissions" className={`nav-link ${
                    active === "permission" ? "active" : ""
                  }`}>
                    <i className="far fa-circle nav-icon"></i>
                    Permissions
                  </a>
                </li>
              </ul>
              </li>

              <li className="nav-item ">
              <span className="nav-link text-white">
                <i className="nav-icon nav-icon fas fa-gears"></i>
                <p >
                  Settings<i className="fas fa-angle-left right"></i>
                </p>
              </span>

              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="/admin/settings" className={`nav-link ${
                    active === "setting" ? "active" : ""
                  }`}>
                    <i className="fas fa-cog nav-icon"></i>
                    General Settings
                  </a>
                </li>

              </ul>
              </li>

            
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default AdminSidebar;
