import { lazy } from "react";

const HomeView = lazy(() =>
  import(/* webpackChunkName: "home-view" */ "../views/HomeView")
);
const OurProducts = lazy(() =>
  import(/* webpackChunkName: "our-products" */ "../views/OurProducts")
);
const AboutUs = lazy(() =>
  import(/* webpackChunkName: "about-us" */ "../views/Borrower/AboutUs")
);
const Enquiries = lazy(() =>
  import(/* webpackChunkName: "enquiries" */ "../views/Borrower/Enquiries")
);

const AdminDashboard = lazy(() =>
  import(
    /* webpackChunkName: "new-loan-application" */ "../views/Admin/Dashboard"
  )
);

const NewLoanApplication = lazy(() =>
  import(
    /* webpackChunkName: "new-loan-application" */ "../views/Borrower/NewLoanApplication"
  )
);
const Loandetails = lazy(() =>
  import(
    /* webpackChunkName: "new-loan-application" */ "../views/Borrower/LoanDetails"
  )
);
const AssignLender = lazy(() =>
  import(
    /* webpackChunkName: "new-loan-application" */ "../views/Admin/AssignLender"
  )
);
const LoanApplicationStatus = lazy(() =>
  import(/* webpackChunkName: "new-loan-application" */ "../views/Admin/Status")
);

const RepaymentDetails = lazy(() =>
  import(
    /* webpackChunkName: "new-loan-application" */ "../views/Admin/RepaymentDetails/Repayment"
  )
);
const RevertedApplication = lazy(() =>
  import(
    /* webpackChunkName: "new-loan-application" */ "../views/Admin/RevertedApplication"
  )
);
const AdminFeedback = lazy(() =>
  import(
    /* webpackChunkName: "new-loan-application" */ "../views/Admin/Feedback"
  )
);
const AdminUserLender = lazy(() =>
  import(
    /* webpackChunkName: "new-loan-application" */ "../views/Admin/UserManagement/Lender"
  )
);
const AdminUserBorrower = lazy(() =>
  import(
    /* webpackChunkName: "new-loan-application" */ "../views/Admin/UserManagement/Borrower"
  )
);
const FunderRegistration = lazy(() =>
  import(
    /* webpackChunkName: "new-loan-application" */ "../views/Borrower/FunderRegistration"
  )
);
const ProductInformation = lazy(() =>
  import(
    /* webpackChunkName: "new-loan-application" */ "../views/ProductInformation"
  )
);

const Feedback = lazy(() =>
  import(
    /* webpackChunkName: "new-loan-application" */ "../views/Borrower/Feedback"
  )
);
const DirectorsInformation = lazy(() =>
  import(
    /* webpackChunkName: "directors-information" */ "../views/Borrower/DirectorsInformation"
  )
);
const CompleteRegistration = lazy(() =>
  import(
    /* webpackChunkName: "complete-registration" */ "../views/CompleteRegistration"
  )
);

const appRouter = [
  {
    path: "/home",
    component: HomeView,
    name: "Home",
    icon: "",
    exact: true,
  },
  {
    path: "/our-products",
    component: OurProducts,
    name: "Home",
    icon: "",
  },
  {
    path: "/enquiries",
    component: Enquiries,
    name: "Home",
    icon: "",
  },
  {
    path: "/admin/dashboard",
    component: AdminDashboard,
    name: "Home",
    icon: "",
  },

  {
    path: "/admin/feedback",
    component: AdminFeedback,
    name: "Home",
    icon: "",
  },
  {
    path: "/admin/user-lender",
    component: AdminUserLender,
    name: "Home",
    icon: "",
  },
  {
    path: "/admin/user-borrower",
    component: AdminUserBorrower,
    name: "Home",
    icon: "",
  },
  {
    path: "/newloandetails",
    component: Loandetails,
    name: "Home",
    icon: "",
  },
  {
    path: "/admin/assignlender",
    component: AssignLender,
    name: "Home",
    icon: "",
  },
  {
    path: "/admin/loan-status",
    component: LoanApplicationStatus,
    name: "Home",
    icon: "",
  },

  {
    path: "/admin/repayment-details",
    component: RepaymentDetails,
    name: "Home",
    icon: "",
  },
  {
    path: "/admin/reverted-app",
    component: RevertedApplication,
    name: "Home",
    icon: "",
  },
  {
    path: "/fund-register",
    component: FunderRegistration,
    name: "Home",
    icon: "",
  },
  {
    path: "/product-information",
    component: ProductInformation,
    name: "Home",
    icon: "",
  },

  {
    path: "/feedback-rating",
    component: Feedback,
    name: "Home",
    icon: "",
  },
  {
    path: "/new-loan",
    component: NewLoanApplication,
    name: "Home",
    icon: "",
  },
  {
    path: "/directors-information",
    component: DirectorsInformation,
    name: "Home",
    icon: "",
  },
  {
    path: "/complete-registration",
    component: CompleteRegistration,
    name: "Home",
    icon: "",
  },
  {
    path: "/borrower-login",
    component: HomeView,
    name: "Home",
    icon: "",
  },
  {
    path: "/broker-signup",
    component: HomeView,
    name: "Home",
    icon: "",
  },
  {
    path: "/borrower-signup",
    component: HomeView,
    name: "Home",
    icon: "",
  },
  {
    path: "/about-us",
    component: AboutUs,
    name: "Home",
    icon: "",
  },
];

export default appRouter;
