import typescript from 'rollup-plugin-typescript2';
import clear from 'rollup-plugin-clear';

import commonjs from '@rollup/plugin-commonjs';
import {nodeResolve} from '@rollup/plugin-node-resolve';

export default async function config(args) {
    return {
        input: 'src/index.ts',
        output: [
            {
                dir: 'dist',
                format: 'cjs',
                sourcemap: true,
            }
        ],
        plugins: [
            typescript({
                tsconfigOverride: {
                    compilerOptions: {
                        declaration: true,
                    },
                    include: null,
                },
            }),
            clear({
                targets: ['./dist'],
            }),
            nodeResolve({ preferBuiltins: false }), // or `true`
            commonjs()
        ],
        external: [ 'moment', 'axios' ]
    };
}
