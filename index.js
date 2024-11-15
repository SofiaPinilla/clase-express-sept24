const express = require("express"); //importamos express
const app = express(); //inicializar express
const PORT = 3000;
const path = require("path")

app.use(express.json())//parsear body
app.use(express.static(path.join(__dirname, 'public')));

//aqui tu código
//Nuestro primer endpoint
// app.get("/bienvenida",(req,res)=>{
//     res.send("Hola bienvenidx a mi servidor")
// })

// app.get("/",(req,res)=>{
//     res.send("Página primera")
// })

// app.get("/personajes",(req,res)=>{
//     res.send(["Personaje1","Personaje2","Personaje3"])
// })

// //ejemplo por parametro
// app.get("/myName/:name", (req, res) => {
//     res.send("My name is " + req.params.name);
//   });

// //Mi profe es y el nombre de vuestra profe
//   app.get("/teacherName/:name",(req,res)=>{
//     res.send("El nombre de la teacher es:"+ req.params.name)
//   })

//   //QUERY STRING
//   app.get("/myName3",(req,res)=>{
//     // console.log(req.query.nombre)
//     res.send("Mi nombre es: "+ req.query.nombre)
//   })

//   app.post("/myInfo",(req,res)=>{
//     // console.log(req.body)
//     res.send(req.body)
//   })

  //Pasar info por el body

//   app.get('/mipagina',(req,res)=>{
//     res.sendFile(path.join(__dirname,'public','index.html'))
// })

// app.get('/mipagina2',(req,res)=>{
//     res.sendFile(path.join(__dirname,'public','pagina2.html'))
// })

//para levantar en el servidor en el puerto 3000
const members = [
  {
    id: 1,
    name: "John Doe",
    email: "john@gmail.com"
  },
  {
    id: 2,
    name: "Bob Williams",
    email: "bob@gmail.com"
  },
  {
    id: 3,
    name: "Shannon Jackson",
    email: "shannon@gmail.com"
  },
];

//ENDPOINT PARA VER LOS MEMBERS
app.get("/members",(req,res)=>{
  // res.send(members)
  res.send({info:"The members",results:members})
})

//ENDPOINT PARA CREAR UN NUEVO MEMBER
app.post("/createMember",(req,res)=>{
  // console.log(req.body)
  const newMember ={
    id: members.length + 1,
    name:req.body.name,
    email:req.body.email
  }//creamos el nuevo Member
  members.push(newMember)//añadimos el nuevo member en el array
  res.send(members)
})

//ACTUALIZAR UN NUEVO MEMBER
// localhost:3000/actualizarMember/id/2
app.put("/actualizarMember/id/:id",(req,res)=>{
  // console.log(req.params.id)
  members.forEach(member =>{
    // console.log(member.id)
    // console.log(req.params.id)
    if(member.id == req.params.id){
      member.name= req.body.name
      member.email = req.body.email
    }
  })
  res.send(members)
})

//DELETE A MEMBER

app.delete("/deleteMember/id/:id",(req,res)=>{
  // console.log(req.params.id)
  res.send(members.filter(member => member.id != req.params.id))
})

// Ruta: Raíz del sitio (‘/’) ,Metodo: get, Acción: Mostrar un mensaje de bienvenida
app.get("/",(req,res)=>{
  res.send("Mensaje bienvenida")
}
)

// Ruta: Usuarios, Método: post, Acción: Mostrar un mensaje que diga: crear un usuario
app.post("/usuarios",(req,res)=>{
  res.send("Crear un usuario")
}
)

let products=  [
  { id: 1, nombre: 'Taza de Harry Potter' , precio: 300},
  { id: 2, nombre: 'FIFA 23 PS5' , precio: 1000},
  {  id: 3, nombre: 'Figura Goku Super Saiyan' , precio: 100},
  {  id: 4,  nombre: 'Zelda Breath of the Wild' , precio: 200},
  {  id: 5,  nombre: 'Skin Valorant' , precio: 120},
  {  id: 6, nombre: 'Taza de Star Wars' , precio: 220}
]

app.listen(PORT, () => console.log("Servidor levantado en el puerto " + PORT));
