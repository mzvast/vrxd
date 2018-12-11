import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import url from 'rollup-plugin-url';
import css from 'rollup-plugin-css-porter';
import svgr from '@svgr/rollup';

import pkg from './package.json';

export default {
    input: 'src/components/index.js',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            sourcemap: true
        },
        {
            file: pkg.module,
            format: 'es',
            sourcemap: true
        }
    ],
    plugins: [
        css(),
        url(),
        svgr(),
        babel({
            exclude: 'node_modules/**'
            // plugins: ['external-helpers']
        }),
        resolve({
            extensions: ['.jsx']
        }),
        commonjs({
            include: 'node_modules/**'
        })
    ],
    external: Object.keys(pkg.dependencies)
};
