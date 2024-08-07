import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Auth/Login';
import Dashboard from './Admin/Dashboard';
import Settings from './Admin/Settings';
import ViewFaqs from './Admin/ViewFaqs';
// import CreateFaq from './Admin/CreateFaqx';
import ViewBookings from './Admin/ViewBookings';
import ViewTransactions from './Admin/ViewTransactions';
import ViewCategories from './Admin/ViewCategories';
import ViewSubcategories from './Admin/ViewSubcategories';
import ViewDrivers from './Admin/ViewDrivers';
import ViewPassengers from './Admin/ViewPassengers';
import ViewRoles from './Admin/ViewRoles';
import ViewPermissions from './Admin/ViewPermissions';
import ViewAdmins from './Admin/ViewAdmins';
import ViewTickets from './Admin/ViewTickets';
import ViewCountries from './Admin/ViewCountries';
import ViewProfile from './Admin/ViewProfile';
import CreateRole from './Admin/CreateRole';
import EditRole from './Admin/EditRole';

const App = () => {

  return (
    <Router>
      <Routes>

        <Route path={`/`} element={<Login />} />
        <Route path={`/admin/dashboard`} element={<Dashboard />} />
        <Route path={`/admin/settings`} element={<Settings />} />

        {/* FAQs */}
        <Route path={`/admin/faqs`} element={<ViewFaqs />} />
        {/* <Route path={`/create-faq`} element={<CreateFaq />} /> */}

        {/* Bookings */}
        <Route path={`/admin/bookings`} element={<ViewBookings />} />
        <Route path={`/admin/transactions`} element={<ViewTransactions />} />
        <Route path={`/admin/categories`} element={<ViewCategories />} />

        <Route path={`/admin/subcategories`} element={<ViewSubcategories />} />
        <Route path={`/admin/subcategories/:categoryId`} element={<ViewSubcategories />} />

        <Route path={`/admin/drivers`} element={<ViewDrivers />} />
        <Route path={`/admin/passengers`} element={<ViewPassengers />} />
        <Route path={`/admin/roles`} element={<ViewRoles />} />
        <Route path={`/admin/permissions`} element={<ViewPermissions />} />
        <Route path={`/admin/admins`} element={<ViewAdmins />} />
        <Route path={`/admin/tickets`} element={<ViewTickets />} />
        <Route path={`/admin/coutries`} element={<ViewCountries />} />
        <Route path={`/admin/profile`} element={<ViewProfile />} />

        <Route path={`/admin/role/create`} element={<CreateRole />} />
        <Route path={`/admin/role/edit/:roleId`} element={<EditRole />} />




      </Routes>
    </Router>
  );
};

export default App;