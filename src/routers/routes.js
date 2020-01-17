import { lazy } from "react";

// #############################################################################
// list of routes
// #############################################################################

export default [
  {
    layout: lazy(() => import("pages/admin-dashboard/admin-dashboard")),
    path: '/admin-dashboard',
    label: 'Admin Dashboard',
    title: 'Admin Dashboard',
    name: "adminDashboard",
    exact: false,
    children: [
      {
        layout: lazy(() => import("pages/admin-dashboard/offices-page")),
        path: '/admin-dashboard/offices',
        label: 'Offices Page',
        title: 'Offices Page',
        exact: false,
      },
      {
        layout: lazy(() => import("pages/admin-dashboard/donations-page")),
        path: '/admin-dashboard/donations',
        label: 'Donations Page',
        title: 'Donations Page',
        exact: false,
      },
      {
        layout: lazy(() => import("pages/admin-dashboard/subjects-page")),
        path: '/admin-dashboard/subjects',
        label: 'Subjects Page',
        title: 'Subjects Page',
        exact: false,
      },
      {
        layout: lazy(() => import("pages/admin-dashboard/staff-page")),
        path: '/admin-dashboard/staff',
        label: 'Staff Page',
        title: 'Staff Page',
        exact: false,
      },
      {
        layout: lazy(() => import("components/error-pages/error-page")),
        path: '/admin-dashboard/',
        label: 'Error Page',
        title: 'Error Page',
        exact: false,
      },
    ]
  },
  {
    layout: lazy(() => import("pages/login-page")),
    path: '/',
    label: 'Login Page',
    title: 'Login Page',
    exact: true,
  },
  {
    layout: lazy(() => import("pages/login-page")),
    path: '/login',
    label: 'Login Page',
    title: 'Login Page',
    exact: true,
  },
  {
    layout: lazy(() => import("pages/login-page")),
    path: '/log-in',
    label: 'Login Page',
    title: 'Login Page',
    exact: true,
  },
  {
    layout: lazy(() => import("pages/sign-up-page")),
    path: '/sign-up',
    label: 'Signup Page',
    title: 'Signup Page',
    exact: true,
  },
  {
    layout: lazy(() => import("pages/register-page")),
    path: '/register',
    label: 'Register Page',
    title: 'Register Page',
    exact: true,
  },
  {
    layout: lazy(()=> import("components/error-pages/error-page")),
    path: '/',
    label: 'Error Page',
    title: 'Error Page',
    exact: false,
  }
];
