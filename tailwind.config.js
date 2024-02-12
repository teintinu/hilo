module.exports = {
  darkMode: false,
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "slit-in-vertical": "slit-in-vertical 0.45s ease both",
        "slide-in-right": "slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
        "slide-out-top": "slide-out-top 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both",
        "slide-out-tl": "slide-out-tl 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530)   both",
        "slide-out-tr": "slide-out-tr 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530)   both",
      },
      keyframes: {
        "slit-in-vertical": {
          "0%": {
            transform: "translateZ(-800px) rotateY(90deg)",
            opacity: "0"
          },
          "54%": {
            transform: "translateZ(-160px) rotateY(87deg)",
            opacity: "1"
          },
          to: {
            transform: "translateZ(0) rotateY(0)"
          }
        },
        "slide-out-top": {
          "0%": {
            transform: "translateY(0)",
            opacity: "1"
          },
          to: {
            transform: "translateY(-1000px)",
            opacity: "0"
          }
        },
        "slide-in-right": {
          "0%": {
            transform: "translateX(1000px)",
            opacity: "0"
          },
          to: {
            transform: "translateX(0)",
            opacity: "1"
          }
        },
        "slide-out-tl": {
          "0%": {
            transform: "translateY(0) translateX(0)",
            opacity: "1"
          },
          to: {
            transform: "translateY(-1000px) translateX(-1000px)",
            opacity: "0"
          }
        },
        "slide-out-tr": {
          "0%": {
            transform: "translateY(0) translateX(0)",
            opacity: "1"
          },
          to: {
            transform: "translateY(-1000px) translateX(1000px)",
            opacity: "0"
          }
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
