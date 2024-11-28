 # shoppingcart

for this particular project i use tailwind css

first install
npx install -D tailwindcss
npx tailwindcss init


add the content in the tailwind.config.js file

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

last step import utilites in index.css
Add the @tailwind directives for each of Tailwind’s layers to your main CSS file.
@tailwind base;
@tailwind components;
@tailwind utilities;