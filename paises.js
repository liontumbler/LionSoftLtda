class LionAyudas {
    #regexCorreo = /(^(([a-zA-Z0-9]{1,15}([\_\-\.]{0,1}[a-zA-Z0-9]{1,15}[\_\-\.]{0,1}){0,15}[a-zA-Z0-9]{1,15}){1,3}|[a-zA-Z0-9]{1,50})[@]{1,1}(([a-zA-Z0-9]{1,15}([\_\-\.]{0,1}[a-zA-Z0-9]{1,15}[\_\-\.]{0,1}){0,15}[a-zA-Z0-9]{1,15}){1,3}|[a-zA-Z0-9]{1,50})\.[a-zA-Z]{2,5}){1,1}$/g;
    #regexSoloLetras = /^[a-zA-ZÑñ]+/g;

    validarCorreo(value) {
        let valido = false;
        if(this.#regexCorreo.test(value))
            valido = true;

        return valido;
    }

    validarSoloLetras(value) {
        let valido = false;
        if(this.#regexSoloLetras.test(value))
            valido = true;

        return valido;
    }

    validarCadenaAlfaNumerica(value) {
        let valido = false;
        if(value && isNaN(value))
            valido = true;

        return valido;
    }

    validarSoloNumeros(value) {
        let valido = false;
        if(!isNaN(value))
            valido = true;

        return valido;
    }

    normalizarText(cadena) {
        let cadenaRetorno = cadena.toLowerCase().replace(/[á|à|â|ä|ã|å]/g, 'a');
        cadenaRetorno = cadenaRetorno.replace(/[é|è|ê|ë]/g, 'e');
        cadenaRetorno = cadenaRetorno.replace(/[í|ì|î|ï]/g, 'i');
        cadenaRetorno = cadenaRetorno.replace(/[ó|ò|ô|õ|ö]/g, 'o');
        cadenaRetorno = cadenaRetorno.replace(/[ú|ù|û|ü]/g, 'u');
        cadenaRetorno = cadenaRetorno.replace(/[ý|ÿ]/g, 'y');

        return cadenaRetorno;
    }
}

export class Paises extends LionAyudas {

    #Afganistán = {
        Kabul: {
            codigoPostal: ''
        }
    }

    //ASIA
    //América del norte
    //América central
    //América del sur
    //ÁFRICA
    //ANTÁRTIDA
    //EUROPA
    //OCEANÍA

    #paises = {
        Afganistán: {
            continente: '',
            codigoPais: '013',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Albania: {
            continente: '',
            codigoPais: '017',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Alemania: {
            continente: '',
            codigoPais: '023',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Andorra: {
            continente: '',
            codigoPais: '037',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Angola: {
            continente: '',
            codigoPais: '040',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        'Antigua y Barbuda': {
            continente: '',
            codigoPais: '043',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        'Arabia Saudita': {
            continente: '',
            codigoPais: '053',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Argelia: {
            continente: '',
            codigoPais: '059',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Argentina: {
            continente: 'América del sur',
            codigoPais: '063',
            abreviatura: '',
            ciudades: {
                'Buenos Aires': {
                    codigoPostal: 'B1406'
                },
                Córdoba: {
                    codigoPostal: 'B5000'
                },
                Rosario: {
                    codigoPostal: 'S2000'
                },
                'Mar del Plata': {
                    codigoPostal: 'B7600'
                },
                'San Miguel de Tucumán': {
                    codigoPostal: 'T4000'
                },
                Salta: {
                    codigoPostal: 'A4400'
                },
                'Santa Fe': {
                    codigoPostal: 'S2013'
                },
                Corrientes: {
                    codigoPostal: 'W3197'
                },
                'Bahía Blanca': {
                    codigoPostal: 'B7511'
                },
                Resistencia: {
                    codigoPostal: 'A3500'
                },
                Posadas: {
                    codigoPostal: 'N3300'
                },
                Merlo: {
                    codigoPostal: 'B1718'
                },
                Quilmes: {
                    codigoPostal: 'B1818'
                },
                'San Salvador de Jujuy': {
                    codigoPostal: 'Y4600'
                },
                Guaymallén: {
                    codigoPostal: 'M5521'
                },
                'Santiago del Estero': {
                    codigoPostal: 'G4200'
                },
                'Gregorio de Laferrere': {
                    codigoPostal: 'B1747'
                },
                'José Clemente Paz': {
                    codigoPostal: 'B1156'
                },
                Paraná: {
                    codigoPostal: 'E3100'
                },
                Banfield: {
                    codigoPostal: 'B1825'
                },
                'González Catán': {
                    codigoPostal: 'B1758'
                },
                Neuquén: {
                    codigoPostal: 'N8300'
                },
                Formosa: {
                    codigoPostal: 'P3600'
                },
                Lanús: {
                    codigoPostal: 'B1625'
                },
                'La Plata': {
                    codigoPostal: 'B1900'
                },
                'Godoy Cruz': {
                    codigoPostal: 'M5501'
                },
                'Isidro Casanova': {
                    codigoPostal: 'B1755'
                },
                'Las Heras': {
                    codigoPostal: 'M5502'
                },
                Berazategui: {
                    codigoPostal: 'B1880'
                },
                'La Rioja': {
                    codigoPostal: 'F5300'
                },
                'Comodoro Rivadavia': {
                    codigoPostal: 'U9000'
                },
                Moreno: {
                    codigoPostal: 'B1738'
                },
                'San Luis': {
                    codigoPostal: 'D5700'
                },
                'San Miguel': {
                    codigoPostal: 'B1613'
                },
                'San Fernando del Valle de Catamarca': {
                    codigoPostal: 'K4700'
                },
                'Río Cuarto': {
                    codigoPostal: 'X5800'
                },
                'Virrey del Pino': {
                    codigoPostal: 'B1067'
                },
                'Ciudad de Santiago del Estero': {
                    codigoPostal: ''
                },
                Trelew: {
                    codigoPostal: ''
                },
                'Bell Ville': {
                    codigoPostal: ''
                },
                Tandil: {
                    codigoPostal: ''
                },
                'San Francisco': {
                    codigoPostal: ''
                },
                Pinamar: {
                    codigoPostal: ''
                },
                Azul: {
                    codigoPostal: ''
                },
                'Ciudad de Santa Rosa': {
                    codigoPostal: ''
                },
                Balcarce: {
                    codigoPostal: ''
                },
                'San Antonio de Areco': {
                    codigoPostal: ''
                },
                Rawson: {
                    codigoPostal: ''
                },
                'Río Gallegos': {
                    codigoPostal: ''
                },
                'San Carlos de Bariloche': {
                    codigoPostal: ''
                },
                Ushuaia: {
                    codigoPostal: ''
                },
                Mendoza: {
                    codigoPostal: ''
                },
                'San Juan': {
                    codigoPostal: ''
                }
            }
        },
        Armenia: {
            continente: '',
            codigoPais: '026',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Australia: {
            continente: '',
            codigoPais: '069',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Austria: {
            continente: '',
            codigoPais: '072',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Azerbaiyán: {
            continente: '',
            codigoPais: '074',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Bahamas: {
            continente: '',
            codigoPais: '077',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Bangladesh: {
            continente: '',
            codigoPais: '081',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Barbados: {
            continente: '',
            codigoPais: '083',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        'Bahréin (Baréin)': {
            continente: '',
            codigoPais: '080',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Bélgica: {
            continente: '',
            codigoPais: '087',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Belice: {
            continente: 'América central',
            codigoPais: '088',
            abreviatura: '',
            ciudades: {
                'Ciudad de Belice': {
                    codigoPostal: ''
                },
                Belmopán: {
                    codigoPostal: ''
                },
                'San Ignacio': {
                    codigoPostal: ''
                },
                Dangriga: {
                    codigoPostal: ''
                },
                'Orange Walk': {
                    codigoPostal: ''
                },
                'Punta Gorda': {
                    codigoPostal: ''
                },
                'San Pedro': {
                    codigoPostal: ''
                },
                Corozal: {
                    codigoPostal: ''
                },
                Placencia: {
                    codigoPostal: ''
                },
                'Rock Stone Pond': {
                    codigoPostal: ''
                },
                'Benque Viejo del Carmen': {
                    codigoPostal: ''
                },
                'Valley of Peace': {
                    codigoPostal: ''
                },
                'San Pedro Columbia': {
                    codigoPostal: ''
                },
                Shipyard: {
                    codigoPostal: ''
                },
                Hopkins: {
                    codigoPostal: ''
                },
                'Crooked Tree': {
                    codigoPostal: ''
                },
                Ladyville: {
                    codigoPostal: ''
                },
                Hattieville: {
                    codigoPostal: ''
                },
                'Bermudian Landing': {
                    codigoPostal: ''
                },
                'Gales Point': {
                    codigoPostal: ''
                },
                'Mango Creek': {
                    codigoPostal: ''
                },
                Lemonal: {
                    codigoPostal: ''
                },
                'La Democracia': {
                    codigoPostal: ''
                }
            }
        },
        Benín: {
            continente: '',
            codigoPais: '229',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Bielorrusia: {//TODO: mirar este no tiene codigo
            continente: '',
            codigoPais: '',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        'Birmania/Myanmar': {
            continente: '',
            codigoPais: '093',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Bolivia: {
            continente: 'América del sur',
            codigoPais: '097',
            abreviatura: '',
            ciudades: {
                'La Paz': {
                    codigoPostal: ''
                },
                'Santa Cruz de la Sierra': {
                    codigoPostal: ''
                },
                Cochabamba: {
                    codigoPostal: ''
                },
                'Villa Imperial de Potosí': {
                    codigoPostal: ''
                },
                Sucre: {
                    codigoPostal: ''
                },
                'El Alto': {
                    codigoPostal: ''
                },
                Tarija: {
                    codigoPostal: ''
                },
                Oruro: {
                    codigoPostal: ''
                },
                Trinidad: {
                    codigoPostal: ''
                },
                Cobija: {
                    codigoPostal: ''
                },
                Viacha: {
                    codigoPostal: ''
                },
                Quillacollo: {
                    codigoPostal: ''
                },
                Sacaba: {
                    codigoPostal: ''
                },
                Colcapirhua: {
                    codigoPostal: ''
                },
                'La Guardia': {
                    codigoPostal: ''
                },
                Riberalta: {
                    codigoPostal: ''
                },
                Montero: {
                    codigoPostal: ''
                },
                Warnes: {
                    codigoPostal: ''
                },
                Yacuíba: {
                    codigoPostal: ''
                },
                Villazón: {
                    codigoPostal: ''
                },
                Tupiza: {
                    codigoPostal: ''
                },
                Llallagua: {
                    codigoPostal: ''
                },
                Challapata: {
                    codigoPostal: ''
                },
                Patacamaya: {
                    codigoPostal: ''
                },
                Huanuni: {
                    codigoPostal: ''
                },
                Vinto: {
                    codigoPostal: ''
                },
                Uyuni: {
                    codigoPostal: ''
                },
                Punata: {
                    codigoPostal: ''
                },
                Sipesipe: {
                    codigoPostal: ''
                },
                Tiquipaya: {
                    codigoPostal: ''
                },
                Guayaramerin: {
                    codigoPostal: ''
                },
                Caranavi: {
                    codigoPostal: ''
                },
                'San José de Chiquitos': {
                    codigoPostal: ''
                },
                Achacachi: {
                    codigoPostal: ''
                },
                'San Ignacio': {
                    codigoPostal: ''
                },
                Camiri: {
                    codigoPostal: ''
                },
                'Villa Yapacaní': {
                    codigoPostal: ''
                },
                Rurrenabaque: {
                    codigoPostal: ''
                },
                Cliza: {
                    codigoPostal: ''
                },
                Vallegrande: {
                    codigoPostal: ''
                },
                'Departamento de Oruro': {
                    codigoPostal: ''
                },
                'Cuatro Cañadas': {
                    codigoPostal: ''
                },
                Mineros: {
                    codigoPostal: ''
                },
                Concepción: {
                    codigoPostal: ''
                },
                'Puerto Suárez': {
                    codigoPostal: ''
                },
                'Ascensión de Guarayos': {
                    codigoPostal: ''
                },
                Roboré: {
                    codigoPostal: ''
                },
                Portachuelo: {
                    codigoPostal: ''
                },
                Chimore: {
                    codigoPostal: ''
                },
                'Santa Ana del Yacuma': {
                    codigoPostal: ''
                },
                'San Ignacio de Moxos': {
                    codigoPostal: ''
                }
            } 
        },
        'Bosnia y Herzegovina': {
            continente: '',
            codigoPais: '029',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Botsuana: {
            continente: '',
            codigoPais: '101',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Brasil: {
            continente: 'América del sur',
            codigoPais: '105',
            abreviatura: '',
            ciudades: {
                'Río de Janeiro': {
                    codigoPostal: ''
                },
                Brasilia: {
                    codigoPostal: ''
                },
                'São Paulo': {
                    codigoPostal: ''
                },
                'Salvador de Bahía': {
                    codigoPostal: ''
                },
                Fortaleza: {
                    codigoPostal: ''
                },
                Manaos: {
                    codigoPostal: ''
                },
                'Belo Horizonte': {
                    codigoPostal: ''
                },
                Recife: {
                    codigoPostal: ''
                },
                Curitiba: {
                    codigoPostal: ''
                },
                'Porto Alegre': {
                    codigoPostal: ''
                },
                Natal: {
                    codigoPostal: ''
                },
                Goiânia: {
                    codigoPostal: ''
                },
                Florianópolis: {
                    codigoPostal: ''
                },
                'São Luís': {
                    codigoPostal: ''
                },
                Belén: {
                    codigoPostal: ''
                },
                Cuiabá: {
                    codigoPostal: ''
                },
                Guarulhos: {
                    codigoPostal: ''
                },
                Maceió: {
                    codigoPostal: ''
                },
                'Campo Grande': {
                    codigoPostal: ''
                },
                Belém: {
                    codigoPostal: ''
                },
                'João Pessoa': {
                    codigoPostal: ''
                },
                Aracajú: {
                    codigoPostal: ''
                },
                Teresina: {
                    codigoPostal: ''
                },
                'Boa Vista': {
                    codigoPostal: ''
                },
                Macapá: {
                    codigoPostal: ''
                },
                Campinas: {
                    codigoPostal: ''
                },
                Vitória: {
                    codigoPostal: ''
                },
                'Porto Velho': {
                    codigoPostal: ''
                },
                Palmas: {
                    codigoPostal: ''
                },
                'Rio Branco': {
                    codigoPostal: ''
                },
                Búzios: {
                    codigoPostal: ''
                },
                'Duque de Caxias': {
                    codigoPostal: ''
                },
                Gramado: {
                    codigoPostal: ''
                },
                Jericoacoara: {
                    codigoPostal: ''
                },
                'São Gonçalo': {
                    codigoPostal: ''
                },
                'Morro de Sao Paulo': {
                    codigoPostal: ''
                },
                Barcelos: {
                    codigoPostal: ''
                },
                'Atalaia do Norte': {
                    codigoPostal: ''
                },
                Jutaí: {
                    codigoPostal: ''
                },
                Tapauá: {
                    codigoPostal: ''
                },
                Almeirim: {
                    codigoPostal: ''
                },
                'Nova Iguaçu': {
                    codigoPostal: ''
                },
                'São José dos Campos': {
                    codigoPostal: ''
                },
                Altamira: {
                    codigoPostal: ''
                },
                Oriximiná: {
                    codigoPostal: ''
                },
                'São Gabriel da Cachoeira': {
                    codigoPostal: ''
                },
                Lábrea: {
                    codigoPostal: ''
                },
                'Foz do Iguaçu': {
                    codigoPostal: ''
                },
                'Ribeirão Preto': {
                    codigoPostal: ''
                },
                'Ouro Preto': {
                    codigoPostal: ''
                },
                Paranaguá: {
                    codigoPostal: ''
                }
            }
        },
        Brunéi: {
            continente: '',
            codigoPais: '108',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Bulgaria: {
            continente: '',
            codigoPais: '111',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        'Burkina Faso': {
            continente: '',
            codigoPais: '031',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Burundi: {
            continente: '',
            codigoPais: '115',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Bután: {
            continente: '',
            codigoPais: '119',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        'Cabo Verde': {
            continente: '',
            codigoPais: '127',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Camboya: {
            continente: '',
            codigoPais: '141',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Camerún: {
            continente: '',
            codigoPais: '145',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Canadá: {
            continente: '',
            codigoPais: '149',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Catar: {//TODO: mirar este no tiene codigo
            continente: '',
            codigoPais: '',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Chad: {
            continente: '',
            codigoPais: '203',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Chile: {
            continente: 'América del sur',
            codigoPais: '211',
            abreviatura: '',
            ciudades: {
                'Santiago de Chile': {
                    codigoPostal: ''
                },
                Iquique: {
                    codigoPostal: ''
                },
                'Punta Arenas': {
                    codigoPostal: ''
                },
                'Puerto Montt': {
                    codigoPostal: ''
                },
                'Viña del Mar': {
                    codigoPostal: ''
                },
                Antofagasta: {
                    codigoPostal: ''
                },
                Arica: {
                    codigoPostal: ''
                },
                'Puerto Varas': {
                    codigoPostal: ''
                },
                Valparaíso: {
                    codigoPostal: ''
                },
                Rancagua: {
                    codigoPostal: ''
                },
                Concepción: {
                    codigoPostal: ''
                },
                Coyhaique: {
                    codigoPostal: ''
                },
                'La Serena': {
                    codigoPostal: ''
                },
                Ovalle: {
                    codigoPostal: ''
                },
                Valdivia: {
                    codigoPostal: ''
                },
                'Puerto Natales': {
                    codigoPostal: ''
                },
                Copiapó: {
                    codigoPostal: ''
                },
                Temuco: {
                    codigoPostal: ''
                },
                Vallenar: {
                    codigoPostal: ''
                },
                Taltal: {
                    codigoPostal: ''
                },
                Talca: {
                    codigoPostal: ''
                },
                'Gran Valparaíso': {
                    codigoPostal: ''
                },
                Calama: {
                    codigoPostal: ''
                },
                Coquimbo: {
                    codigoPostal: ''
                },
                'San Antonio': {
                    codigoPostal: ''
                },
                Pucon: {
                    codigoPostal: ''
                },
                Vicuña: {
                    codigoPostal: ''
                },
                'San Felipe': {
                    codigoPostal: ''
                },
                Curicó: {
                    codigoPostal: ''
                },
                Pumanque: {
                    codigoPostal: ''
                },
                'Pozo Almonte': {
                    codigoPostal: ''
                },
                'San Fernando': {
                    codigoPostal: ''
                },
                'Santa Cruz': {
                    codigoPostal: ''
                },
                'Santo Domingo': {
                    codigoPostal: ''
                },
                'Los Angeles': {
                    codigoPostal: ''
                },
                Quillota: {
                    codigoPostal: ''
                },
                Quintero: {
                    codigoPostal: ''
                },
                Rengo: {
                    codigoPostal: ''
                },
                Chillán: {
                    codigoPostal: ''
                },
                Quilpué: {
                    codigoPostal: ''
                },
                'Villa Alemana': {
                    codigoPostal: ''
                },
                Palmilla: {
                    codigoPostal: ''
                },
                'Tierra Amarilla': {
                    codigoPostal: ''
                },
                'San Esteban': {
                    codigoPostal: ''
                },
                Linares: {
                    codigoPostal: ''
                },
                Putaendo: {
                    codigoPostal: ''
                },
                'San Pedro de Atacama': {
                    codigoPostal: ''
                },
                Puchuncavi: {
                    codigoPostal: ''
                },
                Talcahuano: {
                    codigoPostal: ''
                },
                Castro: {
                    codigoPostal: ''
                }
            }
        },
        China: {
            continente: '',
            codigoPais: '215',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Chipre: {
            continente: '',
            codigoPais: '221',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        'Ciudad del Vaticano': {//TODO: mirar este no tiene codigo
            continente: '',
            codigoPais: '',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Colombia: {
            continente: 'América del sur',
            codigoPais: '169',
            abreviatura: 'CO',
            prefijo: '+57',
            ciudades: {
                Arauca: {
                    codigoPostal: '810001'
                },
                Armenia: {
                    codigoPostal: '630001'
                },
                Apartadó: {
                    codigoPostal: ''
                },
                Aguachica: {
                    codigoPostal: ''
                },
                Bucaramanga: {
                    codigoPostal: '680001'
                },
                Barrancabermeja: {
                    codigoPostal: ''
                },
                Barranquilla: {
                    codigoPostal: '080001'
                },
                Bogotá: {
                    codigoPostal: '110110'
                },
                Buga: {
                    codigoPostal: ''
                },
                Buenaventura: {
                    codigoPostal: ''
                },
                Cartago: {
                    codigoPostal: ''
                },
                Caucasia: {
                    codigoPostal: ''
                },
                Cali: {
                    codigoPostal: '760000'
                },
                Ciénaga: {
                    codigoPostal: ''
                },
                Cúcuta: {
                    codigoPostal: '540001'
                },
                Cartagena: {
                    codigoPostal: '130001'
                },
                Duitama: {
                    codigoPostal: ''
                },
                'El Espinal': {
                    codigoPostal: ''
                },
                'El Carmen de Bolívar': {
                    codigoPostal: ''
                },
                Facatativá: {
                    codigoPostal: ''
                },
                Fusagasugá: {
                    codigoPostal: ''
                },
                Florencia: {
                    codigoPostal: '180001'
                },
                Girardot: {
                    codigoPostal: ''
                },
                Inírida: {
                    codigoPostal: ''
                },
                Ipiales: {
                    codigoPostal: ''
                },
                Ibagué: {
                    codigoPostal: '730001'
                },
                Leticia: {
                    codigoPostal: '910001'
                },
                Lorica: {
                    codigoPostal: ''
                },
                Magangué: {
                    codigoPostal: ''
                },
                Maicao: {
                    codigoPostal: ''
                },
                Manizales: {
                    codigoPostal: '170001'
                },
                Medellín: {
                    codigoPostal: '050001'
                },
                Mitú: {
                    codigoPostal: '970001'
                },
                Mocoa: {
                    codigoPostal: '860001'
                },
                Montería: {
                    codigoPostal: '230001'
                },
                Montelíbano: {
                    codigoPostal: ''
                },
                Neiva: {
                    codigoPostal: '410001'
                },
                Ocaña: {
                    codigoPostal: ''
                },
                Palmira: {
                    codigoPostal: ''
                },
                Pamplona: {
                    codigoPostal: ''
                },
                Pasto: {
                    codigoPostal: '520001'
                },
                Pereira: {
                    codigoPostal: '660000'
                },
                Pitalito: {
                    codigoPostal: ''
                },
                Popayán: {
                    codigoPostal: '190001'
                },
                'Puerto Carreño': {
                    codigoPostal: '990001'
                },
                'Puerto Asís': {
                    codigoPostal: ''
                },
                Quibdó: {
                    codigoPostal: '270001'
                },
                Riohacha: {
                    codigoPostal: '440001'
                },
                Rionegro: {
                    codigoPostal: ''
                },
                Sabanalarga: {
                    codigoPostal: ''
                },
                'Santander de Quilichao': {
                    codigoPostal: ''
                },
                'San Andrés Isla': {
                    codigoPostal: ''
                },
                'San Andrés': {
                    codigoPostal: '880001'
                },
                'San Gil': {
                    codigoPostal: ''
                },
                'San José del Guaviare': {
                    codigoPostal: '950001'
                },
                'Santa Marta': {
                    codigoPostal: '470001'
                },
                Sincelejo: {
                    codigoPostal: '250251'
                },
                Sogamoso: {
                    codigoPostal: ''
                },
                Tunja: {
                    codigoPostal: '150001'
                },
                Tumaco: {
                    codigoPostal: ''
                },
                Tuluá: {
                    codigoPostal: ''
                },
                Turbo: {
                    codigoPostal: ''
                },
                Valledupar: {
                    codigoPostal: '200001'
                },
                Villavicencio: {
                    codigoPostal: '500001'
                },
                Yopal: {
                    codigoPostal: '850001'
                },
                Zipaquirá: {
                    codigoPostal: ''
                }
            }
        },
        Comoras: {
            continente: '',
            codigoPais: '173',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        'Corea del Norte': {
            continente: '',
            codigoPais: '187',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        'Corea del Sur': {
            continente: '',
            codigoPais: '190',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        'Costa de Marfil': {
            continente: '',
            codigoPais: '193',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        'Costa Rica': {
            continente: 'América central',
            codigoPais: '196',
            abreviatura: '',
            ciudades: {
                'San José': {
                    codigoPostal: ''
                },
                Cartago: {
                    codigoPostal: ''
                },
                Puntarenas: {
                    codigoPostal: ''
                },
                Liberia: {
                    codigoPostal: ''
                },
                Heredia: {
                    codigoPostal: ''
                },
                Limón: {
                    codigoPostal: ''
                },
                Alajuela: {
                    codigoPostal: ''
                },
                Golfito: {
                    codigoPostal: ''
                },
                Quepos: {
                    codigoPostal: ''
                },
                Zarcero: {
                    codigoPostal: ''
                },
                Atenas: {
                    codigoPostal: ''
                },
                'Playa Montezuma': {
                    codigoPostal: ''
                },
                'Puerto Viejo': {
                    codigoPostal: ''
                },
                Escazú: {
                    codigoPostal: ''
                },
                Turrialba: {
                    codigoPostal: ''
                },
                Tortuguero: {
                    codigoPostal: ''
                },
                'Ciudad Quesada': {
                    codigoPostal: ''
                },
                Cahuita: {
                    codigoPostal: ''
                },
                Nicoya: {
                    codigoPostal: ''
                },
                Curridabat: {
                    codigoPostal: ''
                },
                'San Vicente': {
                    codigoPostal: ''
                },
                Monteverde: {
                    codigoPostal: ''
                },
                'San Pedro': {
                    codigoPostal: ''
                },
                Cabuya: {
                    codigoPostal: ''
                },
                Barva: {
                    codigoPostal: ''
                },
                'Dos Brazos': {
                    codigoPostal: ''
                },
                'Cantón de Buenos Aires': {
                    codigoPostal: ''
                },
                'Las Catalinas': {
                    codigoPostal: ''
                },
                Jacó: {
                    codigoPostal: ''
                },
                Carrillos: {
                    codigoPostal: ''
                }
            }
        },
        Croacia: {
            continente: '',
            codigoPais: '198',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Cuba: {
            continente: '',
            codigoPais: '199',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Dinamarca: {
            continente: '',
            codigoPais: '232',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Dominica: {
            continente: '',
            codigoPais: '235',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Ecuador: {
            continente: 'América del sur',
            codigoPais: '239',
            abreviatura: '',
            ciudades: {
                Quito: {
                    codigoPostal: ''
                },
                Guayaquil: {
                    codigoPostal: ''
                },
                Cuenca: {
                    codigoPostal: ''
                },
                Ambato: {
                    codigoPostal: ''
                },
                Manta: {
                    codigoPostal: ''
                },
                Ibarra: {
                    codigoPostal: ''
                },
                Machala: {
                    codigoPostal: ''
                },
                Loja: {
                    codigoPostal: ''
                },
                Latacunga: {
                    codigoPostal: ''
                },
                Portoviejo: {
                    codigoPostal: ''
                },
                Tulcán: {
                    codigoPostal: ''
                },
                'Santo Domingo': {
                    codigoPostal: ''
                },
                Quevedo: {
                    codigoPostal: ''
                },
                Babahoyo: {
                    codigoPostal: ''
                },
                Esmeraldas: {
                    codigoPostal: ''
                },
                Duran: {
                    codigoPostal: ''
                },
                Tena: {
                    codigoPostal: ''
                },
                Otavalo: {
                    codigoPostal: ''
                },
                'Baños de Agua Santa': {
                    codigoPostal: ''
                },
                'Nueva Loja': {
                    codigoPostal: ''
                },
                'La Libertad': {
                    codigoPostal: ''
                },
                Puyo: {
                    codigoPostal: ''
                },
                Milagro: {
                    codigoPostal: ''
                },
                Chimborazo: {
                    codigoPostal: ''
                },
                Huaquillas: {
                    codigoPostal: ''
                },
                Guaranda: {
                    codigoPostal: ''
                },
                'Francisco de Orellana': {
                    codigoPostal: ''
                },
                Daule: {
                    codigoPostal: ''
                },
                Sangolquí: {
                    codigoPostal: ''
                },
                Samborondón: {
                    codigoPostal: ''
                },
                Sucumbíos: {
                    codigoPostal: ''
                },
                Montecristi: {
                    codigoPostal: ''
                },
                Chone: {
                    codigoPostal: ''
                },
                'El Carmen': {
                    codigoPostal: ''
                },
                'Santa Rosa': {
                    codigoPostal: ''
                },
                'Morona-Santiago': {
                    codigoPostal: ''
                },
                'Los Ríos': {
                    codigoPostal: ''
                },
                Huigra: {
                    codigoPostal: ''
                },
                Pastaza: {
                    codigoPostal: ''
                },
                Pasaje: {
                    codigoPostal: ''
                },
                'Caja bamba': {
                    codigoPostal: ''
                },
                Cañar: {
                    codigoPostal: ''
                },
                Mocha: {
                    codigoPostal: ''
                },
                Tisaleo: {
                    codigoPostal: ''
                },
                Zamora: {
                    codigoPostal: ''
                },
                Azogues: {
                    codigoPostal: ''
                },
                'Santo Domingo de los Tsáchilas': {
                    codigoPostal: ''
                },
                Quinindé: {
                    codigoPostal: ''
                },
                Macas: {
                    codigoPostal: ''
                },
                Yantzaza: {
                    codigoPostal: ''
                },
                Vilcabamba: {
                    codigoPostal: ''
                }
            }
        },
        Egipto: {
            continente: '',
            codigoPais: '240',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        'El Salvador': {
            continente: 'América central',
            codigoPais: '242',
            abreviatura: '',
            ciudades: {
                'San Salvador': {
                    codigoPostal: ''
                },
                'Santa Ana': {
                    codigoPostal: ''
                },
                'San Miguel': {
                    codigoPostal: ''
                },
                Ahuachapán: {
                    codigoPostal: ''
                },
                Sonsonate: {
                    codigoPostal: ''
                },
                'San Vicente': {
                    codigoPostal: ''
                },
                'La Unión': {
                    codigoPostal: ''
                },
                'Santa Tecla': {
                    codigoPostal: ''
                },
                Soyapango: {
                    codigoPostal: ''
                },
                Mejicanos: {
                    codigoPostal: ''
                },
                Apopa: {
                    codigoPostal: ''
                },
                Usulután: {
                    codigoPostal: ''
                },
                Chalatenango: {
                    codigoPostal: ''
                },
                Delgado: {
                    codigoPostal: ''
                },
                Suchitoto: {
                    codigoPostal: ''
                },
                Jujutla: {
                    codigoPostal: ''
                },
                Ilopango: {
                    codigoPostal: ''
                },
                'San Marcos': {
                    codigoPostal: ''
                },
                'Antiguo Cuscatlán': {
                    codigoPostal: ''
                },
                Zacatecoluca: {
                    codigoPostal: ''
                },
                Cojutepeque: {
                    codigoPostal: ''
                },
                Apaneca: {
                    codigoPostal: ''
                },
                'San Martín': {
                    codigoPostal: ''
                },
                Jiquilisco: {
                    codigoPostal: ''
                },
                'Ciudad Arce': {
                    codigoPostal: ''
                },
                Metapán: {
                    codigoPostal: ''
                },
                Cuscatancingo: {
                    codigoPostal: ''
                },
                Tamanique: {
                    codigoPostal: ''
                },
                Tonacatepeque: {
                    codigoPostal: ''
                },
                Tacuba: {
                    codigoPostal: ''
                },
                Cinquera: {
                    codigoPostal: ''
                },
                Chalchuapa: {
                    codigoPostal: ''
                },
                Quezaltepeque: {
                    codigoPostal: ''
                },
                'San Bartolomé Perulapía': {
                    codigoPostal: ''
                },
                Izalco: {
                    codigoPostal: ''
                },
                Acajutla: {
                    codigoPostal: ''
                },
                'Santiago Nonualco': {
                    codigoPostal: ''
                },
                Polorós: {
                    codigoPostal: ''
                },
                'Ojos de Agua': {
                    codigoPostal: ''
                },
                Sensuntepeque: {
                    codigoPostal: ''
                },
                'San Ignacio': {
                    codigoPostal: ''
                },
                'San Juan Opico': {
                    codigoPostal: ''
                },
                'Ciudad Barrios': {
                    codigoPostal: ''
                },
                Nahuizalco: {
                    codigoPostal: ''
                },
                Ayutuxtepeque: {
                    codigoPostal: ''
                },
                'La Libertad': {
                    codigoPostal: ''
                },
                'San Antonio de La Cruz': {
                    codigoPostal: ''
                },
                Chirilagua: {
                    codigoPostal: ''
                },
                Conchagua: {
                    codigoPostal: ''
                },
                'Concepción de Ataco': {
                    codigoPostal: ''
                },
                Atiquizaya: {
                    codigoPostal: ''
                }
            }
        },
        'Emiratos Árabes Unidos': {
            continente: '',
            codigoPais: '244',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Eritrea: {
            continente: '',
            codigoPais: '243',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Eslovaquia: {
            continente: '',
            codigoPais: '246',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Eslovenia: {
            continente: '',
            codigoPais: '247',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        España: {
            continente: '',
            codigoPais: '245',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        'Estados Unidos': {
            continente: '',
            codigoPais: '249',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Estonia: {
            continente: '',
            codigoPais: '251',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Etiopía: {
            continente: '',
            codigoPais: '253',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Filipinas: {
            continente: '',
            codigoPais: '267',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Finlandia: {
            continente: '',
            codigoPais: '271',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Fiyi: {
            continente: '',
            codigoPais: '870',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Francia: {
            continente: '',
            codigoPais: '275',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Gabón: {
            continente: '',
            codigoPais: '281',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Gambia: {
            continente: '',
            codigoPais: '285',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Georgia: {
            continente: '',
            codigoPais: '287',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Ghana: {
            continente: '',
            codigoPais: '289',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Granada: {
            continente: '',
            codigoPais: '297',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Grecia: {
            continente: '',
            codigoPais: '301',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Guatemala: {
            continente: 'América central',
            codigoPais: '317',
            abreviatura: '',
            ciudades: {
                'Ciudad de Guatemala': {
                    codigoPostal: ''
                },
                Quezaltenango: {
                    codigoPostal: ''
                },
                Antigua : {
                    codigoPostal: ''
                },
                'Villa Nueva': {
                    codigoPostal: ''
                },
                Mixco: {
                    codigoPostal: ''
                },
                Escuintla: {
                    codigoPostal: ''
                },
                Amatitlán: {
                    codigoPostal: ''
                },
                'Puerto Barrios': {
                    codigoPostal: ''
                },
                Cobán: {
                    codigoPostal: ''
                },
                Retalhuleu: {
                    codigoPostal: ''
                },
                'Santa Catarina Pinula': {
                    codigoPostal: ''
                },
                'San Raymundo': {
                    codigoPostal: ''
                },
                Fraijanes: {
                    codigoPostal: ''
                },
                Flores: {
                    codigoPostal: ''
                },
                Jalapa: {
                    codigoPostal: ''
                },
                Totonicapán: {
                    codigoPostal: ''
                },
                Mazatenango: {
                    codigoPostal: ''
                },
                Huehuetenango: {
                    codigoPostal: ''
                },
                Salcajá: {
                    codigoPostal: ''
                },
                Jocotenango: {
                    codigoPostal: ''
                },
                'San Bartolomé Milpas Altas': {
                    codigoPostal: ''
                },
                'Santa Lucía Milpas Altas': {
                    codigoPostal: ''
                },
                Chichicastenango: {
                    codigoPostal: ''
                },
                Chimaltenango: {
                    codigoPostal: ''
                },
                'San Marcos': {
                    codigoPostal: ''
                },
                Quetzaltenango: {
                    codigoPostal: ''
                },
                Momostenango: {
                    codigoPostal: ''
                },
                'San Pedro Carchá': {
                    codigoPostal: ''
                },
                'Alta Verapaz': {
                    codigoPostal: ''
                },
                Chiquimula: {
                    codigoPostal: ''
                },
                Jutiapa: {
                    codigoPostal: ''
                },
                Quiché: {
                    codigoPostal: ''
                },
                Sololá: {
                    codigoPostal: ''
                },
                Petén: {
                    codigoPostal: ''
                },
                Izabal: {
                    codigoPostal: ''
                },
                Zacapa: {
                    codigoPostal: ''
                },
                'Santa Cruz del Quiché': {
                    codigoPostal: ''
                },
                Barillas: {
                    codigoPostal: ''
                },
                Ixcán: {
                    codigoPostal: ''
                },
                Senahú: {
                    codigoPostal: ''
                },
                Chisec: {
                    codigoPostal: ''
                },
                Joyabaj: {
                    codigoPostal: ''
                },
                Tecpán: {
                    codigoPostal: ''
                },
                Sayaxché: {
                    codigoPostal: ''
                },
                Chiantla: {
                    codigoPostal: ''
                },
                Palencia: {
                    codigoPostal: ''
                },
                'San Pedro Ayampuc': {
                    codigoPostal: ''
                },
                'Santa Rosa': {
                    codigoPostal: ''
                },
                Salamá: {
                    codigoPostal: ''
                }
            }
        },
        Guyana: {
            continente: 'América del sur',
            codigoPais: '337',
            abreviatura: '',
            ciudades: {
                'Georgetown': {
                    codigoPostal: ''
                },
                Linden: {
                    codigoPostal: ''
                },
                'Nueva Ámsterdam': {
                    codigoPostal: ''
                },
                'Anna Regina': {
                    codigoPostal: ''
                },
                Bartica: {
                    codigoPostal: ''
                },
                Skeldon: {
                    codigoPostal: ''
                },
                Rosignol: {
                    codigoPostal: ''
                },
                'Rose Hall': {
                    codigoPostal: ''
                },
                Ituni: {
                    codigoPostal: ''
                },
                'Fort Wellington': {
                    codigoPostal: ''
                },
                Paradise: {
                    codigoPostal: ''
                },
                Caridad: {
                    codigoPostal: ''
                },
                Kumaka: {
                    codigoPostal: ''
                },
                'Vreed en Hoop': {
                    codigoPostal: ''
                },
                Corriverton: {
                    codigoPostal: ''
                },
                Paramahatoi: {
                    codigoPostal: ''
                },
                'Den Amstel': {
                    codigoPostal: ''
                },
                Achiwib: {
                    codigoPostal: ''
                },
                'Golden Grove': {
                    codigoPostal: ''
                },
                Enterprise: {
                    codigoPostal: ''
                },
                Hosororo: {
                    codigoPostal: ''
                },
                Suddie: {
                    codigoPostal: ''
                },
                Waterloo: {
                    codigoPostal: ''
                },
                'Better Hope': {
                    codigoPostal: ''
                },
                Paruima: {
                    codigoPostal: ''
                },
                'Cane Grove': {
                    codigoPostal: ''
                },
                Soesdyke: {
                    codigoPostal: ''
                },
                Enmore: {
                    codigoPostal: ''
                },
                Kwakwani: {
                    codigoPostal: ''
                },
                Annandale: {
                    codigoPostal: ''
                },
                Whitewater: {
                    codigoPostal: ''
                },
                'Unity Village': {
                    codigoPostal: ''
                },
                Zeeburg: {
                    codigoPostal: ''
                },
                Agatash: {
                    codigoPostal: ''
                },
                Apatou: {
                    codigoPostal: ''
                },
                'Mahaica': {
                    codigoPostal: ''
                },
                Mahdia: {
                    codigoPostal: ''
                },
                Parika: {
                    codigoPostal: ''
                },
                'Vreed-en-Hoop': {
                    codigoPostal: ''
                },
                'Mahaicony': {
                    codigoPostal: ''
                },
                Mabaruma: {
                    codigoPostal: ''
                },
                Lethem: {
                    codigoPostal: ''
                }
            }
        },
        Guinea: {
            continente: '',
            codigoPais: '329',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        'Guinea ecuatorial': {
            continente: '',
            codigoPais: '331',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        'Guinea-Bisáu': {
            continente: '',
            codigoPais: '334',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Haití: {
            continente: '',
            codigoPais: '341',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Honduras: {
            continente: 'América central',
            codigoPais: '345',
            abreviatura: '',
            ciudades: {
                Tegucigalpa: {
                    codigoPostal: ''
                },
                'San Pedro Sula': {
                    codigoPostal: ''
                },
                Comayagua: {
                    codigoPostal: ''
                },
                'El Progreso': {
                    codigoPostal: ''
                },
                Choluteca: {
                    codigoPostal: ''
                },
                'La Ceiba': {
                    codigoPostal: ''
                },
                Choloma: {
                    codigoPostal: ''
                },
                'Puerto Cortés': {
                    codigoPostal: ''
                },
                Tela: {
                    codigoPostal: ''
                },
                Danlí: {
                    codigoPostal: ''
                },
                Catacamas: {
                    codigoPostal: ''
                },
                'La Lima': {
                    codigoPostal: ''
                },
                'Distrito Central': {
                    codigoPostal: ''
                },
                Juticalpa: {
                    codigoPostal: ''
                },
                Siguatepeque: {
                    codigoPostal: ''
                },
                Tocoa: {
                    codigoPostal: ''
                },
                Olanchito: {
                    codigoPostal: ''
                },
                Nacaome: {
                    codigoPostal: ''
                },
                Gracias: {
                    codigoPostal: ''
                },
                'Santa Rosa de Copán': {
                    codigoPostal: ''
                },
                Yoro: {
                    codigoPostal: ''
                },
                'Santa Bárbara': {
                    codigoPostal: ''
                },
                'La Paz': {
                    codigoPostal: ''
                },
                Ocotepeque: {
                    codigoPostal: ''
                },
                'Puerto Lempira': {
                    codigoPostal: ''
                },
                Talanga: {
                    codigoPostal: ''
                },
                Marcala: {
                    codigoPostal: ''
                },
                'La Entrada': {
                    codigoPostal: ''
                },
                'Santa Cruz de Yojoa': {
                    codigoPostal: ''
                },
                Amapala: {
                    codigoPostal: ''
                },
                'La Campa': {
                    codigoPostal: ''
                },
                'La Esperanza': {
                    codigoPostal: ''
                },
                Comayagüela: {
                    codigoPostal: ''
                },
                'San José': {
                    codigoPostal: ''
                },
                'San José de Colinas': {
                    codigoPostal: ''
                },
                Trujillo: {
                    codigoPostal: ''
                },
                Yuscarán: {
                    codigoPostal: ''
                },
                Roatán: {
                    codigoPostal: ''
                },
                'San Juan': {
                    codigoPostal: ''
                },
                Veracruz: {
                    codigoPostal: ''
                },
                Guaimaca: {
                    codigoPostal: ''
                },
                Sonaguera: {
                    codigoPostal: ''
                },
                Potrerillos: {
                    codigoPostal: ''
                },
                'Santa Rita': {
                    codigoPostal: ''
                },
                'Nueva Ocotepeque': {
                    codigoPostal: ''
                },
                'San Antonio de Oriente': {
                    codigoPostal: ''
                },
                Sinuapa: {
                    codigoPostal: ''
                }
            }
        },
        Hungría: {
            continente: '',
            codigoPais: '355',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        India: {
            continente: '',
            codigoPais: '361',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Indonesia: {
            continente: '',
            codigoPais: '365',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Irak: {
            continente: '',
            codigoPais: '369',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Irán: {
            continente: '',
            codigoPais: '372',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Irlanda: {
            continente: '',
            codigoPais: '375',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Islandia: {
            continente: '',
            codigoPais: '379',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        'Islas Marshall': {
            continente: '',
            codigoPais: '472',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        'Islas Salomón': {
            continente: '',
            codigoPais: '677',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Israel: {
            continente: '',
            codigoPais: '383',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Italia: {
            continente: '',
            codigoPais: '386',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Jamaica: {
            continente: '',
            codigoPais: '391',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Japón: {
            continente: '',
            codigoPais: '399',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Jordania: {
            continente: '',
            codigoPais: '403',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Kazajistán: {
            continente: '',
            codigoPais: '406',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Kenia: {
            continente: '',
            codigoPais: '410',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Kirguistán: {
            continente: '',
            codigoPais: '412',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Kiribati: {
            continente: '',
            codigoPais: '411',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Kuwait: {
            continente: '',
            codigoPais: '413',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Laos: {
            continente: '',
            codigoPais: '420',//weed man
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Lesoto: {
            continente: '',
            codigoPais: '426',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Letonia: {
            continente: '',
            codigoPais: '429',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Líbano: {
            continente: '',
            codigoPais: '431',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Liberia: {
            continente: '',
            codigoPais: '434',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Libia: {
            continente: '',
            codigoPais: '438',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Liechtenstein: {
            continente: '',
            codigoPais: '440',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Lituania: {
            continente: '',
            codigoPais: '443',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Luxemburgo: {
            continente: '',
            codigoPais: '445',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        'Macedonia del Norte': {
            continente: '',
            codigoPais: '448',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Madagascar: {
            continente: '',
            codigoPais: '450',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Malasia: {
            continente: '',
            codigoPais: '455',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Malaui: {
            continente: '',
            codigoPais: '458',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Maldivas: {
            continente: '',
            codigoPais: '461',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Malí: {
            continente: '',
            codigoPais: '464',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Malta: {
            continente: '',
            codigoPais: '467',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Marruecos: {
            continente: '',
            codigoPais: '474',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Mauricio: {
            continente: '',
            codigoPais: '485',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Mauritania: {
            continente: '',
            codigoPais: '488',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        México: {
            continente: 'América central',
            codigoPais: '493',
            abreviatura: '',
            ciudades: {
                'Ciudad de México': {
                    codigoPostal: ''
                },
                Guadalajara: {
                    codigoPostal: ''
                },
                'Puebla de Zaragoza': {
                    codigoPostal: ''
                },
                'Oaxaca de Juárez': {
                    codigoPostal: ''
                },
                Monterrey: {
                    codigoPostal: ''
                },
                Mérida: {
                    codigoPostal: ''
                },
                Cancún: {
                    codigoPostal: ''
                },
                'Santiago de Querétaro': {
                    codigoPostal: ''
                },
                'San Luis Potosí': {
                    codigoPostal: ''
                },
                'Ciudad Juárez': {
                    codigoPostal: ''
                },
                'Xalapa-Enríquez': {
                    codigoPostal: ''
                },
                Cuernavaca: {
                    codigoPostal: ''
                },
                Aguascalientes: {
                    codigoPostal: ''
                },
                Zacatecas: {
                    codigoPostal: ''
                },
                Veracruz: {
                    codigoPostal: ''
                },
                Morelia: {
                    codigoPostal: ''
                },
                Saltillo: {
                    codigoPostal: ''
                },
                'Toluca de Lerdo': {
                    codigoPostal: ''
                },
                Culiacán: {
                    codigoPostal: ''
                },
                'Victoria de Durango': {
                    codigoPostal: ''
                },
                Mexicali: {
                    codigoPostal: ''
                },
                Hermosillo: {
                    codigoPostal: ''
                },
                'Tuxtla Gutiérrez': {
                    codigoPostal: ''
                },
                'Puerto Vallarta': {
                    codigoPostal: ''
                },
                'Pachuca de Soto': {
                    codigoPostal: ''
                },
                Campeche: {
                    codigoPostal: ''
                },
                Villahermosa: {
                    codigoPostal: ''
                },
                Tijuana: {
                    codigoPostal: ''
                },
                León: {
                    codigoPostal: ''
                },
                Guanajuato: {
                    codigoPostal: ''
                },
                'Ecatepec de Morelos': {
                    codigoPostal: ''
                },
                Acapulco: {
                    codigoPostal: ''
                },
                Tampico: {
                    codigoPostal: ''
                },
                Chihuahua: {
                    codigoPostal: ''
                },
                'Naucalpan de Juárez': {
                    codigoPostal: ''
                },
                Reynosa: {
                    codigoPostal: ''
                },
                'Cabo San Lucas': {
                    codigoPostal: ''
                },
                Torreón: {
                    codigoPostal: ''
                },
                Ensenada: {
                    codigoPostal: ''
                },
                'Playa del Carmen': {
                    codigoPostal: ''
                },
                'La Paz': {
                    codigoPostal: ''
                },
                Tepic: {
                    codigoPostal: ''
                },
                'San Miguel de Allende': {
                    codigoPostal: ''
                },
                'Chilpancingo de los Bravo': {
                    codigoPostal: ''
                },
                Fresnillo: {
                    codigoPostal: ''
                },
                Nezahualcóyotl: {
                    codigoPostal: ''
                },
                'San Pedro Garza García': {
                    codigoPostal: ''
                },
                Colima: {
                    codigoPostal: ''
                },
                Chetumal: {
                    codigoPostal: ''
                },
                'Tlalnepantla de Baz': {
                    codigoPostal: ''
                },
                Irapuato: {
                    codigoPostal: ''
                }
            }
        },
        Micronesia: {
            continente: '',
            codigoPais: '494',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Moldavia: {
            continente: '',
            codigoPais: '496',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Mónaco: {
            continente: '',
            codigoPais: '498',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Mongolia: {
            continente: '',
            codigoPais: '497',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Montenegro: {//TODO: mirar este no tiene codigo
            continente: '',
            codigoPais: '',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Mozambique: {
            continente: '',
            codigoPais: '505',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Namibia: {
            continente: '',
            codigoPais: '507',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Nauru: {
            continente: '',
            codigoPais: '508',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Nepal: {
            continente: '',
            codigoPais: '517',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Nicaragua: {
            continente: 'América central',
            codigoPais: '521',
            abreviatura: '',
            ciudades: {
                Managua: {
                    codigoPostal: ''
                },
                León: {
                    codigoPostal: ''
                },
                Granada: {
                    codigoPostal: ''
                },
                Chinandega: {
                    codigoPostal: ''
                },
                Masaya: {
                    codigoPostal: ''
                },
                Matagalpa: {
                    codigoPostal: ''
                },
                Estelí: {
                    codigoPostal: ''
                },
                Jinotega: {
                    codigoPostal: ''
                },
                Tipitapa: {
                    codigoPostal: ''
                },
                'El Viejo': {
                    codigoPostal: ''
                },
                Rivas: {
                    codigoPostal: ''
                },
                'San Juan del Sur': {
                    codigoPostal: ''
                },
                Juigalpa: {
                    codigoPostal: ''
                },
                Boaco: {
                    codigoPostal: ''
                },
                'Ciudad Darío': {
                    codigoPostal: ''
                },
                Jinotepe: {
                    codigoPostal: ''
                },
                Bluefields: {
                    codigoPostal: ''
                },
                Nandaime: {
                    codigoPostal: ''
                },
                Niquinohomo: {
                    codigoPostal: ''
                },
                'San Rafael del Norte': {
                    codigoPostal: ''
                },
                Ocotal: {
                    codigoPostal: ''
                },
                Somoto: {
                    codigoPostal: ''
                },
                'San Juan de Limay': {
                    codigoPostal: ''
                },
                Bilwi: {
                    codigoPostal: ''
                },
                'Ciudad Antigua': {
                    codigoPostal: ''
                },
                Diriamba: {
                    codigoPostal: ''
                },
                Quezalguaque: {
                    codigoPostal: ''
                },
                Tonalá: {
                    codigoPostal: ''
                },
                'San Carlos': {
                    codigoPostal: ''
                },
                'El Almendro': {
                    codigoPostal: ''
                },
                'Río Blanco': {
                    codigoPostal: ''
                },
                Masatepe: {
                    codigoPostal: ''
                },
                Chichigalpa: {
                    codigoPostal: ''
                },
                Siuna: {
                    codigoPostal: ''
                },
                Nagarote: {
                    codigoPostal: ''
                },
                Camoapa: {
                    codigoPostal: ''
                },
                'Nueva Guinea': {
                    codigoPostal: ''
                },
                'San Juan de Oriente': {
                    codigoPostal: ''
                },
                'Villa El Carmen': {
                    codigoPostal: ''
                },
                'Ruinas de León Viejo': {
                    codigoPostal: ''
                },
                Altagracia: {
                    codigoPostal: ''
                },
                'Muy Muy': {
                    codigoPostal: ''
                },
                'San Rafael del Sur': {
                    codigoPostal: ''
                },
                Nandasmo: {
                    codigoPostal: ''
                },
                Somotillo: {
                    codigoPostal: ''
                },
                Mateare: {
                    codigoPostal: ''
                },
                Nindirí: {
                    codigoPostal: ''
                },
                Corinto: {
                    codigoPostal: ''
                },
                Acoyapa: {
                    codigoPostal: ''
                },
                'Bocana de Paiwás': {
                    codigoPostal: ''
                },
                'La Paz Centro': {
                    codigoPostal: ''
                }
            }
        },
        Níger: {
            continente: '',
            codigoPais: '525',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Nigeria: {
            continente: '',
            codigoPais: '528',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Noruega: {
            continente: '',
            codigoPais: '538',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        'Nueva Zelanda': {
            continente: '',
            codigoPais: '548',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Omán: {
            continente: '',
            codigoPais: '556',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        'Países Bajos': {
            continente: '',
            codigoPais: '573',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Pakistán: {
            continente: '',
            codigoPais: '576',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Palaos: {//TODO: mirar este no tiene codigo
            continente: '',
            codigoPais: '',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Panamá: {
            continente: 'América central',
            codigoPais: '580',
            abreviatura: '',
            ciudades: {
                Panamá: {
                    codigoPostal: ''
                },
                Colón: {
                    codigoPostal: ''
                },
                David: {
                    codigoPostal: ''
                },
                Santiago: {
                    codigoPostal: ''
                },
                Chitré: {
                    codigoPostal: ''
                },
                Penonomé: {
                    codigoPostal: ''
                },
                'Las Cumbres': {
                    codigoPostal: ''
                },
                Changuinola: {
                    codigoPostal: ''
                },
                'Las Tablas': {
                    codigoPostal: ''
                },
                'Bocas del Toro': {
                    codigoPostal: ''
                },
                'Bajo Boquete': {
                    codigoPostal: ''
                },
                Aguadulce: {
                    codigoPostal: ''
                },
                Antón: {
                    codigoPostal: ''
                },
                Arraiján: {
                    codigoPostal: ''
                },
                Chepo: {
                    codigoPostal: ''
                },
                Chame: {
                    codigoPostal: ''
                },
                Natá: {
                    codigoPostal: ''
                },
                'Río Sereno': {
                    codigoPostal: ''
                },
                Tocumen: {
                    codigoPostal: ''
                },
                Macaracas: {
                    codigoPostal: ''
                },
                'Los Pozos': {
                    codigoPostal: ''
                },
                Tolé: {
                    codigoPostal: ''
                },
                Pesé: {
                    codigoPostal: ''
                },
                Alanje: {
                    codigoPostal: ''
                },
                'Santa Isabel': {
                    codigoPostal: ''
                },
                Parita: {
                    codigoPostal: ''
                },
                Chimán: {
                    codigoPostal: ''
                },
                'Chiriquí Grande': {
                    codigoPostal: ''
                },
                Donoso: {
                    codigoPostal: ''
                },
                'Las Minas': {
                    codigoPostal: ''
                },
                Chepigana: {
                    codigoPostal: ''
                },
                Pinogana: {
                    codigoPostal: ''
                },
                Ocú: {
                    codigoPostal: ''
                },
                'Puerto Armuelles': {
                    codigoPostal: ''
                },
                Cañazas: {
                    codigoPostal: ''
                },
                Capira: {
                    codigoPostal: ''
                },
                Pocrí: {
                    codigoPostal: ''
                },
                Mariato: {
                    codigoPostal: ''
                },
                'La Pintada': {
                    codigoPostal: ''
                },
                'Río de Jesús': {
                    codigoPostal: ''
                },
                'Distrito de David': {
                    codigoPostal: ''
                },
                Calobre: {
                    codigoPostal: ''
                },
                Boquerón: {
                    codigoPostal: ''
                },
                Gualaca: {
                    codigoPostal: ''
                },
                Tonosí: {
                    codigoPostal: ''
                },
                Guararé: {
                    codigoPostal: ''
                },
                'Nombre de Dios': {
                    codigoPostal: ''
                },
                'La Palma': {
                    codigoPostal: ''
                },
                'El Porvenir': {
                    codigoPostal: ''
                }
            }
        },
        'Papúa Nueva Guinea': {
            continente: '',
            codigoPais: '545',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Paraguay: {
            continente: 'América del sur',
            codigoPais: '586',
            abreviatura: '',
            ciudades: {
                'Ciudad del Este': {
                    codigoPostal: ''
                },
                Asunción: {
                    codigoPostal: ''
                },
                Encarnación: {
                    codigoPostal: ''
                },
                'Pedro Juan Caballero': {
                    codigoPostal: ''
                },
                'San Bernardino': {
                    codigoPostal: ''
                },
                Villarrica: {
                    codigoPostal: ''
                },
                Concepción: {
                    codigoPostal: ''
                },
                Areguá: {
                    codigoPostal: ''
                },
                'Fuerte Olimpo': {
                    codigoPostal: ''
                },
                'San Cosme y Damián': {
                    codigoPostal: ''
                },
                'San Lorenzo': {
                    codigoPostal: ''
                },
                Paraguarí: {
                    codigoPostal: ''
                },
                Caacupé: {
                    codigoPostal: ''
                },
                'Coronel Oviedo': {
                    codigoPostal: ''
                },
                'San Juan Bautista': {
                    codigoPostal: ''
                },
                'San Pedro del Ycuamandiyú': {
                    codigoPostal: ''
                },
                Filadelfia: {
                    codigoPostal: ''
                },
                Itá: {
                    codigoPostal: ''
                },
                Luque: {
                    codigoPostal: ''
                },
                'Salto del Guairá': {
                    codigoPostal: ''
                },
                Caazapá: {
                    codigoPostal: ''
                },
                Caaguazú: {
                    codigoPostal: ''
                },
                Lambaré: {
                    codigoPostal: ''
                },
                'Villa Hayes': {
                    codigoPostal: ''
                },
                'Presidente Franco': {
                    codigoPostal: ''
                },
                'Capitán Bado': {
                    codigoPostal: ''
                },
                Hernandarias: {
                    codigoPostal: ''
                },
                Capiatá: {
                    codigoPostal: ''
                },
                Pilar: {
                    codigoPostal: ''
                },
                Ypacaraí: {
                    codigoPostal: ''
                },
                'Gran Asunción': {
                    codigoPostal: ''
                },
                Itauguá: {
                    codigoPostal: ''
                },
                'San Ignacio': {
                    codigoPostal: ''
                },
                Curuguaty: {
                    codigoPostal: ''
                },
                Ñemby: {
                    codigoPostal: ''
                },
                'Mariano Roque Alonso': {
                    codigoPostal: ''
                },
                'Benjamín Aceval': {
                    codigoPostal: ''
                },
                'San Antonio': {
                    codigoPostal: ''
                },
                Piribebuy: {
                    codigoPostal: ''
                },
                Horqueta: {
                    codigoPostal: ''
                },
                Alberdi: {
                    codigoPostal: ''
                },
                Yegros: {
                    codigoPostal: ''
                },
                Valenzuela: {
                    codigoPostal: ''
                },
                Atyrá: {
                    codigoPostal: ''
                },
                'Villa Elisa': {
                    codigoPostal: ''
                },
                Villeta: {
                    codigoPostal: ''
                },
                'Nueva Londres': {
                    codigoPostal: ''
                },
                'Nueva Italia': {
                    codigoPostal: ''
                },
                Ypané: {
                    codigoPostal: ''
                },
                Ybycuí: {
                    codigoPostal: ''
                },
                Belén: {
                    codigoPostal: ''
                }
            }
        },
        Perú: {
            continente: 'América del sur',
            codigoPais: '589',
            abreviatura: '',
            ciudades: {
                Lima: {
                    codigoPostal: '02002'
                },
                Arequipa: {
                    codigoPostal: '02002'
                },
                Cusco: {
                    codigoPostal: '02002'
                },
                Trujillo: {
                    codigoPostal: '02002'
                },
                Chiclayo: {
                    codigoPostal: '02002'
                },
                Huancayo: {
                    codigoPostal: '02002'
                },
                Iquitos: {
                    codigoPostal: '02002'
                },
                Piura: {
                    codigoPostal: '02002'
                },
                Cajamarca: {
                    codigoPostal: '02002'
                },
                Ayacucho: {
                    codigoPostal: '02002'
                },
                Huaraz: {
                    codigoPostal: '02002'
                },
                Puno: {
                    codigoPostal: '02002'
                },
                Tacna: {
                    codigoPostal: '02002'
                },
                Juliaca: {
                    codigoPostal: '02002'
                },
                Ica: {
                    codigoPostal: '02002'
                },
                Callao: {
                    codigoPostal: '02002'
                },
                Huánuco: {
                    codigoPostal: '02002'
                },
                Tumbes: {
                    codigoPostal: '02002'
                },
                Chimbote: {
                    codigoPostal: '02002'
                },
                Sullana: {
                    codigoPostal: '02002'
                },
                'Puerto Maldonado': {
                    codigoPostal: '02002'
                },
                Huacho: {
                    codigoPostal: '02002'
                },
                Tarapoto: {
                    codigoPostal: '02002'
                },
                Pucallpa: {
                    codigoPostal: '02002'
                },
                Huancavelica: {
                    codigoPostal: '02002'
                },
                'Chincha Alta': {
                    codigoPostal: '02002'
                },
                Talara: {
                    codigoPostal: '02002'
                },
                Guadalupe: {
                    codigoPostal: '02002'
                },
                Jaén: {
                    codigoPostal: '02002'
                },
                Rioja: {
                    codigoPostal: '02002'
                },
                Chachapoyas: {
                    codigoPostal: '02002'
                },
                Yunguyo: {
                    codigoPostal: '02002'
                },
                Paita: {
                    codigoPostal: '02002'
                },
                Yauyos: {
                    codigoPostal: '02002'
                },
                Ilo: {
                    codigoPostal: '02002'
                },
                Barranca: {
                    codigoPostal: '02002'
                },
                Jequetepeque: {
                    codigoPostal: '02002'
                },
                Cajabamba: {
                    codigoPostal: '02002'
                },
                Desaguadero: {
                    codigoPostal: '02002'
                },
                Jauja: {
                    codigoPostal: '02002'
                },
                Otuzco: {
                    codigoPostal: '02002'
                },
                Requena: {
                    codigoPostal: '02002'
                },
                Ferreñafe: {
                    codigoPostal: '02002'
                },
                Virú: {
                    codigoPostal: '02002'
                },
                Quillabamba: {
                    codigoPostal: '02002'
                },
                Zarumilla: {
                    codigoPostal: '02002'
                },
                'San Lorenzo': {
                    codigoPostal: '02002'
                },
                'La Rinconada': {
                    codigoPostal: '02002'
                },
                Pisco: {
                    codigoPostal: '02002'
                },
                Abancay: {
                    codigoPostal: '02002'
                },
                Moyobamba: {
                    codigoPostal: '02002'
                }
            }
        },
        Polonia: {
            continente: '',
            codigoPais: '603',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Portugal: {
            continente: '',
            codigoPais: '607',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        'Reino Unido': {
            continente: '',
            codigoPais: '628',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        'República Centroafricana': {
            continente: '',
            codigoPais: '640',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        'República Checa': {
            continente: '',
            codigoPais: '644',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        'República del Congo': {
            continente: '',
            codigoPais: '177',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        'República Democrática del Congo': {//TODO: mirar este no tiene codigo
            continente: '',
            codigoPais: '',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        'República Dominicana': {
            continente: '',
            codigoPais: '647',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        'República Sudafricana': {//TODO: mirar este no tiene codigo
            continente: '',
            codigoPais: '',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Ruanda: {
            continente: '',
            codigoPais: '675',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Rumanía: {
            continente: '',
            codigoPais: '670',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Rusia: {
            continente: '',
            codigoPais: '676',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Samoa: {
            continente: '',
            codigoPais: '687',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        'San Cristóbal y Nieves': {
            continente: '',
            codigoPais: '695',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        'San Marino': {
            continente: '',
            codigoPais: '697',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        'San Vicente y las Granadinas': {
            continente: '',
            codigoPais: '705',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        'Santa Lucía': {
            continente: '',
            codigoPais: '715',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        'Santo Tomé y Príncipe': {
            continente: '',
            codigoPais: '720',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Senegal: {
            continente: '',
            codigoPais: '728',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Serbia: {//TODO: mirar este no tiene codigo
            continente: '',
            codigoPais: '',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Seychelles: {
            continente: '',
            codigoPais: '731',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        'Sierra Leona': {
            continente: '',
            codigoPais: '735',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Singapur: {
            continente: '',
            codigoPais: '741',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Siria: {
            continente: '',
            codigoPais: '744',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Somalia: {
            continente: '',
            codigoPais: '748',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        'Sri Lanka': {
            continente: '',
            codigoPais: '750',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Suazilandia: {//TODO: mirar este no tiene codigo
            continente: '',
            codigoPais: '',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Sudán: {
            continente: '',
            codigoPais: '759',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        'Sudán del Sur': {//TODO: mirar este no tiene codigo
            continente: '',
            codigoPais: '',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Suecia: {
            continente: '',
            codigoPais: '764',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Suiza: {
            continente: '',
            codigoPais: '767',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Surinam: {
            continente: 'América del sur',
            codigoPais: '770',
            abreviatura: '',
            ciudades: {
                Paramaribo: {
                    codigoPostal: ''
                },
                Lelydorp: {
                    codigoPostal: ''
                },
                Brokopondo: {
                    codigoPostal: ''
                },
                Albina: {
                    codigoPostal: ''
                },
                'Nieuw Amsterdam': {
                    codigoPostal: ''
                },
                'Nieuw Nickerie': {
                    codigoPostal: ''
                },
                Moengo: {
                    codigoPostal: ''
                },
                Wageningen: {
                    codigoPostal: ''
                },
                Onverwacht: {
                    codigoPostal: ''
                },
                Groningen: {
                    codigoPostal: ''
                },
                Totness: {
                    codigoPostal: ''
                },
                Brownsweg: {
                    codigoPostal: ''
                },
                Marienburg: {
                    codigoPostal: ''
                },
                Meerzorg: {
                    codigoPostal: ''
                },
                'Nieuw Jacobkondre': {
                    codigoPostal: ''
                },
                Cotticadorp: {
                    codigoPostal: ''
                },
                Goddo: {
                    codigoPostal: ''
                },
                'Distrito de Commewijne': {
                    codigoPostal: ''
                },
                Benzdorp: {
                    codigoPostal: ''
                },
                Peleloetepu: {
                    codigoPostal: ''
                },
                Kwamalasamutu: {
                    codigoPostal: ''
                },
                Aurora: {
                    codigoPostal: ''
                },
                Kajana: {
                    codigoPostal: ''
                },
                Anapaike: {
                    codigoPostal: ''
                },
                Botopasi: {
                    codigoPostal: ''
                },
                Pokigron: {
                    codigoPostal: ''
                },
                Bitagron: {
                    codigoPostal: ''
                },
                Apoera: {
                    codigoPostal: ''
                },
                Pontoetoe: {
                    codigoPostal: ''
                },
                Apetina: {
                    codigoPostal: ''
                },
                Djumu: {
                    codigoPostal: ''
                },
                'Distrito de Paramaribo': {
                    codigoPostal: ''
                },
                Bakhuis: {
                    codigoPostal: ''
                },
                Abenaston: {
                    codigoPostal: ''
                },
                Heidoti: {
                    codigoPostal: ''
                },
                Alliance: {
                    codigoPostal: ''
                },
                Jenny: {
                    codigoPostal: ''
                },
                Warnakomoponafaja: {
                    codigoPostal: ''
                },
                'Tjakkatjakka Ston': {
                    codigoPostal: ''
                },
                'South Drain': {
                    codigoPostal: ''
                },
                Lebidoti: {
                    codigoPostal: ''
                },
                Friendship: {
                    codigoPostal: ''
                },
                'Bigi Poika': {
                    codigoPostal: ''
                },
                Wanhatti: {
                    codigoPostal: ''
                },
                Coeroeni: {
                    codigoPostal: ''
                },
                Corneliskondre: {
                    codigoPostal: ''
                },
                Kwakoegron: {
                    codigoPostal: ''
                },
                Zanderij: {
                    codigoPostal: ''
                },
                Galibi: {
                    codigoPostal: ''
                },
                Boskamp: {
                    codigoPostal: ''
                },
                'Kampong Baroe': {
                    codigoPostal: ''
                }
            }
        },
        Tailandia: {
            continente: '',
            codigoPais: '776',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Tanzania: {
            continente: '',
            codigoPais: '780',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Tayikistán: {//TODO: mirar este no tiene codigo
            continente: '',
            codigoPais: '',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        'Timor Oriental (Timor-Leste)': {
            continente: '',
            codigoPais: '788',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Togo: {
            continente: '',
            codigoPais: '800',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Tonga: {
            continente: '',
            codigoPais: '810',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        'Trinidad y Tobago': {
            continente: 'América del sur',
            codigoPais: '815',
            abreviatura: '',
            ciudades: {
                'Puerto España': {
                    codigoPostal: ''
                },
                Scarborough: {
                    codigoPostal: ''
                },
                'San Fernando': {
                    codigoPostal: ''
                },
                'Chaguanas': {
                    codigoPostal: ''
                },
                Arima: {
                    codigoPostal: ''
                },
                'Sangre Grande': {
                    codigoPostal: ''
                },
                Tunapuna: {
                    codigoPostal: ''
                },
                'Point Fortin': {
                    codigoPostal: ''
                },
                Couva: {
                    codigoPostal: ''
                },
                'Princess Town': {
                    codigoPostal: ''
                },
                Siparia: {
                    codigoPostal: ''
                },
                'San Juan': {
                    codigoPostal: ''
                },
                Mayaro: {
                    codigoPostal: ''
                },
                Penal: {
                    codigoPostal: ''
                },
                Marabella: {
                    codigoPostal: ''
                },
                'Río Claro': {
                    codigoPostal: ''
                },
                Laventille: {
                    codigoPostal: ''
                },
                Arouca: {
                    codigoPostal: ''
                },
                Tabaquite: {
                    codigoPostal: ''
                },
                Castara: {
                    codigoPostal: ''
                },
                'San José': {
                    codigoPostal: ''
                },
                Carnbee: {
                    codigoPostal: ''
                },
                Tacarigua: {
                    codigoPostal: ''
                },
                Gasparillo: {
                    codigoPostal: ''
                },
                Morvant: {
                    codigoPostal: ''
                },
                Piarco: {
                    codigoPostal: ''
                },
                'Diego Martin': {
                    codigoPostal: ''
                }
            }
        },
        Túnez: {//TODO: mirar este no tiene codigo
            continente: '',
            codigoPais: '',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Turkmenistán: {
            continente: '',
            codigoPais: '825',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Turquía: {
            continente: '',
            codigoPais: '827',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Tuvalu: {
            continente: '',
            codigoPais: '828',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Ucrania: {
            continente: '',
            codigoPais: '830',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Uganda: {
            continente: '',
            codigoPais: '833',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Uruguay: {
            continente: 'América del sur',
            codigoPais: '845',
            abreviatura: '',
            ciudades: {
                Montevideo: {
                    codigoPostal: ''
                },
                Artigas: {
                    codigoPostal: ''
                },
                'Treinta y Tres': {
                    codigoPostal: ''
                },
                Rocha: {
                    codigoPostal: ''
                },
                Paysandú: {
                    codigoPostal: ''
                },
                Florida: {
                    codigoPostal: ''
                },
                Maldonado: {
                    codigoPostal: ''
                },
                Young: {
                    codigoPostal: ''
                },
                'Bella Unión': {
                    codigoPostal: ''
                },
                Rivera: {
                    codigoPostal: ''
                },
                Dolores: {
                    codigoPostal: ''
                },
                'Río Branco': {
                    codigoPostal: ''
                },
                Guichón: {
                    codigoPostal: ''
                },
                'San Ramón': {
                    codigoPostal: ''
                },
                'José Pedro Varela': {
                    codigoPostal: ''
                },
                'Nueva Palmira': {
                    codigoPostal: ''
                },
                Salto: {
                    codigoPostal: ''
                },
                'Punta del Este': {
                    codigoPostal: ''
                },
                'Ciudad de la Costa': {
                    codigoPostal: ''
                },
                Tacuarembó: {
                    codigoPostal: ''
                },
                Rosario: {
                    codigoPostal: ''
                },
                Pando: {
                    codigoPostal: ''
                },
                Piriápolis: {
                    codigoPostal: ''
                },
                'Colonia del Sacramento': {
                    codigoPostal: ''
                },
                Carmelo: {
                    codigoPostal: ''
                },
                'Las Piedras': {
                    codigoPostal: ''
                },
                Minas: {
                    codigoPostal: ''
                },
                Melo: {
                    codigoPostal: ''
                },
                Canelones: {
                    codigoPostal: ''
                },
                'Parque del Plata': {
                    codigoPostal: ''
                },
                'San José de Mayo': {
                    codigoPostal: ''
                },
                Mercedes: {
                    codigoPostal: ''
                },
                'Departamento de Rocha': {
                    codigoPostal: ''
                },
                Durazno: {
                    codigoPostal: ''
                },
                'Fray Bentos': {
                    codigoPostal: ''
                },
                Trinidad: {
                    codigoPostal: ''
                },
                'La Paloma': {
                    codigoPostal: ''
                },
                'Ciudad del Plata': {
                    codigoPostal: ''
                },
                Chuy: {
                    codigoPostal: ''
                },
                'Paso de los Toros': {
                    codigoPostal: ''
                },
                'San Carlos': {
                    codigoPostal: ''
                },
                'Nueva Helvecia': {
                    codigoPostal: ''
                },
                Tranqueras: {
                    codigoPostal: ''
                },
                Castillos: {
                    codigoPostal: ''
                },
                'Paso de Carrasco': {
                    codigoPostal: ''
                },
                Toledo: {
                    codigoPostal: ''
                },
                'Pan de Azúcar': {
                    codigoPostal: ''
                },
                'La Paz': {
                    codigoPostal: ''
                },
                Tarariras: {
                    codigoPostal: ''
                },
                'Sarandí del Yí': {
                    codigoPostal: ''
                },
                Libertad: {
                    codigoPostal: ''
                }
            }
        },
        Uzbekistán: {
            continente: '',
            codigoPais: '847',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Vanuatu: {
            continente: '',
            codigoPais: '551',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Venezuela: {
            continente: 'América del sur',
            codigoPais: '850',
            abreviatura: '',
            ciudades: {
                Caracas: {
                    codigoPostal: ''
                },
                'Ciudad Bolívar': {
                    codigoPostal: ''
                },
                'Ciudad Guayana': {
                    codigoPostal: ''
                },
                Maracaibo: {
                    codigoPostal: ''
                },
                Valencia: {
                    codigoPostal: ''
                },
                Barcelona: {
                    codigoPostal: ''
                },
                Coro: {
                    codigoPostal: ''
                },
                Barquisimeto: {
                    codigoPostal: ''
                },
                Mérida: {
                    codigoPostal: ''
                },
                Maracay: {
                    codigoPostal: ''
                },
                'San Cristóbal': {
                    codigoPostal: ''
                },
                Barinas: {
                    codigoPostal: ''
                },
                Acarigua: {
                    codigoPostal: ''
                },
                'Puerto la Cruz': {
                    codigoPostal: ''
                },
                Cumaná: {
                    codigoPostal: ''
                },
                Maturín: {
                    codigoPostal: ''
                },
                Porlamar: {
                    codigoPostal: ''
                },
                Lechería: {
                    codigoPostal: ''
                },
                'San Fernando de Apure': {
                    codigoPostal: ''
                },
                Guanare: {
                    codigoPostal: ''
                },
                'Puerto Ayacucho': {
                    codigoPostal: ''
                },
                Tucupita: {
                    codigoPostal: ''
                },
                Carora: {
                    codigoPostal: ''
                },
                'San Juan de Los Morros': {
                    codigoPostal: ''
                },
                'Puerto Cabello': {
                    codigoPostal: ''
                },
                'San Carlos': {
                    codigoPostal: ''
                },
                'San Felipe': {
                    codigoPostal: ''
                },
                Valera: {
                    codigoPostal: ''
                },
                Calabozo: {
                    codigoPostal: ''
                },
                Tinaquillo: {
                    codigoPostal: ''
                },
                'Punto Fijo': {
                    codigoPostal: ''
                },
                'La Victoria': {
                    codigoPostal: ''
                },
                Boconó: {
                    codigoPostal: ''
                },
                'Valle de la Pascua': {
                    codigoPostal: ''
                },
                'El Vigía': {
                    codigoPostal: ''
                },
                Anaco: {
                    codigoPostal: ''
                },
                Upata: {
                    codigoPostal: ''
                },
                Guasdualito: {
                    codigoPostal: ''
                },
                Machiques: {
                    codigoPostal: ''
                },
                Carúpano: {
                    codigoPostal: ''
                },
                'Santa Bárbara de Zulia': {
                    codigoPostal: ''
                },
                'El Tigre': {
                    codigoPostal: ''
                },
                'Los Teques': {
                    codigoPostal: ''
                },
                Cabimas: {
                    codigoPostal: ''
                },
                'El Tocuyo': {
                    codigoPostal: ''
                },
                Turmero: {
                    codigoPostal: ''
                },
                Trujillo: {
                    codigoPostal: ''
                },
                'La Guaira': {
                    codigoPostal: ''
                },
                'Ciudad Ojeda': {
                    codigoPostal: ''
                },
                'La Asunción': {
                    codigoPostal: ''
                },
                'Ocumare del Tuy': {
                    codigoPostal: ''
                }
            }
        },
        Vietnam: {
            continente: '',
            codigoPais: '855',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Yemen: {
            continente: '',
            codigoPais: '880',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        'Yibuti (Djibouti)': {
            continente: '',
            codigoPais: '783',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Zambia: {
            continente: '',
            codigoPais: '890',
            abreviatura: '',
            ciudades: this.#Afganistán
        },
        Zimbabue: {
            continente: '',
            codigoPais: '665',
            abreviatura: '',
            ciudades: this.#Afganistán
        }
    }

    //resivir datos de un servidor para llenar datos
    /*constructor() {
    }*/

    obtenerPaises(nombre) {
        
        let paises = [];
        
        if (nombre) {
            for (const i in this.#paises) {
                if (this.normalizarText(i).indexOf(this.normalizarText(nombre)) >= 0) {
                    paises.push(i);
                }
            }
        }else{
            for (const i in this.#paises) {
                paises.push(i);
            }
        }

        return paises;
        
        /*return {
                paises, 
                continente: (continente) => {
                    let p = []
                    for (const i in this.#paises) {
                        for (const e in paises) {
                            if(paises[e] == i && (this.normalizarText(this.#paises[i].continente).indexOf(this.normalizarText(continente)) >= 0)){
                                p.push(i);
                            }
                        }
                    }

                    return p;
                }
        };*/
    }

    obtenerPaisesXcontinente(continente) {
        let paises = [];
        for (const i in this.#paises) {
            if(this.normalizarText(this.#paises[i].continente).indexOf(this.normalizarText(continente)) >= 0) {
                paises.push(i);
            }
        }

        return paises;
    }

    obtenerPaisObj(pais) {
        try {
            for (const i in this.#paises) {
                if (this.normalizarText(i).indexOf(this.normalizarText(pais)) >= 0) {
                    return this.#paises[i];
                }
            }
        } catch (error) {
            return ['hay un error en la busqueda'];
        }
    }

    obtenerCiudades(pais) {
        let ciudades = [];
        try {
            for (const i in this.#paises[pais].ciudades) {
                ciudades.push(i);
            }

            return ciudades;
        } catch (error) {
            for (const i in this.#paises) {
                if(this.normalizarText(i).indexOf(this.normalizarText(pais)) >= 0){
                    for (const e in this.#paises[i].ciudades) {
                        ciudades.push(e);
                    }

                    return ciudades;
                }
            }

            return ['no existe la ciudad declarada'];
        }
    }

    obtenerCiudadObj(pais, ciudad) {
        try {
            return this.#paises[pais].ciudades[ciudad]
        } catch (error) {
            for (const i in this.#paises) {
                if(this.normalizarText(i).indexOf(this.normalizarText(pais)) >= 0){
                    for (const e in this.#paises[i].ciudades) {
                        if(this.normalizarText(e).indexOf(this.normalizarText(ciudad)) >= 0){
                            return this.#paises[i].ciudades[e];
                        }
                    }
                }
            }

            return 'no existe datos asociados';
        }
    }
}

//export {Paises as default};