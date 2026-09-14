import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Membership from "./pages/Membership";
import Events from "./pages/Events";
import Donations from "./pages/Donations";
import Contact from "./pages/Contact";
import Council from "./pages/Council";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Members from "./pages/Members";
import EventsDetails from "./pages/EventsDetails";
import EventsGallery from "./pages/EventsGallery";

import { AuthProvider } from "./admin/AuthContext";
import { RequireRole } from "./admin/RequireRole";
import AdminLayout from "./admin/AdminLayout";
import Login from "./admin/Login";
import Signup from "./admin/Signup";
import Dashboard from "./admin/Dashboard";
import EventsAdmin from "./admin/EventsAdmin";
import CouncilAdmin from "./admin/CouncilAdmin";
import MembersAdmin from "./admin/MembersAdmin";
import UsersAdmin from "./admin/UsersAdmin";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Define all routes here */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventsDetails />} />
          <Route path="/donations" element={<Donations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/council" element={<Council />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/members" element={<Members />} />
          <Route path="/gallery/:id" element={<EventsGallery />} />

          {/* Admin */}
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/signup" element={<Signup />} />
          <Route
            path="/admin"
            element={
              <RequireRole>
                <AdminLayout />
              </RequireRole>
            }
          >
            <Route index element={<Dashboard />} />
            <Route
              path="events"
              element={
                <RequireRole role="events_editor">
                  <EventsAdmin />
                </RequireRole>
              }
            />
            <Route
              path="council"
              element={
                <RequireRole role="council_editor">
                  <CouncilAdmin />
                </RequireRole>
              }
            />
            <Route
              path="members"
              element={
                <RequireRole role="members_editor">
                  <MembersAdmin />
                </RequireRole>
              }
            />
            <Route
              path="users"
              element={
                <RequireRole role="admin">
                  <UsersAdmin />
                </RequireRole>
              }
            />
          </Route>

          {/* IMPORTANT: DO NOT place any routes below this. */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
