
const showPokemon =()=>import('./components/pokemon/showPokemon.vue')
const pokemonTemplate=()=>import('./components/pokemon/pokemonTemplate.vue')
const pokemonNotFound=()=>import('./components/errors/pokemonNotFound.vue')
export const routes =[
    {
        path:'*',
        redirect : '/showPokemon'
    },
    {
        name:'showPokemon',
        path:'/showPokemon',
        component:showPokemon,
        children:[
            {
                name:'pokemonList',
                path:'/pokemonList',
                component:pokemonTemplate, 
            },   
        ]
    },
    {
        name:'pokemonNotFound',
        path:'/notFound',
        component: pokemonNotFound
    }
]