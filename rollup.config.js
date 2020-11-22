import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import pkg from "./package.json";

export default {
  input: "src/index.ts",
  output: [
    {
      format: "cjs",
      dir: "dst",
      sourcemap: true,
    },
    {
      format: "es",
      dir: "dst",
      sourcemap: true,
    },
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [
    typescript({
      module: "CommonJS",
      sourceMap: false,
    }),
    commonjs({ extensions: [".js", ".ts"] }),
    terser(),
  ],
};
