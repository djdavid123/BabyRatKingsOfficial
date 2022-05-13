const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.tsx',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        // General
        page: {
          from_bg: colors.stone[100],
          to_bg: colors.stone[200],
        },
        titles: colors.blue[600],
        links: {
          txt: colors.green[600],
          hover_txt: colors.stone[700],
        },
        loading_spinner: colors.stone[400],
        popups: {
          bg: colors.stone[400],
          txt: colors.black,
          internal_border: colors.gray[600],
        },
        warning: {
          txt: colors.stone[800],
          bg: colors.yellow[400],
          border: colors.yellow[500],
        },
        error: {
          txt: colors.red[500],
          bg: colors.red[50],
          border: colors.red[200],
        },

        // Inputs
        btn: {
          txt: colors.blue[200],
          bg: colors.black,
          border: colors.teal[200],
          hover_txt: colors.teal[800],
          hover_bg: colors.teal[100],
          hover_border: colors.teal[200],
        },
        btn_primary: {
          txt: colors.blue[200],
          bg: colors.black,
          border: colors.teal[200],
          hover_txt: colors.white,
          hover_bg: colors.teal[200],
          hover_border: colors.teal[200],
        },
        btn_error: {
          txt: colors.white,
          bg: colors.red[500],
          border: colors.red[500],
          hover_txt: colors.white,
          hover_bg: colors.red[600],
          hover_border: colors.red[600],
        },
        label: colors.blue[600],
        txt_input: {
          txt: colors.stone[600],
          bg: colors.stone[600],
          border: colors.black,
          focus_txt: colors.stone[600],
          focus_bg: colors.stone[50],
          focus_border: colors.stone[400],
        },
        
        // Whitelist proof widget
        wl_message: {
          txt: colors.stone[800],
          bg: colors.stone[400],
        },

        // Mint widget
        token_preview: colors.stone[400],
      },
    },
  },
  variants: {},
  plugins: [],
};
