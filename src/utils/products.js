const products = [
    {
      id: 30,
      name: "Skyy Vodka Raspberry",
      stock: 100,
      cost: 1500,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      capacity: 1500,
      image: [
        "https://d2r9epyceweg5n.cloudfront.net/stores/001/229/780/products/skyy-vodka-raspberry-12x750cc1-dd41a641ddd977802b16522867682521-1024-1024.jpeg"
      ],
      sales: 0,
      categoryId: 2,
      brandId: 95,
      category: {
        name: "Bebidas Blancas",
        id: 2
      },
    
      
    },
    {
      id: 29,
      name: "Gin Beefeater",
      stock: 100,
      cost: 1400,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      capacity: 1500,
      image: [
        "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/211/660/products/beefeater-20211-105b4c8048f1d9f7da16214295898598-640-0.png"
      ],
      sales: 0,
      categoryId: 2,
      brandId: 94,
      category: {
        name: "Bebidas Blancas",
        id: 2
      },
    
      brand: {
        id: 94,
        name: "Gin Beefeater"
      }
    
    },
    {
      id: 76,
      name: "Gin Buenos Aires",
      stock: 100,
      cost: 1200,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      capacity: 750,
      image: [
        "//i2.wp.com/destileriamoretti.com/wp-content/uploads/2022/06/BOTELLA-BSASGIN-scaled.jpg?fit=2560%2C2560&ssl=1"
      ],
      sales: 0,
      categoryId: 2,
      brandId: 10,
      packingId: null,
      category: {
        name: "Bebidas Blancas",
        id: 2
      },
      brand: {
        id: 10,
        name: "Buenos Aires"
      },
      
    },
    {
      id: 170,
      name: "Espumante Dilema Dulce",
      stock: 100,
      cost: 800,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      capacity: 550,
      image: [
        "https://fecovita.vteximg.com.br/arquivos/ids/155477-450-450/Dilema_Espumante_Blanco_Dulce.png?v=637033715164000000"
      ],
      sales: 0,
      
      categoryId: 1,
      brandId: 10,
      packingId: null,
      category: {
        name: "Espumantes",
        id: 1
      },
      brand: {
        
        name: "Dilema"
      },
      reviews: []
    },
    {
      id: 233,
      name: "Espumante Dilema Rosad",
      stock: 100,
      cost: 900,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      capacity: 750,
      image: [
        "https://fecovita.vteximg.com.br/arquivos/ids/155478-450-450/Dilema_Espumante_Rose.png?v=637033715170400000"
      ],
      sales: 0,
      categoryId: 1,
      brandId: 10,
      packingId: null,
      category: {
        name: "Espumantes",
        id: 1
      },
      brand: {
        id: 10,
        name: "Dilema"
      },
      reviews: []
    },
    {
      id: 139,
      name: "Espumante Norton Dulce",
      stock: 100,
      cost: 890,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      capacity: 750,
      image: [
        "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/211/660/products/norton-dulce-ok1-422e344f90f792701e16364891664156-640-0.png"
      ],
      sales: 0,
      
      categoryId: 1,
      brandId: 16,
      packingId: null,
      category: {
        name: "Espumantes",
        id: 1
      },
      brand: {
        id: 16,
        name: "Norton"
      },
      
    },
    {
      id: 68,
      name: "Licor Bar&Pubs Dulce De Leche",
      stock: 89,
      cost: 850,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      capacity: 750,
      image: [
        "https://www.ciprianomayorista.com/wp-content/uploads/2021/09/WhatsApp-Image-2021-09-09-at-18.29.37.jpeg"
      ],
      sales: 0,
      categoryId: 3,
      brandId: 16,
      packingId: null,
      category: {
        name: "Licores",
        id: 3
      },
      brand: {

        name: "Bar&Pubs"
      },

    },
    {
      id: 222,
      name: "Licor Crema Sheridans",
      stock: 100,
      cost: 300,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      capacity: 375,
      image: [
        "https://tonelprivado.vteximg.com.br/arquivos/ids/183633-1000-1000/224060.jpg?v=637660408146030000"
      ],
      sales: 0,
      categoryId: 3,
      brandId: 16,
      packingId: null,
      category: {
        name: "Licores",
        id: 3
      },
      brand: {
        name: "heridans"
      },
    
    },
    {
      id: 135,
      name: " Licor Yerba Mala La Scala",
      stock: 100,
      cost: 1500,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      capacity: 750,
      image: [
        "http://d3ugyf2ht6aenh.cloudfront.net/stores/131/273/products/licor-la-scala-con-copita-yerba-mate1-9434755b2bd8c73aff15949816183207-640-0.jpg"
      ],
      sales: 0,
      categoryId: 3,
    
      packingId: null,
      category: {
        name: "Licores",
        id: 3
      },
      brand: {
    
        name: "La"
      },
      reviews: []
    },
    {
      id: 31,
      name: "Vodka Absolut",
      stock: 100,
      cost: 2200,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      capacity: 700,
      image: [
        "https://tusuper.com.ar/image/cache/catalog/P2022/JUNIO/SIN/Absolut-Vodka-750ml-600x600.jpg"
      ],
      sales: 0,
      categoryId: 2,
 
      packingId: null,
      category: {
        name: "Bebidas Blancas",
        id: 2
      },
      brand: {
        
        name: "Absolut"
      }
      

     
    },
    {
      id: 31,
      name: "Vodka Absolut Raspberry",
      stock: 100,
      cost: 2200,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      capacity: 700,
      image: [
        "https://kalimnosgourmet.com.ar/wp-content/uploads/2020/11/1615-1.jpg"
      ],
      sales: 0,
      categoryId: 2,
    
      packingId: null,
      category: {
        name: "Bebidas Blancas",
        id: 2
      },
      brand: {
        
        name: "Absolut"
      }
      

     
    }
  ];

  module.exports = {
    products,
  }