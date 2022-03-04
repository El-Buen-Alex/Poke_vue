
const showPokemon =()=>import('./components/pokemon/showPokemon.vue')
const pokemonTemplate=()=>import('./components/pokemon/pokemonTemplate.vue')
const pokemonNotFound=()=>import('./components/errors/pokemonNotFound.vue')
const  showDetailsPokemonVue =()=>import( './components/pokemon/detailsPoekom/showDetailsPokemon.vue')
export const routes =[
    {
        name:'/',
        path:'/showPokemon',
        component:showPokemon,
        children:[
            {
                name:'pokemonList',
                path:'/pokemonList',
                component:pokemonTemplate, 
            },
            {
                name:'pokemonDetail',
                path:'/detailsPokemon',
                component:showDetailsPokemonVue
            }  
        ]
    },
    {
        name:'pokemonNotFound',
        path:'/notFound',
        component: pokemonNotFound
    },
    {
        path:'*',
        redirect : '/showPokemon'
    },
]