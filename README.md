
# React Image Bounding Box

## English / Português

This library is a lightweight and easy-to-use solution for drawing bounding boxes over images in React applications. It is ideal for projects that require visual marking or highlighting of specific areas within images, such as computer vision applications.
##
Esta biblioteca é uma solução leve e fácil de usar para desenhar bounding boxes sobre imagens em aplicações React. Ideal para projetos que necessitam de marcação visual ou destacamento de áreas específicas em imagens, como aplicações de visão computacional.


## Installation / Instalação

```bash
  npm install react-image-bounding-box
```
    
## How to use / Como usar

```javascript
import ImageBoundingBox from 'react-image-bounding-box'

const myBoundingBoxProperty = [{
    width: 0.22352318465709686,
    height: 0.4681033790111542,
    left: 0.3866458237171173,
    top: 0.1659037470817566,
  }]

function App() {
  return <ImageBoundingBox
          imageSrc={"https://example.com/path/to/image.jpg"}
          box={myBoundingBoxProperty}
          style={{
            height: '90%',
            width: '60%',
          }}
        />
}
```

__Result / Resultado__

[![dj8fySn.md.png](https://iili.io/dj8fySn.md.png)](https://freeimage.host/i/dj8fySn)

#

```javascript
import ImageBoundingBox from 'react-image-bounding-box'

const myBoundingBoxProperties = [
  {
    width: 0.06587400287389755,
    height: 0.13636204600334167,
    left: 0.47123369574546814,
    top: 0.4141869843006134,
    boundingBoxStyles: {
      color: '#3bddc2',
    },
  },
  {
    width: 0.0636659488081932,
    height: 0.13653339445590973,
    left: 0.47953468561172485,
    top: 0.09680020064115524,
    boundingBoxStyles: {
      color: '#931d9e',
      lineWidth: 4,
    },
  },
]

function App() {
  return <ImageBoundingBox
          imageSrc={"https://example.com/path/to/image.jpg"}
          box={myBoundingBoxProperties.map((box) => {
            return {
              height: box.height,
              left: box.left,
              top: box.top,
              width: box.width,
              boundingBoxStyles: box.boundingBoxStyles,
            }
          })}
          style={{
            height: '50%',
            width: '60%',
          }}
        />
}
```
__Result / Resultado__

[![dj8X6wg.md.png](https://iili.io/dj8X6wg.md.png)](https://freeimage.host/i/dj8X6wg)

## Created by / Criado por

- [@rodrigmelo](https://www.github.com/rodrigmelo)


## 🔗 Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rodrigmelo/)



## License / Licença

[MIT](https://choosealicense.com/licenses/mit/)


## Contact / Contato
For suggestions, questions, or bug reports, please reach out to: rodrig.melo96@gmail.com

Para sugestões, dúvidas ou reportar bugs, entre em contato: rodrig.melo96@gmail.com

