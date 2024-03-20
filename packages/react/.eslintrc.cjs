module.exports = {
  extends: ["custom/react"],
  rules: {
    "@typescript-eslint/restrict-template-expressions": [
      "error",
      {
        allowNumber: true,
      },
    ],
  },
};
