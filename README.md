# FriendsOfFlarum Synopsis

![License](https://img.shields.io/badge/license-MIT-blue.svg) [![Latest Stable Version](https://img.shields.io/packagist/v/fof/synopsis.svg)](https://packagist.org/packages/fof/synopsis)

A [Flarum](https://github.com/flarum/flarum) extension which adds summary excerpts to the discussion list.

## Features

As well as displaying an excerpt as a summary (with configurable length):

- All display strings are translatable
- Toggle between displaying plain or rich content in the summary (admin)
- Choose from using either the first or latest post in the summary (admin)
- User preference to show/hide summaries
- User preference to enable summaries on mobile

## Screenshots

### Admin settings

![image](https://user-images.githubusercontent.com/16573496/103157392-18bd3e80-47aa-11eb-8760-2108fdb68000.png)

#### Rich content in summary

![image](https://user-images.githubusercontent.com/16573496/103157062-4c4a9980-47a7-11eb-9103-327f3aff0690.png)

#### User settings

![image](https://user-images.githubusercontent.com/16573496/103158069-b23c1e80-47b1-11eb-8877-29016b7e4b21.png)

## Installation

```bash
composer require fof/synopsis
```

### Updating

```bash
composer require fof/synopsis
php flarum migrate
php flarum cache:clear
```

## Links

- [Github](https://github.com/friendsofflarum/synopsis)
- [Discuss](https://discuss.flarum.org/)
- [Packagist](https://packagist.org/packages/fof/synopsis)

## Support

Please consider supporting my extension development and maintenance work.
[Buy me a coffee](https://www.buymeacoffee.com/ianm1)
