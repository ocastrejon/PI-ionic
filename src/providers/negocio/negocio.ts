import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Injectable()
export class NegocioProvider {

  constructor(public http: HttpClient) {
    console.log('Hello NegocioProvider Provider');
  }

  login(registro){
    var uri = "https://gmorentin.000webhostapp.com/login.php?correo=" + registro.correo
      + "&password=" + registro.password;
      var encoded = encodeURI(uri);
      return this.http.get(encoded);
  }

  registerUsuario(registro) {
    var uri = "https://gmorentin.000webhostapp.com/registrar.php?nombre=" + registro.nombre
      + "&direccion=" + registro.direccion
      + "&telefono=" + registro.telefono
      + "&correo=" + registro.correo
      + "&password=" + registro.contrasena;
    var encoded = encodeURI(uri);
    return this.http.get(encoded);
  }

  updateProducto(registro) {
    var uri = "https://gmorentin.000webhostapp.com/actualizarproducto.php?nombre=" + registro.nombre
      + "&cantidad=" + registro.cantidad
      + "&preciodeventa=" + registro.preciodeventa
      + "&preciodecosto=" + registro.preciodecosto
      + "&descripcion=" + registro.descripcion
      + "&fotografia=" + registro.fotografia
      + "&idproducto=" + registro.idproducto;
    var encoded = encodeURI(uri);
    return this.http.get(encoded);
  }

  putProducto(registro) {
    var uri = "https://gmorentin.000webhostapp.com/agregarproducto.php?nombre=" + registro.nombre
      + "&cantidad=" + registro.cantidad
      + "&preciodeventa=" + registro.preciodeventa
      + "&preciodecosto=" + registro.preciodecosto
      + "&descripcion=" + registro.descripcion
      + "&fotografia=" + registro.fotografia
      + "&idusuario=" + NavParams.prototype.data;
    var encoded = encodeURI(uri);
    return this.http.get(encoded);
  }


  deleteProducto(idproducto) {
    return this.http.get('https://gmorentin.000webhostapp.com/eliminarproducto.php?idproducto=' + idproducto);
  }

  getProductos() {
    return this.http.get('https://gmorentin.000webhostapp.com/listarproductos.php?idusuario='+NavParams.prototype.data);
  }

  deleteCliente(idcliente) {
    return this.http.get('https://gmorentin.000webhostapp.com/eliminarcliente.php?idcliente=' + idcliente);
  }

  getClientes() {
    return this.http.get('https://gmorentin.000webhostapp.com/listarclientes.php?idusuario='+NavParams.prototype.data);
  }

  putCliente(registro) {
    var uri = "https://gmorentin.000webhostapp.com/agregarcliente.php?nombre=" + registro.nombre
      + "&direccion=" + registro.direccion
      + "&telefono=" + registro.telefono
      + "&correo=" + registro.correo
      + "&fotografia=" + registro.fotografia
      + "&idusuario=" + NavParams.prototype.data;

    var encoded = encodeURI(uri);
    return this.http.get(encoded);
  }

  updateCliente(registro) {
    var uri = "https://gmorentin.000webhostapp.com/actualizarcliente.php?nombre=" + registro.nombre
      + "&direccion=" + registro.direccion
      + "&telefono=" + registro.telefono
      + "&correo=" + registro.correo
      + "&fotografia=" + registro.fotografia
      + "&idcliente=" + registro.idcliente;
    var encoded = encodeURI(uri);
    return this.http.get(encoded);
  }

  getVentas() {
    return this.http.get('https://gmorentin.000webhostapp.com/listarventas.php?idusuario='+NavParams.prototype.data);
  }

  deleteVenta(idventa) {
    return this.http.get('https://gmorentin.000webhostapp.com/eliminarventa.php?idventa=' + idventa);
  }

  putVenta(registro) {
    var uri = "https://gmorentin.000webhostapp.com/agregarventa.php?fecha=" + registro.fecha
      + "&idcliente=" + registro.idcliente
      + "&idproducto=" + registro.idproducto
      + "&tipo_venta=" + registro.tipo_venta
      + "&pagado=" + registro.pagado
      + "&idusuario=" + NavParams.prototype.data;

    var encoded = encodeURI(uri);
    return this.http.get(encoded);
  }

  updateVenta(registro) {
    var uri = "https://gmorentin.000webhostapp.com/actualizarventa.php?idventa=" + registro.idventa
    + "&fecha=" + registro.fecha
    + "&idcliente=" + registro.idcliente
    + "&idproducto=" + registro.idproducto
    + "&tipo_venta=" + registro.tipo_venta
    + "&pagado=" + registro.pagado
    + "&idusuario=" + NavParams.prototype.data;
    var encoded = encodeURI(uri);
    return this.http.get(encoded);
  }
}
