import { Routes, Route } from "react-router-dom";

import Home2 from "../pages/Home2";
import Forms from "../pages/Forms";
import Chat from "../pages/Chat";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProtectedRoute from "../components/common/ProjectedRoute";

import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";

export default function AppRoutes() {
    return (
        <Routes>
            {/* Main Layout Pages */}
            <Route
                path="/"
                element={
                    <MainLayout>
                        <Home2 />
                    </MainLayout>
                }
            />

            <Route
                path="/forms"
                element={
                    <MainLayout>
                        <Forms />
                    </MainLayout>
                }
            />

            <Route
                path="/chat"
                element={
                    <MainLayout>
                        <Chat />
                    </MainLayout>
                }
            />

            {/* Dashboard Layout Pages */}
            <Route
                path="/dashboard"
                element={
                    <ProtectedRoute>
                        <DashboardLayout>
                            <Dashboard />
                        </DashboardLayout>
                    </ProtectedRoute>
                }
            />

            {/* Not Found */}
            <Route
                path="*"
                element={
                    <MainLayout>
                        <NotFound />
                    </MainLayout>
                }
            />

            <Route
                path="/login"
                element={
                    <MainLayout>
                        <Login />
                    </MainLayout>
                }
            />

            <Route
                path="/register"
                element={
                    <MainLayout>
                        <Register />
                    </MainLayout>
                }
            />
        </Routes>
    );
}