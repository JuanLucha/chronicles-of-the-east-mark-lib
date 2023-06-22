import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import babel from "rollup-plugin-babel";

export default {
  input: "src/index.js",
  output: [
    {
      file: "dist/cronicas-de-la-marca-lib.umd.js",
      format: "umd",
      name: "CronicasDeLaMarcaLib"
    },
    {
      file: "dist/cronicas-de-la-marca-lib.cjs.js",
      format: "cjs"
    },
    {
      file: "dist/cronicas-de-la-marca-lib.esm.js",
      format: "es"
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: "node_modules/**"
    }),
    terser()
  ]
};
