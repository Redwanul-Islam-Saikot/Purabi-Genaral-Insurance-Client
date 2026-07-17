/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purabi: {
          brand: "#A3371F", // মেইন খয়েরি লাল
          brandHover: "#8D2D18",
          bgLight: "#FAF4F0", // ড্যাশবোর্ডের ব্যাকগ্রাউন্ড
          cream: "#FCEEE6", // বাইরের ফ্রেমের ব্যাকগ্রাউন্ড
        }
      }
    },
  },
  plugins: [],
}