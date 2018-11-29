CREATE TABLE `usuarios`(
`idusuario` int NOT NULL AUTO_INCREMENT,
`nombre` varchar(50),
`direccion`varchar(50),
`telefono` int,
`correo`varchar(50),
`constrasena`varchar(50),
PRIMARY KEY(`idusuario`)
);

CREATE TABLE `productos`(
    `idproducto` int NOT NULL AUTO_INCREMENT,
    `nombre` varchar(50),
    `preciodeventa` int,
    `cantidad`int,
    `preciodecosto` int,
    `descripcion` varchar(200),
    `fotografia`  varchar(200),
    `idusuario` int,
    PRIMARY KEY(`idproducto`),

    FOREIGN KEY (`idusuario`)
    REFERENCES  usuarios (`idusuario`)
);

CREATE TABLE `clientes`(
    `idcliente` int NOT NULL AUTO_INCREMENT,
    `nombre` varchar(50),
    `direccion`varchar(50),
    `telefono` int,
    `correo`varchar(50),
    `fotografia`  varchar(200),
    `idusuario` int,
    PRIMARY KEY(`idcliente`),

    FOREIGN KEY (`idusuario`)
    REFERENCES  usuarios (`idusuario`)
);

CREATE TABLE `ventas`(
    `idventa` int NOT NULL AUTO_INCREMENT,
    `fecha` varchar(30),
    `idcliente` int,
    `idproducto` int,
    `fotografia`  varchar(200),
    `tipo_venta` varchar(200),
    `pagado` boolean,
    `idusuario` int,
    PRIMARY KEY (`idventa`),

    FOREIGN KEY (`idusuario`)
    REFERENCES  usuarios (`idusuario`),

    FOREIGN KEY (`idcliente`)
    REFERENCES  clientes (`idcliente`),

    FOREIGN KEY (`idproducto`)
    REFERENCES  productos (`idproducto`)
);

CREATE TABLE abonos(
    `idabono` int NOT NULL AUTO_INCREMENT,
    `cantidad`int,
    `idventa` int,
    `fotografia`  varchar(200),
    `idusuario` int,
    PRIMARY KEY (`idabono`),

    FOREIGN KEY (`idusuario`)
    REFERENCES  usuarios (`idusuario`),

    FOREIGN KEY (`idventa`)
    REFERENCES  ventas (`idventa`)
);