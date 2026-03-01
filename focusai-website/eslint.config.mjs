import eslintPluginAstro from 'eslint-plugin-astro';
import tsParser from '@typescript-eslint/parser';

export default [
  // Astro recommended rules (includes parser setup for .astro files)
  ...eslintPluginAstro.configs.recommended,

  // Global ignores
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      '.astro/**',
      '*.config.mjs',
      'generate-*.mjs',
      'src/pages/academy/_drafts/**',
      'src/pages/ai-dev-syllabus.astro',
    ],
  },

  // TypeScript/TSX files — proper parser + bug-catching rules
  {
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    rules: {
      'no-undef': 'off',
      'no-unused-vars': 'off',
      'no-debugger': 'error',
      'no-console': 'warn',
      'no-var': 'error',
      'prefer-const': 'warn',
      'eqeqeq': ['warn', 'smart'],
    },
  },

  // Plain JS files
  {
    files: ['src/**/*.js'],
    rules: {
      'no-debugger': 'error',
      'no-console': 'warn',
      'prefer-const': 'warn',
    },
  },

  // Astro files — inline scripts use var/alert intentionally
  {
    files: ['**/*.astro', '**/*.astro/*.js', '**/*.astro/*.ts'],
    rules: {
      'no-undef': 'off',
      'no-unused-vars': 'off',
      'no-var': 'off',
      'no-alert': 'off',
      'no-console': 'off',
      'prefer-const': 'off',
      'eqeqeq': 'off',
    },
  },
];
