/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      tedBlack: "#0E0E0E",
      tedGray: "#212121",
      tedDarkWhite: "#B3B3B3",
      tedWhite: "#fff",
      tedRed: "#FF2B06",
      transparent: "transparent",
    },
    fontFamily: {
      sans: ["Inter", "Helvetica", "Arial", "sans-serif"],
    },
    fontSize: {
      small: [
        "14px",
        {
          letterSpacing: "-0.02em",
          lineHeight: "24px",
        },
      ],
      d_base: [
        "20px",
        {
          letterSpacing: "-0.02em",
          lineHeight: "24px",
        },
      ],
      d_3xl: [
        "64px",
        {
          letterSpacing: "-0.02em",
          lineHeight: "68px",
        },
      ],
      d_2xl: [
        "40px",
        {
          letterSpacing: "-0.02em",
          lineHeight: "48px",
        },
      ],
      d_xl: [
        "28px",
        {
          letterSpacing: "-0.02em",
          lineHeight: "30px",
        },
      ],
      m_base: [
        "18px",
        {
          letterSpacing: "-0.02em",
          lineHeight: "23px",
        },
      ],
      m_3xl: [
        "46px",
        {
          letterSpacing: "-0.02em",
          lineHeight: "52px",
        },
      ],
      m_2xl: [
        "32px",
        {
          letterSpacing: "-0.02em",
          lineHeight: "36px",
        },
      ],
      m_xl: [
        "24px",
        {
          letterSpacing: "-0.02em",
          lineHeight: "26px",
        },
      ],
    },
    fontWeight: {
      normal: 400,
      bold: 700,
    },
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            maxWidth: "880px",
            color: theme("colors.tedWhite"),
            a: {
              fontWeight: "inherit",
              color: theme("colors.tedWhite"),
              "&:hover": {
                color: theme("colors.tedRed"),
              },
            },
            "--tw-prose-headings": theme("colors.tedWhite"),
          },
        },
      }),
      screens: {
        xxsm: "350px",
        xsm: "400px",
      },
      animation: {
        "spin-slow": "spin 6s linear infinite",
        "spin-super-slow": "spin 18s linear infinite",
      },
      height: {
        550: "550px",
        600: "600px",
        750: "750px",
        800: "800px",
      },
      maxWidth: {
        287: "287px",
        400: "400px",
        500: "500px",
        615: "615px",
        660: "660px",
        800: "800px",
      },
      minHeight: {
        500: "500px",
        280: "280px",
      },
      zIndex: {
        "-1": "-1",
      },
      padding: {
        "1/2": "50%",
      },
    },
  },
  safelist: [
    {
      pattern: /grid-cols-(1|2|3|4|5|6|7|8)/,
      variants: ["lg", "md"],
    },
    {
      pattern: /gap-(x|y)-(0|1|3|6|8|12|24)/,
    },
  ],
  plugins: [require("@tailwindcss/typography")],
};
