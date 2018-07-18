# Drupal Starter Kit

This project template provides a starter kit for managing your site
dependencies with [Composer](https://getcomposer.org/).

The foundation for the Drupal install comes from: https://github.com/drupal-composer/drupal-project.

## Includes
1. Latest version of Drupal
2. Up to date vagrant box for local development.
3. Base theme that provides a quick setup. Integrates Gulp to compile SASS and JS files.
4. Must have modules including devel, pathauto and admin_toolbar.

## Usage

First you need to [install composer](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-osx).

> Note: The instructions below refer to the [global composer installation](https://getcomposer.org/doc/00-intro.md#globally).
You might need to replace `composer` with `php composer.phar` (or similar) 
for your setup.

After that you install the project:

## Install

### Navigate to root directory, then:

 Retrieve Drupal dependencies.
```
composer install
```

Install Vagrant Box.
```
vagrant up
```

## Base Theme
A placeholder theme is generated in the theme directory to help with theme creation. To install gulp dependencies, change directory to /web/themes/theme_name and run:

> This will also install Bootstrap 4. To exclude Bootstrap, remove the dependencies in package.json

```
npm install
```
 
## Enjoy!