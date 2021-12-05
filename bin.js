#!/usr/bin/env node
import { exec } from 'child_process';

exec(
  'npx degit https://github.com/ricardo-jrm/nova.git --force',
  (err, stdout, stderr) => {
    if (err) {
      return;
    }

    console.log(`stdout: ${stdout}`); // eslint-disable-line no-console
    console.log(`stderr: ${stderr}`); // eslint-disable-line no-console
  },
);
