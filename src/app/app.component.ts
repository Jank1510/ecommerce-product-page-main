import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce-product-page-main';

  constructor() {
    this.img1()
    this.numero = 0
    this.existenProductos = false
    this.mostrarTarjeta = false
    this.MostrarP = false

    //funcion para la notificacion del prodcuto
    if (this.cantidadProducto != 0) {
      this.notificacion = true
    } else {
      this.notificacion = false
    }
    this.NavCellPhone = false

  }

  imgSelect: any
  styleSelect1img1: any
  styleSelect2img1: any
  styleSelect1img2: any
  styleSelect2img2: any
  styleSelect1img3: any
  styleSelect2img3: any
  styleSelect1img4: any
  styleSelect2img4: any
  numero: any
  cantidadProducto: any
  valorProductos: any
  existenProductos: any
  mostrarTarjeta: any
  notificacion: any = false
  MostrarP: any
  none: any
  NavCellPhone: any

  display() {
    this.none = 'none'
    var screenWidth = screen.width
      setTimeout(() => {
        this.none = 'block'
      }, 1);
    
    
  }
  navCell() {
    this.NavCellPhone = true
  }
  CerrarNav() {
    this.NavCellPhone = false

  }
  img1() {
    this.display()
    this.imgSelect = '../assets/image-product-1.jpg'
    this.styleSelect1img1 = 'invert(40%) brightness(170%)'
    this.styleSelect2img1 = '2px solid hsl(14.1, 100%, 50%)'
    this.styleSelect1img2 = ''
    this.styleSelect2img2 = ''
    this.styleSelect1img3 = ''
    this.styleSelect2img3 = ''
    this.styleSelect1img4 = ''
    this.styleSelect2img4 = ''
  }
  img2() {
    this.display()
    this.imgSelect = '../assets/image-product-2.jpg'
    this.styleSelect1img2 = 'invert(40%) brightness(170%)'
    this.styleSelect2img2 = '2px solid hsl(14.1, 100%, 50%)'
    this.styleSelect1img1 = ''
    this.styleSelect2img1 = ''
    this.styleSelect1img3 = ''
    this.styleSelect2img3 = ''
    this.styleSelect1img4 = ''
    this.styleSelect2img4 = ''
  }
  img3() {
    this.display()
    this.imgSelect = '../assets/image-product-3.jpg'
    this.styleSelect1img3 = 'invert(40%) brightness(170%)'
    this.styleSelect2img3 = '2px solid hsl(14.1, 100%, 50%)'
    this.styleSelect1img1 = ''
    this.styleSelect2img1 = ''
    this.styleSelect1img2 = ''
    this.styleSelect2img2 = ''
    this.styleSelect1img4 = ''
    this.styleSelect2img4 = ''
  }
  img4() {
    this.display()
    this.imgSelect = '../assets/image-product-4.jpg'
    this.styleSelect1img4 = 'invert(40%) brightness(170%)'
    this.styleSelect2img4 = '2px solid hsl(14.1, 100%, 50%)'
    this.styleSelect1img1 = ''
    this.styleSelect2img1 = ''
    this.styleSelect1img2 = ''
    this.styleSelect2img2 = ''
    this.styleSelect1img3 = ''
    this.styleSelect2img3 = ''
  }

  menos() {
    if (this.numero != 0) {
      this.numero--
    }
  }
  mas() {
    this.numero++
  }
  addCart() {
    if (this.numero != 0) {
      this.cantidadProducto = this.numero
      this.existenProductos = true
      this.valorProductos = this.cantidadProducto * 125.00
      this.notificacion = true

    }
  }
  mostrarTarjetaFuc() {
    if (this.mostrarTarjeta === true) {
      this.mostrarTarjeta = false
    } else {
      this.mostrarTarjeta = true
    }
  }
  eliminar() {
    this.cantidadProducto = 0
    this.existenProductos = false
    this.notificacion = false

  }
  MostrarPreview() {
    var screenWidth = screen.width
    if (screenWidth > 1280) {
      this.MostrarP = true
    }
  }
  CerrarPreview() {
    this.MostrarP = false
  }
  next() {
    if (this.imgSelect === '../assets/image-product-1.jpg') {
      this.img2()

    } else {
      if (this.imgSelect === '../assets/image-product-2.jpg') {
        this.img3()

      } else {
        if (this.imgSelect === '../assets/image-product-3.jpg') {
          this.img4()

        } else {
          if (this.imgSelect === '../assets/image-product-4.jpg') {
            this.img1()

          }
        }
      }
    }
  }
  back() {
    if (this.imgSelect === '../assets/image-product-4.jpg') {
      this.img3()
    } else {
      if (this.imgSelect === '../assets/image-product-3.jpg') {
        this.img2()

      } else {
        if (this.imgSelect === '../assets/image-product-2.jpg') {
          this.img1()

        } else {
          if (this.imgSelect === '../assets/image-product-1.jpg') {
            this.img4()

          }
        }
      }
    }
  }
}
