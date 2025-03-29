export const menus = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Account",
    to: "/account",
    children: [
      {
        label: "Savings",
        to: "/savings",
      },
      {
        label: "Deposits",
        to: "/deposits",
      },
      {
        label: "Loan",
        to: "/loans",
        children: [
          {
            label: "Personal Loan",
            to: "/personal",
          },
          {
            label: "Home Loan",
            to: "/home",
          },
          {
            label: "Education Loan",
            to: "/education",
          },
        ],
      },
    ],
  },
  {
    label: "Profile",
    to: "/profile",
    children: [
      {
        label: "Deatils",
        to: "/details",
        children: [
          {
            label: "Location",
            to: "/location",
            children: [
              {
                label: "City",
                to: "/city",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "Settings",
    to: "/settings",
    children: [
      {
        label: "Security",
        to: "/security",
        children: [
          {
            label: "Login",
            to: "/login",
          },
          {
            label: "Register",
            to: "/register",
          },
        ],
      },
    ],
  },
];
