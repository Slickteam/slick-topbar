# \<slick-topbar>

## Description

<p align="center">
  <img src="https://user-images.githubusercontent.com/59962729/134512094-7018a5b9-9f1d-41de-aa3c-b102252ffb4a.png">
</p>

An authentication card that return's an event with a payload that contains both input's content. The web component was made using lit element.

## Installation
```bash
npm i @slickteam/slick-topbar
```

## Usage

- **Html vanilla**

```html
<script type="module">
  import '@slickteam/slick-topbar';
</script>

<slick-topbar></slick-topbar>
```

- **Vue.js**

```html
<template>
  <div>
    <h1>Test Page</h1>
    <slick-topbar
        :imgSrc="image"
    ></slick-topbar>
  </div>
</template>

<script>
import '@slickteam/slick-topbar';
import image from './path/to/image/file'

export default {
  name: 'TestPage', 
  data() {
      return {
          image: image,
      }
  },
}
</script>

<style scoped>
/* Put CSS */
</style>

```

### Template

``` html
    <slick-topbar
      hideTitle
      titleContent="The title you want to display"
      hideLogo
      imgSrc
      color="#000000"
      backgroundColor="#FFF"
    ></slick-topbar>
```
### Properties

Name                | Type               | Description
---                 | ---                | ---
`hideTitle`         | Boolean            | Hide the title if not needed
`titleContent`      | String             | Define text content of the title
`hideLogo`          | Boolean            | Hide the logo that is next to the burger
`imgSrc`            | String             | The image source
`color`             | String             | Custom color
`backgroundColor`   | String             | Custom background color

### Events

Name            | Description
---             | ---
`slick-burger`  | The event emitted when the burger is clicked, it potentially allows to open a navigation drawer.

## Development

### Demoing with Storybook

To run a local instance of Storybook for your component, run
```bash
npm run storybook
```

To build a production version of Storybook, run
```bash
npm run storybook:build
```
