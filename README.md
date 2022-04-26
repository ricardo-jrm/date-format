<div align="center">

# 🌙 `@ricardojrmcom/date-format`

<b>Format dates</b>

![build](https://img.shields.io/github/workflow/status/ricardojrmcom/date-format/Continuous%20Integration?style=for-the-badge)
![license](https://img.shields.io/github/license/ricardojrmcom/date-format?style=for-the-badge)

![author](<https://img.shields.io/badge/Author-Ricardo%20%3Cl1b3r__--%3E%20Mota%20(%40ricardojrmcom)-orange?style=for-the-badge>)

![lang](https://img.shields.io/github/languages/top/ricardojrmcom/date-format?style=for-the-badge)
![version](https://img.shields.io/npm/v/@ricardojrmcom/date-format?style=for-the-badge)
![size](https://img.shields.io/bundlephobia/min/@ricardojrmcom/date-format?style=for-the-badge)

</div>

<br />

---

<br />

### <b>Install</b>

```ts
npm install @ricardojrmcom/date-format

yarn add @ricardojrmcom/date-format
```

<br />

### <b>Usage</b>

```ts
import { dateFormat, dateRelative } from '@ricardojrmcom/date-format'

dateFormat(new Date('2022-01-31'))
-> '12:00 AM - 31 Jan, 2022 GMT'

dateRelative(new Date('2022-01-31'))
->  {
      from: '2 months ago',
      fromNow: 'in 2 months',
      to: 'in 2 months',
      toNow: '2 months ago',
    }
```

<br />

<br />

---

<br />

### <b>License</b>

[MIT](https://github.com/ricardojrmcom/date-format/blob/main/LICENSE) © Ricardo <l1b3r\_-> Mota ([@ricardojrmcom](https://github.com/ricardojrmcom))

Bootstrapped with 🟪[@ricardojrmcom/nova](https://github.com/ricardojrmcom/nova)

<br />
